import type { DataForSEOResponse } from "./types";

export class DataForSEOClient {
  private baseUrl = "https://api.dataforseo.com/v3";
  private authHeader: string;

  constructor(login: string, password: string) {
    this.authHeader =
      "Basic " +
      Buffer.from(`${login}:${password}`).toString("base64");
  }

  async post<T>(
    endpoint: string,
    body: Record<string, unknown>[],
  ): Promise<DataForSEOResponse<T>> {
    const response = await fetch(`${this.baseUrl}${endpoint}`, {
      method: "POST",
      headers: {
        Authorization: this.authHeader,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error(
        `DataForSEO API error: ${response.status} ${response.statusText}`,
      );
    }

    return response.json() as Promise<DataForSEOResponse<T>>;
  }
}
