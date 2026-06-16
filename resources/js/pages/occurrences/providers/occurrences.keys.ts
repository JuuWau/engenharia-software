import type { InjectionKey } from "vue";
import type { OccurrencesContext } from "./occurrences.provider";

export const OCCURRENCES_KEY =
  Symbol() as InjectionKey<OccurrencesContext>;