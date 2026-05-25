<script setup lang="ts">
import axios from "axios";
import { Save, X } from "lucide-vue-next";
import { inject, reactive, ref } from "vue";
import Button from "@/components/ui/button/Button.vue";
import Dialog from "@/components/ui/dialog/Dialog.vue";
import DialogContent from "@/components/ui/dialog/DialogContent.vue";
import DialogDescription from "@/components/ui/dialog/DialogDescription.vue";
import DialogFooter from "@/components/ui/dialog/DialogFooter.vue";
import DialogHeader from "@/components/ui/dialog/DialogHeader.vue";
import DialogTitle from "@/components/ui/dialog/DialogTitle.vue";
import { LoadingKey } from "@/components/ui/loading/keys/loadingKey";
import {
  occurrenceSchema,
} from "../../schemas/occurrence.schema";
import OccurrenceForm from "../form/OccurrenceForm.vue";

const loading = inject(LoadingKey, ref(false));

const errors = reactive<Record<string, string>>({});

const open = defineModel<boolean>({
  required: true,
});

const form = reactive({
  title: "",
  description: "",
  occurred_at: "",
  severity: "medium",
  images: [] as File[],
});

async function handleSubmit() {
  if (!loading) return;

  Object.keys(errors).forEach((key) => {
    delete errors[key];
  });

  const result = occurrenceSchema.safeParse(form);

  if (!result.success) {
    result.error.issues.forEach((issue) => {
      const field = issue.path[0] as string;

      errors[field] = issue.message;
    });

    return;
  }

  try {
    loading.value = true;

    const data = new FormData();

    data.append("title", form.title);
    data.append("description", form.description);
    data.append("occurred_at", form.occurred_at);
    data.append("severity", form.severity);

    form.images.forEach((image) => {
      data.append("images[]", image);
    });

    await axios.post("/occurrences", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    Object.assign(form, {
      title: "",
      description: "",
      occurred_at: "",
      severity: "medium",
      images: [],
    });

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
          Nova ocorrência
        </DialogTitle>

        <DialogDescription>
          Preencha os campos abaixo para criar uma nova ocorrência.
        </DialogDescription>
      </DialogHeader>

      <hr>

      <OccurrenceForm
        v-model="form"
        :errors="errors"
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