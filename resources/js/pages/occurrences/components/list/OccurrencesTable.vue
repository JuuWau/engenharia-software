<script setup lang="ts">
import type { ColDef, } from "ag-grid-community";
import { AgGridVue } from "ag-grid-vue3";
import type { Ref } from "vue";
import { computed, inject, } from "vue";
import Card from "@/components/ui/card/Card.vue";
import { formatDate } from "@/pages/utils/dateFormater";
import type { Occurrence, } from "../../types/occurrence.types";
import OccurrenceActions from "../shared/OccurrenceActions.vue";
import OccurrenceBadge from "../shared/OccurrenceBadge.vue";

const props = defineProps<{
  items: Occurrence[];
}>();

const occurrences = computed(
  () => props.items ?? []
);

const selectedOccurrence =
  inject<Ref<Occurrence | null>>(
    "selectedOccurrence"
  );

const editModalOpen =
  inject<Ref<boolean>>(
    "editModalOpen"
  );

const deleteModalOpen =
  inject<Ref<boolean>>(
    "deleteModalOpen"
  );

const handleEdit = (
  item: Occurrence
) => {
  if (
    !selectedOccurrence ||
    !editModalOpen
  ) {
    return;
  }

  selectedOccurrence.value = item;

  editModalOpen.value = true;
};

const handleDelete = (
  item: Occurrence
) => {
  if (
    !selectedOccurrence ||
    !deleteModalOpen
  ) {
    return;
  }

  selectedOccurrence.value = item;

  deleteModalOpen.value = true;
};

const colDefs = computed<
  ColDef[]
>(() => [
  {
    field: "title",
    headerName: "Título",
    flex: 2,
    minWidth: 180,
  },

  {
    field: "occurred_at",
    headerName: "Data",
    flex: 1,
    minWidth: 130,

    valueFormatter: (params) =>
      formatDate(params.value),
  },

  {
    field: "severity",
    headerName: "Severidade",
    flex: 1,
    minWidth: 140,

    cellRenderer:
      OccurrenceBadge,
  },

  {
    headerName: "Ações",
    width: 100,

    sortable: false,
    filter: false,

    cellRenderer:
      OccurrenceActions,

    cellRendererParams: {
      onEdit: handleEdit,
      onDelete: handleDelete,
    },
  },
]);
</script>

<template>
  <Card
    class="overflow-hidden border shadow-sm"
  >
    <div class="p-2 sm:p-4">
      <div
        class="ag-theme-quartz overflow-hidden rounded-xl border"
        style="
          height: 65vh;
          min-height: 450px;
          width: 100%;
        "
      >
        <AgGridVue
          class="h-full w-full"
          :rowData="occurrences"
          :columnDefs="colDefs"
          :pagination="true"
          :paginationPageSize="10"
          :animateRows="true"
          rowSelection="single"
          :suppressCellFocus="true"
          :domLayout="'normal'"
          :defaultColDef="{
            sortable: true,
            filter: true,
            resizable: true,
          }"
        />
      </div>
    </div>
  </Card>
</template>