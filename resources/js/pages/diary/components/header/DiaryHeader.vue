<script setup lang="ts">
import { ChevronLeft, ChevronRight } from 'lucide-vue-next';

defineProps<{
  currentMonthLabel: string
}>()

defineEmits<{
  previous: []
  next: []
  today: []
}>()
</script>

<template>
  <div class="w-full max-w-5xl flex justify-between items-center mb-6 pt-10">
    <div>
      <h1 class="text-2xl font-semibold sm:text-3xl">
        Diário
      </h1>

      <p class="mt-1 text-sm text-muted-foreground sm:text-base">
        Registre e acompanhe anotações diárias com segurança.
      </p>
    </div>

    <div class="flex items-center gap-3">
      <button @click="$emit('previous')" class="hover:">
        <ChevronLeft />
      </button>

      <span>
        {{ currentMonthLabel }}
      </span>

      
      <button @click="$emit('next')">
        <ChevronRight />
      </button>

      <button @click="$emit('today')">
        Hoje
      </button>
    </div>
  </div>
</template>