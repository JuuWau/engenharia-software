<script setup lang="ts">
import Card from "@/components/ui/card/Card.vue";
import type { Occurrence }
  from "../../types/occurrence.types";
import OccurrenceActions from "../shared/OccurrenceActions.vue";
import OccurrenceBadge from "../shared/OccurrenceBadge.vue";

defineProps<{
  item: Occurrence;
}>();
</script>

<template>
  <Card class="space-y-4 p-4">
    <div class="flex items-start justify-between">
      <div>
        <h3 class="font-semibold">
          {{ item.title }}
        </h3>

        <p class="text-muted-foreground mt-1 text-sm">
          {{ item.description }}
        </p>
      </div>

      <OccurrenceBadge
        :severity="item.severity"
      />
    </div>

    <div
      class="text-muted-foreground flex items-center justify-between text-sm"
    >
      <span>
        {{ item.occurred_at }}
      </span>

      <OccurrenceActions />
    </div>
  </Card>
</template>