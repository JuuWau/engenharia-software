<script setup lang="ts">
import { computed } from "vue";
import Input from "@/components/ui/input/Input.vue";
import Label from "@/components/ui/label/Label.vue";
import Select from "@/components/ui/select/Select.vue";
import SelectContent from "@/components/ui/select/SelectContent.vue";
import SelectItem from "@/components/ui/select/SelectItem.vue";
import SelectTrigger from "@/components/ui/select/SelectTrigger.vue";
import SelectValue from "@/components/ui/select/SelectValue.vue";
import Textarea from "@/components/ui/textarea/Textarea.vue";
import type {
  OccurrenceFormData,
} from "../../schemas/occurrence.schema";

const form = defineModel<OccurrenceFormData>({
  required: true,
});

const props = defineProps<{
  errors?: Record<string, string>
}>();

const imagePreviews = computed(() => {
  if (!form.value.images?.length) return [];

  return form.value.images.map((file) => ({
    file,
    url: URL.createObjectURL(file),
  }));
});

function handleImages(event: Event) {
  const target = event.target as HTMLInputElement;

  if (!target.files) return;

  const newFiles = Array.from(target.files);

  form.value.images = [
    ...form.value.images,
    ...newFiles,
  ].slice(0, 10);
}

function removeImage(index: number) {
  if (!form.value.images) return;

  form.value.images.splice(index, 1);
}
</script>

<template>
  <div class="space-y-4">
    <div class="space-y-2">
      <Label>Título</Label>

      <Input v-model="form.title" />

       <p
          v-if="props.errors?.title"
          class="text-sm text-red-500"
        >
          {{ props.errors.title }}
        </p>
    </div>

    <div class="space-y-2">
      <Label>Descrição</Label>

      <Textarea v-model="form.description" />

      <p
        v-if="props.errors?.description"
        class="text-sm text-red-500"
      >
        {{ props.errors.description }}
      </p>
    </div>

    <div class="grid grid-cols-2 gap-4">
      <div class="space-y-2">
        <Label>Data</Label>

        <Input
          v-model="form.occurred_at"
          type="date"
        />

        <p
          v-if="props.errors?.occurred_at"
          class="text-sm text-red-500"
        >
          {{ props.errors.occurred_at }}
        </p>
      </div>

      <div class="space-y-2">
        <Label>Severidade</Label>

        <Select v-model="form.severity">
          <SelectTrigger class="w-full">
            <SelectValue />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="low">
              Baixa
            </SelectItem>

            <SelectItem value="medium">
              Média
            </SelectItem>

            <SelectItem value="high">
              Alta
            </SelectItem>
          </SelectContent>
        </Select>

        <p
          v-if="props.errors?.severity"
          class="text-sm text-red-500"
        >
          {{ props.errors.severity }}
        </p>
      </div>
    </div>

    <div class="space-y-2">
      <Label>Imagens</Label>

      <Input
        type="file"
        multiple
        accept="image/*"
        @change="handleImages"
      />

      <p
        v-if="props.errors?.images"
        class="text-sm text-red-500"
      >
        {{ props.errors.images }}
      </p>

      <p class="text-muted-foreground text-sm">
        {{ form.images?.length || 0 }}/10 imagens
      </p>

      <div
        v-if="imagePreviews.length"
        class="grid max-h-[320px] grid-cols-2 gap-4 overflow-y-auto pt-2 md:grid-cols-4"
      >
        <div
          v-for="(image, index) in imagePreviews"
          :key="image.url"
          class="relative overflow-visible rounded-md"
        >
          <button
            type="button"
            class="absolute -top-2 -right-2 z-10 flex h-6 w-6 items-center justify-center rounded-full  bg-red-500 text-sm text-white shadow-md transition hover:bg-red-600 hover:scale-105"
            @click="removeImage(index)"
          >
            ×
          </button>

          <div class="overflow-hidden rounded-md border">
            <img
              :src="image.url"
              :alt="image.file.name"
              class="h-32 w-full object-cover"
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>