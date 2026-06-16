<script setup lang="ts">
defineProps<{
  weekDays: string[]
  calendarDays: any[]
  selectedDate: string | null
  diaryStore: Record<string, any>
}>()

defineEmits<{
  select: [date: string, isCurrentMonth: boolean]
}>()

function moodColor(mood: string | null) {
  return {
    happy: 'bg-green-500',
    sad: 'bg-blue-500',
    angry: 'bg-red-500',
    fear: 'bg-purple-500',
    anxious: 'bg-amber-500',
    neutral: 'bg-zinc-500',
  }[mood ?? '']
}
</script>

<template>
  <div class="bg-white border border-zinc-200 rounded-xl p-4 shadow-sm">
    <h2 class="text-sm text-zinc-500 mb-3">
      Dias
    </h2>

    <div class="grid grid-cols-7 gap-2 text-center text-xs mb-2">
      <div
        v-for="day in weekDays"
        :key="day"
      >
        {{ day }}
      </div>
    </div>

    <div class="grid grid-cols-7 gap-2">
      <button
        v-for="day in calendarDays"
        :key="day.date"
        @click="$emit('select', day.date, day.isCurrentMonth)"
        :class="[
          'h-10 w-10 rounded-lg transition relative flex items-center justify-center cursor-pointer',
          day.date === selectedDate
            ? 'bg-indigo-600 text-white font-semibold'
            : 'hover:bg-zinc-100',
          !day.isCurrentMonth && 'text-zinc-400'
        ]"
      >
        {{ day.day }}

        <span
          v-if="diaryStore[day.date]"
          :class="[
            'absolute bottom-1 w-1.5 h-1.5 rounded-full',
            moodColor(diaryStore[day.date]?.mood)
          ]"
        />
      </button>
    </div>
  </div>
</template>