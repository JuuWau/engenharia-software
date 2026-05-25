export interface OccurrenceImage {
  id: number;
  name: string;
  path: string;
  url: string;
}

export interface OccurrenceUser {
  id: number;
  name: string;
}

export interface Occurrence {
  id: number;
  title: string;
  description: string;
  occurred_at: string;
  severity: OccurrenceSeverity;
  images: OccurrenceImage[];
}

export type OccurrenceSeverity =
  | "low"
  | "medium"
  | "high";