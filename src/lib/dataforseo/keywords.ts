import { DataForSEOClient } from "./client";
import type { KeywordSearchVolumeResult } from "./types";

export class KeywordsAPI {
  constructor(private client: DataForSEOClient) {}

  /**
   * Get search volume data for a list of keywords.
   * Uses the Keywords Data API — Google Ads Search Volume endpoint.
   */
  async getSearchVolume(
    keywords: string[],
    locationCode: number,
    languageCode = "en",
  ): Promise<KeywordSearchVolumeResult[]> {
    const response = await this.client.post<KeywordSearchVolumeResult[]>(
      "/keywords_data/google_ads/search_volume/live",
      [
        {
          keywords,
          location_code: locationCode,
          language_code: languageCode,
        },
      ],
    );

    const task = response.tasks?.[0];
    if (!task || task.status_code !== 20000 || !task.result) {
      throw new Error(
        `Keywords API error: ${task?.status_message || "No result"}`,
      );
    }

    // The result is an array with one item that contains the keyword data
    // Flatten in case the API nests it
    return task.result.flat();
  }
}
