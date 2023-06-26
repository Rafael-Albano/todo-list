import { v4 as uuidv4 } from "uuid";

export class Task {
  id: string | null = null;
  description: string;
  isCompleted: boolean;
  createdAt: string;
  updatedAt?: string;

  constructor(description: string, isCompleted = false, updatedAt?: string) {
    this.id = this?.id ?? uuidv4();
    this.description = description;
    this.isCompleted = isCompleted;
    this.createdAt = new Date().toISOString();
    this.updatedAt = updatedAt ?? new Date().toISOString();
  }
}
