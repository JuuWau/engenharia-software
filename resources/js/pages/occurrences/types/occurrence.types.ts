export type OccurrenceSeverity =
  | "low"
  | "medium"
  | "high";

export interface Occurrence {
  id: number;
  title: string;
  description: string;
  occurred_at: string;
  severity: OccurrenceSeverity;
  images?: number;
}