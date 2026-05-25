<script setup lang="ts">
import axios from "axios";
import { Save, X }
from "lucide-vue-next";
import {
  inject,
  reactive,
  ref,
  watch,
} from "vue";
import type { Ref } from "vue";
import Button from "@/components/ui/button/Button.vue";
import Dialog from "@/components/ui/dialog/Dialog.vue";
import DialogContent from "@/components/ui/dialog/DialogContent.vue";
import DialogDescription from "@/components/ui/dialog/DialogDescription.vue";
import DialogFooter from "@/components/ui/dialog/DialogFooter.vue";
import DialogHeader from "@/components/ui/dialog/DialogHeader.vue";
import DialogTitle from "@/components/ui/dialog/DialogTitle.vue";
import { LoadingKey } from "@/components/ui/loading/keys/loadingKey";
import { occurrenceSchema } from "../../schemas/occurrence.schema";
import type { Occurrence } from "../../types/occurrence.types";
import OccurrenceForm from "../form/OccurrenceForm.vue";

const loading = inject(
  LoadingKey,
  ref(false)
);

const errors = reactive<
  Record<string, string>
>({});

const open = defineModel<boolean>({
  required: true,
});

const selectedOccurrence =
  inject<Ref<Occurrence | null>>(
    "selectedOccurrence"
  );

const occurrences =
  inject<Ref<Occurrence[]>>(
    "occurrences"
  );

const existingImages = ref<
  Occurrence["images"]
>([]);

const form = reactive({
  title: "",
  description: "",
  occurred_at: "",
  severity: "medium" as const,
  images: [] as File[],
});

watch(
  selectedOccurrence!,
  (occurrence) => {
    if (!occurrence) {
      return;
    }

    Object.assign(form, {
      title: occurrence.title,
      description:
        occurrence.description,

      occurred_at:
        occurrence.occurred_at
          ?.split(" ")[0],

      severity:
        occurrence.severity,

      images: [],
    });

     existingImages.value =
      occurrence.images;
      },
  { immediate: true }
);

async function handleSubmit() {
  if (
    !loading ||
    !selectedOccurrence?.value
  ) {
    return;
  }

  Object.keys(errors).forEach(
    (key) => {
      delete errors[key];
    }
  );

  const result =
    occurrenceSchema.safeParse(form);

  if (!result.success) {
    result.error.issues.forEach(
      (issue) => {
        const field =
          issue.path[0] as string;

        errors[field] =
          issue.message;
      }
    );

    return;
  }

  try {
    loading.value = true;

    const data = new FormData();

    data.append("title", form.title);

    data.append(
      "description",
      form.description
    );

    data.append(
      "occurred_at",
      form.occurred_at
    );

    data.append(
      "severity",
      form.severity
    );

    existingImages.value.forEach(
      (image) => {
        data.append(
          "existing_images[]",
          image.id.toString()
        );
      }
    );

    form.images.forEach((image) => {
      data.append(
        "images[]",
        image
      );
    });

    const response = await axios.put(
      `/occurrences/${selectedOccurrence.value.id}`,
      data,
      {
        headers: {
          "Content-Type":
            "multipart/form-data",
        },
      }
    );

    const updatedOccurrence =
      response.data.data;

    if (occurrences?.value) {

      const index =
        occurrences.value.findIndex(
          (item) =>
            item.id ===
            updatedOccurrence.id
        );

      if (index !== -1) {

        occurrences.value[index] =
          updatedOccurrence;

        occurrences.value = [
          ...occurrences.value
        ];
      }
    }

    open.value = false;
  }
  catch (error) {
    console.error(error);
  }
  finally {
    loading.value = false;
  }
}
</script>

<template>
  <Dialog v-model:open="open">
    <DialogContent class="sm:max-w-2xl">
      <DialogHeader>
        <DialogTitle>
          Editar ocorrência
        </DialogTitle>

        <DialogDescription>
          Altere os campos abaixo para atualizar a ocorrência.
        </DialogDescription>
      </DialogHeader>
      <hr>

      <OccurrenceForm
        v-model="form"
        :existing-images="existingImages"
        @remove-existing-image="
          existingImages.splice($event, 1)
        "
      />

      <DialogFooter>
        <Button
          variant="outline"
          :disabled="loading"
          @click="open = false"
        >
          <X />
          Cancelar
        </Button>

        <Button
          variant="indigo"
          :disabled="loading"
          @click="handleSubmit"
        >
          <Save />

          {{ loading ? "Salvando..." : "Salvar" }}
        </Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>