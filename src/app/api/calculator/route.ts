import { NextResponse } from "next/server";
import { calculatorFormSchema } from "@/lib/forms";
import {
  DataForSEOClient,
  KeywordsAPI,
  SerpAPI,
  type KeywordData,
  type CompetitorData,
  type CityKeywordBreakdown,
  type CalculatorResult,
} from "@/lib/dataforseo";

const CTR_BY_POSITION: Record<number, number> = {
  1: 0.28,
  2: 0.15,
  3: 0.11,
};
const CONVERSION_RATE = 0.04;
const CLOSE_RATE = 0.3;

function calcPositionEstimate(totalVolume: number, ctr: number, avgJobSize: number) {
  const clicks = Math.round(totalVolume * ctr);
  const leads = Math.round(clicks * CONVERSION_RATE);
  const jobs = Math.round(leads * CLOSE_RATE);
  const revenue = jobs * avgJobSize;
  return { ctr, clicks, leads, jobs, revenue };
}

const STATE_LOCATION_CODES: Record<string, number> = {
  AL: 21133, AK: 21132, AZ: 21136, AR: 21135, CA: 21137,
  CO: 21138, CT: 21139, DE: 21141, FL: 21142, GA: 21143,
  HI: 21144, ID: 21146, IL: 21147, IN: 21148, IA: 21149,
  KS: 21150, KY: 21151, LA: 21152, ME: 21154, MD: 21155,
  MA: 21156, MI: 21157, MN: 21158, MS: 21159, MO: 21160,
  MT: 21161, NE: 21162, NV: 21163, NH: 21164, NJ: 21165,
  NM: 21166, NY: 21167, NC: 21168, ND: 21169, OH: 21170,
  OK: 21171, OR: 21172, PA: 21173, RI: 21175, SC: 21176,
  SD: 21177, TN: 21178, TX: 21179, UT: 21180, VT: 21182,
  VA: 21183, WA: 21184, WV: 21185, WI: 21186, WY: 21187,
  DC: 21140,
};

function getClient(): DataForSEOClient {
  const login = process.env.DATAFORSEO_LOGIN;
  const password = process.env.DATAFORSEO_PASSWORD;
  if (!login || !password) {
    throw new Error("DataForSEO credentials not configured");
  }
  return new DataForSEOClient(login, password);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = calculatorFormSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid input", details: parsed.error.flatten() },
        { status: 400 },
      );
    }

    const { keywords, cities, state, avgJobSize } = parsed.data;
    const locationCode = STATE_LOCATION_CODES[state.toUpperCase()];

    if (!locationCode) {
      return NextResponse.json({ error: "Unsupported state" }, { status: 400 });
    }

    const keywordList: string[] = [];
    for (const keyword of keywords) {
      for (const city of cities) {
        keywordList.push(`${keyword.toLowerCase()} ${city.toLowerCase()}`);
      }
    }
    const uniqueKeywords = [...new Set(keywordList)];

    const client = getClient();
    const keywordsAPI = new KeywordsAPI(client);
    const serpAPI = new SerpAPI(client);

    const volumeResults = await keywordsAPI.getSearchVolume(uniqueKeywords, locationCode);

    const allKeywords: KeywordData[] = volumeResults
      .filter((r) => r.search_volume > 0)
      .map((r) => ({
        keyword: r.keyword,
        searchVolume: r.search_volume,
        cpc: r.cpc ?? 0,
        competition: r.competition_level ?? null,
      }))
      .sort((a, b) => b.searchVolume - a.searchVolume);

    const totalSearchVolume = allKeywords.reduce((sum, k) => sum + k.searchVolume, 0);

    const cityBreakdown: CityKeywordBreakdown[] = cities.map((city) => {
      const cityLower = city.toLowerCase();
      const cityKws = allKeywords.filter((kw) => kw.keyword.endsWith(` ${cityLower}`));
      return {
        city,
        keywords: cityKws,
        subtotalVolume: cityKws.reduce((sum, k) => sum + k.searchVolume, 0),
      };
    });

    const topCompetitors: CompetitorData[] = [];
    if (allKeywords.length > 0) {
      const topKeyword = allKeywords[0].keyword;
      const serpResults = await serpAPI.getOrganicResults(topKeyword, locationCode);
      for (const item of serpResults.slice(0, 3)) {
        const ctr = CTR_BY_POSITION[item.rank_group] || 0.05;
        topCompetitors.push({
          domain: item.domain,
          position: item.rank_group,
          keyword: topKeyword,
          estimatedTraffic: Math.round(allKeywords[0].searchVolume * ctr),
        });
      }
    }

    const revenueByPosition = {
      position1: calcPositionEstimate(totalSearchVolume, CTR_BY_POSITION[1], avgJobSize),
      position2: calcPositionEstimate(totalSearchVolume, CTR_BY_POSITION[2], avgJobSize),
      position3: calcPositionEstimate(totalSearchVolume, CTR_BY_POSITION[3], avgJobSize),
    };

    const result: CalculatorResult = {
      totalSearchVolume,
      revenueByPosition,
      topCompetitors,
      keywords: allKeywords,
      cities,
      state,
      cityBreakdown,
    };

    return NextResponse.json(result);
  } catch (error) {
    console.error("Calculator API error:", error);
    return NextResponse.json(
      { error: "Failed to calculate. Please try again." },
      { status: 500 },
    );
  }
}
