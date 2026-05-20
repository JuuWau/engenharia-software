<script setup lang="ts">
import { ref } from "vue";
import OccurrencesFilters from "./components/filters/OccurrencesFilters.vue";
import OccurrencesHeader from "./components/header/OccurrencesHeader.vue";
import OccurrencesStats from "./components/header/OccurrencesStats.vue";
import OccurrencesTable from "./components/list/OccurrencesTable.vue";
import OccurrencesCreateModal from "./components/modals/OccurrencesCreateModal.vue";
import type { Occurrence } from "./types/occurrence.types";

const createModalOpen = ref(false);

const items = ref<Occurrence[]>([
  {
    id: 1,
    title: "Ocorrência exemplo",
    description: "Descrição exemplo",
    occurred_at: "12/05/2026",
    severity: "medium",
  },
]);
</script>

<template>
    <div class="space-y-6 m-10">
      <OccurrencesHeader
        @create="createModalOpen = true"
      />

      <OccurrencesStats
        :total="12"
        :high="2"
      />

      <OccurrencesFilters />

      <OccurrencesTable
        :items="items"
      />

      <OccurrencesCreateModal
        v-model="createModalOpen"
      />
    </div>
</template>