import { inject } from "vue";

import { OCCURRENCES_KEY } from "../providers/occurrences.keys";

export function useOccurrences() {
  const context = inject(OCCURRENCES_KEY);

  if (!context) {
    throw new Error(
      "useOccurrences must be used inside provider"
    );
  }

  return context;
}