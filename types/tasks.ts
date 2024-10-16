export enum PRIORITIES {
  HIGH = "HIGH",
  MEDIUM = "MEDIUM",
  LOW = "LOW",
}

export enum CATEGORIES {
  COMPLETE = "COMPLETE",
  TODO = "TODO",
  IN_PROGRESS = "IN PROGRESS",
  ON_HOLD = "ON HOLD",
}

export interface Task {
  id: string;
  title: string;
  priority: PRIORITIES;
  category: CATEGORIES;
  date: string;
  tag: string;
}
