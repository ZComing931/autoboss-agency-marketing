// DataForSEO API response wrapper
export interface DataForSEOResponse<T> {
  version: string;
  status_code: number;
  status_message: string;
  time: string;
  cost: number;
  tasks_count: number;
  tasks_error: number;
  tasks: DataForSEOTask<T>[];
}

export interface DataForSEOTask<T> {
  id: string;
  status_code: number;
  status_message: string;
  time: string;
  cost: number;
  result_count: number;
  path: string[];
  data: Record<string, unknown>;
  result: T[] | null;
}

// Keywords Data API
export interface KeywordsSearchVolumeRequest {
  keywords: string[];
  location_code: number;
  language_code: string;
}

export interface KeywordSearchVolumeResult {
  keyword: string;
  search_volume: number;
  competition: number;
  competition_level: "LOW" | "MEDIUM" | "HIGH";
  cpc: number;
  monthly_searches: MonthlySearch[];
}

export interface MonthlySearch {
  year: number;
  month: number;
  search_volume: number;
}

// SERP API
export interface SerpRequest {
  keyword: string;
  location_code: number;
  language_code: string;
  depth: number;
}

export interface SerpResult {
  keyword: string;
  type: string;
  se_domain: string;
  location_code: number;
  check_url: string;
  se_results_count: number;
  items_count: number;
  items: SerpItem[];
}

export interface SerpItem {
  type: string;
  rank_group: number;
  rank_absolute: number;
  position: string;
  domain: string;
  title: string;
  url: string;
  description: string;
  breadcrumb: string;
  etv: number; // estimated traffic volume
}

// Calculator-specific types
export interface KeywordData {
  keyword: string;
  searchVolume: number;
  cpc: number;
  competition: "LOW" | "MEDIUM" | "HIGH" | null;
}

export interface CompetitorData {
  domain: string;
  position: number;
  keyword: string;
  estimatedTraffic: number;
}

export interface CityKeywordBreakdown {
  city: string;
  keywords: KeywordData[];
  subtotalVolume: number;
}

export interface PositionEstimate {
  ctr: number;
  clicks: number;
  leads: number;
  jobs: number;
  revenue: number;
}

export interface CalculatorResult {
  totalSearchVolume: number;
  revenueByPosition: {
    position1: PositionEstimate;
    position2: PositionEstimate;
    position3: PositionEstimate;
  };
  topCompetitors: CompetitorData[];
  keywords: KeywordData[];
  cities: string[];
  state: string;
  cityBreakdown: CityKeywordBreakdown[];
}
