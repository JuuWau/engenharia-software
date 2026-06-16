<script setup lang="ts">
import type {
  ICellRendererParams,
} from "ag-grid-community";

import type {
  OccurrenceSeverity,
} from "../../types/occurrence.types";

const props = defineProps<{
  params: ICellRendererParams;
}>();

const variants:
  Record<OccurrenceSeverity, string> = {
    low:
      "bg-green-100 text-green-700",

    medium:
      "bg-amber-100 text-amber-700",

    high:
      "bg-red-100 text-red-700",
  };

const labels:
  Record<OccurrenceSeverity, string> = {
    low: "Baixa",

    medium: "Média",

    high: "Alta",
  };

const severity = props.params
  .value as keyof typeof variants;
</script>

<template>
  <span
    class="rounded-full px-2 py-1 text-xs font-medium"
    :class="variants[severity]"
  >
    {{ labels[severity] }}
  </span>
</template>