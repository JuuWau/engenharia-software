<script setup lang="ts">
import axios from "axios";
import { Trash2, X, } from "lucide-vue-next";
import { inject, ref, } from "vue";
import type { Ref } from "vue";
import { toast } from "vue3-toastify";
import AlertDialog from "@/components/ui/alert-dialog/AlertDialog.vue";
import AlertDialogAction from "@/components/ui/alert-dialog/AlertDialogAction.vue";
import AlertDialogCancel from "@/components/ui/alert-dialog/AlertDialogCancel.vue";
import AlertDialogContent from "@/components/ui/alert-dialog/AlertDialogContent.vue";
import AlertDialogDescription from "@/components/ui/alert-dialog/AlertDialogDescription.vue";
import AlertDialogFooter from "@/components/ui/alert-dialog/AlertDialogFooter.vue";
import AlertDialogHeader from "@/components/ui/alert-dialog/AlertDialogHeader.vue";
import AlertDialogTitle from "@/components/ui/alert-dialog/AlertDialogTitle.vue";
import { LoadingKey } from "@/components/ui/loading/keys/loadingKey";
import type { Occurrence, } from "../../types/occurrence.types";

const open = defineModel<boolean>({
  required: true,
});

const loading = inject(
  LoadingKey,
  ref(false)
);

const selectedOccurrence =
  inject<Ref<Occurrence | null>>(
    "selectedOccurrence"
  );

const occurrences =
  inject<Ref<Occurrence[]>>(
    "occurrences"
  );

async function handleDelete() {

  if (
    !selectedOccurrence?.value ||
    !occurrences?.value ||
    !loading
  ) {
    return;
  }

  try {

    loading.value = true;

    await axios.delete(
      `/occurrences/${selectedOccurrence.value.id}`
    );

    occurrences.value =
      occurrences.value.filter(
        (occurrence) =>
          occurrence.id !==
          selectedOccurrence.value?.id
      );

    toast.success(
      "Ocorrência excluída com sucesso."
    );

    open.value = false;

    selectedOccurrence.value =
      null;

  } catch (error: any) {

    console.error(error);

    toast.error(
      error.response?.data?.message ||
      "Erro ao excluir ocorrência."
    );

  } finally {

    loading.value = false;
  }
}
</script>

<template>
  <AlertDialog
    v-model:open="open"
  >
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>
          Excluir ocorrência
        </AlertDialogTitle>

        <AlertDialogDescription>
          Essa ação não poderá ser desfeita.
        </AlertDialogDescription>
      </AlertDialogHeader>

      <AlertDialogFooter>
        <AlertDialogCancel
          :disabled="loading"
        >
          <X class="h-4 w-4" />

          Cancelar
        </AlertDialogCancel>

        <AlertDialogAction
          class=" bg-red-600 text-whitehover:bg-red-700focus:ring-red-500"
          :disabled="loading"
          @click.prevent="
            handleDelete
          "
        >
          <Trash2 class="h-4 w-4" />
          {{
            loading
              ? "Excluindo..."
              : "Excluir"
          }}
        </AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
</template>