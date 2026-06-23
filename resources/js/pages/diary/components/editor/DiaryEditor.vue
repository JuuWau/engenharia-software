<script setup lang="ts">
import { FilterX, Save } from 'lucide-vue-next';
import {
  Smile,
  Frown,
  Angry,
  ShieldAlert,
  Brain,
  Meh,
} from 'lucide-vue-next'
import { computed } from 'vue';
import Button from '@/components/ui/button/Button.vue'
import Input from '@/components/ui/input/Input.vue';
import Textarea from '@/components/ui/textarea/Textarea.vue';

const props = defineProps<{
  selectedDate: string | null
  entry: {
    title: string
    content: string
    mood: string | null
  }
}>()

const formattedDate = computed(() => {
  if (!props.selectedDate) return 'Selecione um dia'

  const [year, month, day] = props.selectedDate.split('-')

  return `${day}/${month}/${year}`
})

const moods = [
  {
    value: 'happy',
    label: 'Feliz',
    icon: Smile,
    activeClass: 'border-green-500 bg-green-50 text-green-600',
  },
  {
    value: 'sad',
    label: 'Triste',
    icon: Frown,
    activeClass: 'border-blue-500 bg-blue-50 text-blue-600',
  },
  {
    value: 'angry',
    label: 'Brava',
    icon: Angry,
    activeClass: 'border-red-500 bg-red-50 text-red-600',
  },
  {
    value: 'fear',
    label: 'Medo',
    icon: ShieldAlert,
    activeClass: 'border-purple-500 bg-purple-50 text-purple-600',
  },
  {
    value: 'anxious',
    label: 'Ansiosa',
    icon: Brain,
    activeClass: 'border-amber-500 bg-amber-50 text-amber-600',
  },
  {
    value: 'neutral',
    label: 'Neutro',
    icon: Meh,
    activeClass: 'border-zinc-500 bg-zinc-100 text-zinc-600',
  },
]

defineEmits<{
  save: []
}>()

function clearFilters() {
  search.value = "";
  severity.value = "";
  date.value = "";
}
</script>

<template>
  <div
    class="md:col-span-2 bg-white border border-zinc-200 rounded-xl p-4 flex flex-col shadow-sm"
  >
    <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 mb-3">
      <h2 class="text-sm text-zinc-500">
        {{ formattedDate }}
      </h2>

      <div class="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
        <Button
          variant="outline"
          class="w-full sm:w-auto"
          @click="$emit('clear')"
        >
          <FilterX class="mr-2 h-4 w-4" />
          Limpar
        </Button>

        <Button
          v-if="selectedDate"
          variant="indigo"
          class="w-full sm:w-auto"
          @click="$emit('save')"
        >
          <Save class="mr-2 h-4 w-4" />
          Salvar
        </Button>
      </div>
    </div>

    <div class="mb-4">
      <p class="text-sm text-zinc-500 mb-2">
        Como você está se sentindo?
      </p>

      <div class="grid grid-cols-3 gap-2">
        <button
          v-for="mood in moods"
          :key="mood.value"
          type="button"
          @click="entry.mood = mood.value"
          :class="[
            'p-3 rounded-xl border flex flex-col items-center gap-2 transition-all cursor-pointer',
            entry.mood === mood.value
              ? mood.activeClass
              : 'border-zinc-200 text-zinc-500 hover:bg-zinc-50'
          ]"
        >
          <component
            :is="mood.icon"
            class="w-5 h-5"
          />

          <span class="text-xs">
            {{ mood.label }}
          </span>
        </button>
      </div>
    </div>

    <Input
      v-model="entry.title"
      placeholder="Título do dia..."
      class="bg-zinc-50 border border-zinc-200 rounded-lg p-2 mb-3"
    />

    <Textarea
      v-model="entry.content"
      placeholder="Escreva seu dia aqui..."
      class="flex-1 min-h-[300px]"
    />

    <div class="mt-3 text-xs text-zinc-400">
      {{ entry.content.length }} caracteres
    </div>
  </div>
</template>