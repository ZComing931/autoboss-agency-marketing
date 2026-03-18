import { DataForSEOClient } from "./client";
import type { SerpResult, SerpItem } from "./types";

export class SerpAPI {
  constructor(private client: DataForSEOClient) {}

  /**
   * Get organic SERP results for a keyword.
   * Returns top results with domains, positions, and estimated traffic.
   */
  async getOrganicResults(
    keyword: string,
    locationCode: number,
    languageCode = "en",
    depth = 10,
  ): Promise<SerpItem[]> {
    const response = await this.client.post<SerpResult>(
      "/serp/google/organic/live/advanced",
      [
        {
          keyword,
          location_code: locationCode,
          language_code: languageCode,
          depth,
        },
      ],
    );

    const task = response.tasks?.[0];
    if (!task || task.status_code !== 20000 || !task.result) {
      throw new Error(
        `SERP API error: ${task?.status_message || "No result"}`,
      );
    }

    const result = task.result[0];
    if (!result?.items) return [];

    // Filter to organic results only (exclude ads, featured snippets, etc.)
    return result.items.filter(
      (item) => item.type === "organic",
    );
  }
}
