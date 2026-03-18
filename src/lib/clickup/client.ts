import type {
  ClickUpSpace,
  ClickUpFolder,
  ClickUpList,
  ClickUpTask,
  ClickUpCustomField,
  CreateSpaceRequest,
  CreateFolderRequest,
  CreateListRequest,
  CreateListWithStatusesRequest,
  CreateTaskRequest,
  CreateCustomFieldRequest,
} from "./types";

const BASE_URL = "https://api.clickup.com/api/v2";

export class ClickUpClient {
  private token: string;

  constructor(token?: string) {
    const t = token ?? process.env.CLICKUP_API_TOKEN;
    if (!t) {
      throw new Error(
        "ClickUp API token required. Set CLICKUP_API_TOKEN env var or pass to constructor."
      );
    }
    this.token = t;
  }

  private async request<T>(
    path: string,
    options: RequestInit = {}
  ): Promise<T> {
    const res = await fetch(`${BASE_URL}${path}`, {
      ...options,
      headers: {
        Authorization: this.token,
        "Content-Type": "application/json",
        ...options.headers,
      },
    });

    if (!res.ok) {
      const body = await res.text();
      throw new Error(`ClickUp API error ${res.status}: ${body}`);
    }

    return res.json() as Promise<T>;
  }

  // Teams (Workspaces)
  async getTeams(): Promise<{ id: string; name: string }[]> {
    const data = await this.request<{
      teams: { id: string; name: string }[];
    }>("/team");
    return data.teams;
  }

  // Spaces
  async getSpaces(teamId: string): Promise<ClickUpSpace[]> {
    const data = await this.request<{ spaces: ClickUpSpace[] }>(
      `/team/${teamId}/space?archived=false`
    );
    return data.spaces;
  }

  async createSpace(
    teamId: string,
    space: CreateSpaceRequest
  ): Promise<ClickUpSpace> {
    return this.request<ClickUpSpace>(`/team/${teamId}/space`, {
      method: "POST",
      body: JSON.stringify(space),
    });
  }

  // Folders
  async getFolders(spaceId: string): Promise<ClickUpFolder[]> {
    const data = await this.request<{ folders: ClickUpFolder[] }>(
      `/space/${spaceId}/folder?archived=false`
    );
    return data.folders;
  }

  async createFolder(
    spaceId: string,
    folder: CreateFolderRequest
  ): Promise<ClickUpFolder> {
    return this.request<ClickUpFolder>(`/space/${spaceId}/folder`, {
      method: "POST",
      body: JSON.stringify(folder),
    });
  }

  // Lists
  async getLists(folderId: string): Promise<ClickUpList[]> {
    const data = await this.request<{ lists: ClickUpList[] }>(
      `/folder/${folderId}/list?archived=false`
    );
    return data.lists;
  }

  async createList(
    folderId: string,
    list: CreateListRequest
  ): Promise<ClickUpList> {
    return this.request<ClickUpList>(`/folder/${folderId}/list`, {
      method: "POST",
      body: JSON.stringify(list),
    });
  }

  async createFolderlessList(
    spaceId: string,
    list: CreateListRequest | CreateListWithStatusesRequest
  ): Promise<ClickUpList> {
    return this.request<ClickUpList>(`/space/${spaceId}/list`, {
      method: "POST",
      body: JSON.stringify(list),
    });
  }

  // Custom Fields
  async getCustomFields(listId: string): Promise<ClickUpCustomField[]> {
    const data = await this.request<{ fields: ClickUpCustomField[] }>(
      `/list/${listId}/field`
    );
    return data.fields;
  }

  async createCustomField(
    listId: string,
    field: CreateCustomFieldRequest
  ): Promise<ClickUpCustomField> {
    return this.request<ClickUpCustomField>(`/list/${listId}/field`, {
      method: "POST",
      body: JSON.stringify(field),
    });
  }

  // Tasks
  async getTasks(
    listId: string,
    params?: { archived?: boolean; page?: number }
  ): Promise<ClickUpTask[]> {
    const query = new URLSearchParams();
    if (params?.archived !== undefined)
      query.set("archived", String(params.archived));
    if (params?.page !== undefined) query.set("page", String(params.page));
    const data = await this.request<{ tasks: ClickUpTask[] }>(
      `/list/${listId}/task?${query}`
    );
    return data.tasks;
  }

  async createTask(
    listId: string,
    task: CreateTaskRequest
  ): Promise<ClickUpTask> {
    return this.request<ClickUpTask>(`/list/${listId}/task`, {
      method: "POST",
      body: JSON.stringify(task),
    });
  }

  async updateTask(
    taskId: string,
    updates: Partial<CreateTaskRequest>
  ): Promise<ClickUpTask> {
    return this.request<ClickUpTask>(`/task/${taskId}`, {
      method: "PUT",
      body: JSON.stringify(updates),
    });
  }

  // Convenience: set up a full client workspace
  async setupClientWorkspace(
    spaceId: string,
    clientName: string,
    city: string
  ): Promise<{ folder: ClickUpFolder; lists: ClickUpList[] }> {
    const folder = await this.createFolder(spaceId, {
      name: `${clientName} - ${city}`,
    });

    const listNames = [
      "Onboarding",
      "Foundation Sprint",
      "Growth Sprint",
      "Content Calendar",
      "Link Building",
      "Citations",
    ];

    const lists: ClickUpList[] = [];
    for (const name of listNames) {
      const list = await this.createList(folder.id, { name });
      lists.push(list);
    }

    return { folder, lists };
  }
}
