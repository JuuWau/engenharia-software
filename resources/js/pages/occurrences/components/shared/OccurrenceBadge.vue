<script setup lang="ts">
import type { OccurrenceSeverity }
  from "../../types/occurrence.types";

const props = defineProps<{
  severity: OccurrenceSeverity;
}>();

const variants = {
  low: "bg-slate-100 text-slate-700",
  medium: "bg-amber-100 text-amber-700",
  high: "bg-red-100 text-red-700",
};
</script>

<template>
  <span
    class="rounded-full px-2 py-1 text-xs font-medium"
    :class="variants[props.severity]"
  >
    {{ props.severity }}
  </span>
</template>