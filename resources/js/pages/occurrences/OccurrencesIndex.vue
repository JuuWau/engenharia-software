<script setup lang="ts">
import { computed, provide, ref } from "vue";
import OccurrencesFilters from "./components/filters/OccurrencesFilters.vue";
import OccurrencesHeader from "./components/header/OccurrencesHeader.vue";
import OccurrencesStats from "./components/header/OccurrencesStats.vue";
import OccurrencesTable from "./components/list/OccurrencesTable.vue";
import OccurrencesCreateModal from "./components/modals/OccurrencesCreateModal.vue";
import OccurrencesDeleteModal from "./components/modals/OccurrencesDeleteModal.vue";
import OccurrencesEditModal from "./components/modals/OccurrencesEditModal.vue";
import type { Occurrence, OccurrenceSeverity } from "./types/occurrence.types";

const props = defineProps<{
  occurrences: {
    data: Occurrence[];
  };
}>();

const createModalOpen = ref(false);

const editModalOpen = ref(false);

const deleteModalOpen = ref(false);

const selectedOccurrence = ref<Occurrence | null>(null);

const search = ref("");

const severity = ref<OccurrenceSeverity | "">("");

const date = ref("");

const filteredOccurrences =
  computed(() => {
    return occurrences.value.filter(
      (occurrence) => {

        const matchesSearch =
          occurrence.title
            .toLowerCase()
            .includes(
              search.value
                .toLowerCase()
            );

        const matchesSeverity =
          !severity.value ||
          occurrence.severity ===
            severity.value;

        const matchesDate =
          !date.value ||
          occurrence.occurred_at
            .split(" ")[0] ===
              date.value;

        return (
          matchesSearch &&
          matchesSeverity &&
          matchesDate
        );
      }
    );
  });

provide(
  "selectedOccurrence",
  selectedOccurrence
);

provide(
  "editModalOpen",
  editModalOpen
);

provide(
  "deleteModalOpen",
  deleteModalOpen
);


const occurrences = ref(
  props.occurrences.data ?? []
);

provide(
  "occurrences",
  occurrences
);

const total = computed(
  () => occurrences.value.length
);

function countBySeverity(
  severity: OccurrenceSeverity
) {
  return occurrences.value.filter(
    (occurrence) =>
      occurrence.severity === severity
  ).length;
}

const high = computed(() =>
  countBySeverity("high")
);

const medium = computed(() =>
  countBySeverity("medium")
);

const low = computed(() =>
  countBySeverity("low")
);
</script>

<template>
    <div class="space-y-6 m-10">
      <OccurrencesHeader
        @create="createModalOpen = true"
      />

      <OccurrencesStats
        :total="total"
        :high="high"
        :medium="medium"
        :low="low"
      />

      <OccurrencesFilters
        v-model:search="search"
        v-model:severity="severity"
        v-model:date="date"
      />

      <OccurrencesTable
        :items="filteredOccurrences"
      />

      <OccurrencesCreateModal
        v-model="createModalOpen"
      />
      <OccurrencesEditModal
        v-model="editModalOpen"
        :occurrence="selectedOccurrence"
      />
      <OccurrencesDeleteModal
        v-model="deleteModalOpen"
        :occurrence="selectedOccurrence"
      />
    </div>
</template>