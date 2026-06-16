<script setup lang="ts">
interface Props {
  currentMonthLabel: string
}

defineProps<Props>()

defineEmits<{
  previous: []
  next: []
  today: []
}>()
</script>

<template>
  <div class="w-full max-w-5xl flex justify-between items-center mb-6">
    <div class="min-w-0">
      <h1 class="text-2xl font-semibold sm:text-3xl">
        Diário
      </h1>

      <p class="mt-1 text-sm text-muted-foreground sm:text-base">
        Registre e acompanhe anotações diárias com segurança.
      </p>
    </div>

    <div class="flex items-center gap-3">
      <button
        class="p-2 rounded-lg hover:bg-zinc-100 transition text-zinc-600"
        title="Mês anterior"
        @click="$emit('previous')"
      >
        <svg
          class="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <span class="text-sm font-medium text-zinc-700 min-w-[140px] text-center capitalize">
        {{ currentMonthLabel }}
      </span>

      <button
        class="p-2 rounded-lg hover:bg-zinc-100 transition text-zinc-600 cursor-pointer"
        title="Próximo mês"
        @click="$emit('next')"
      >
        <svg
          class="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      <button
        class="px-3 py-1 text-sm rounded-lg hover:bg-zinc-100 transition text-zinc-600 border border-zinc-200 cursor-pointer"
        @click="$emit('today')"
      >
        Hoje
      </button>
    </div>
  </div>
</template>