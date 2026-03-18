// ClickUp API v2 types

export interface ClickUpSpace {
  id: string;
  name: string;
  private: boolean;
  statuses: ClickUpStatus[];
}

export interface ClickUpFolder {
  id: string;
  name: string;
  space: { id: string };
  lists: ClickUpList[];
}

export interface ClickUpList {
  id: string;
  name: string;
  folder?: { id: string };
  space: { id: string };
  statuses: ClickUpStatus[];
}

export interface ClickUpStatus {
  status: string;
  type: "open" | "custom" | "closed";
  color: string;
}

export interface ClickUpTask {
  id: string;
  name: string;
  description?: string;
  status: { status: string };
  priority?: { id: string; priority: string };
  assignees: ClickUpUser[];
  due_date?: string | null;
  start_date?: string | null;
  parent?: string | null;
  list: { id: string };
  tags: { name: string }[];
  custom_fields?: ClickUpCustomField[];
}

export interface ClickUpUser {
  id: number;
  username: string;
  email: string;
}

export interface ClickUpCustomField {
  id: string;
  name: string;
  type: string;
  value?: string | number | string[];
  type_config?: {
    options?: { id: string; name: string; color?: string }[];
  };
}

// Request types for creating resources

export interface CreateSpaceRequest {
  name: string;
  multiple_assignees?: boolean;
  features?: {
    due_dates?: { enabled: boolean };
    time_tracking?: { enabled: boolean };
    custom_fields?: { enabled: boolean };
  };
}

export interface CreateFolderRequest {
  name: string;
}

export interface CreateListRequest {
  name: string;
  status?: string;
}

export interface CreateListWithStatusesRequest {
  name: string;
  content?: string;
  statuses?: {
    status: string;
    type: "open" | "custom" | "closed";
    color: string;
  }[];
}

export interface CreateCustomFieldRequest {
  name: string;
  type:
    | "text"
    | "drop_down"
    | "number"
    | "currency"
    | "date"
    | "url"
    | "email"
    | "users"
    | "labels"
    | "manual_progress";
  type_config?: {
    options?: { name: string; color?: string }[];
    currency_type?: string;
    start?: number;
    end?: number;
  };
}

export interface CreateTaskRequest {
  name: string;
  description?: string;
  status?: string;
  priority?: 1 | 2 | 3 | 4; // 1=Urgent, 2=High, 3=Normal, 4=Low
  due_date?: number; // Unix timestamp ms
  start_date?: number;
  assignees?: number[];
  tags?: string[];
  parent?: string; // task ID for subtasks
  custom_fields?: { id: string; value: string | number | string[] }[];
}

// Pipeline & template types

export type SalesPipelineStatus =
  | "Lead"
  | "Discovery Call"
  | "Proposal Sent"
  | "Negotiation"
  | "Won"
  | "Lost";

export type CampaignPipelineStatus =
  | "Onboarding"
  | "Foundation Sprint"
  | "Growth Sprint"
  | "Active"
  | "Paused"
  | "Churned";

export interface TaskTemplate {
  name: string;
  description?: string;
  priority?: 1 | 2 | 3 | 4;
  relativeDueDay: number; // days from campaign start
  assigneeRole: "Account Manager" | "SEO Specialist" | "Content Writer";
  sopReference?: string;
  subtasks?: Omit<TaskTemplate, "subtasks">[];
}

export interface SprintTemplate {
  listName: string;
  tasks: TaskTemplate[];
}

export interface ClientWorkspaceConfig {
  clientName: string;
  city: string;
  campaignStartDate: Date;
}
