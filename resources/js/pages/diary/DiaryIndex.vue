<script setup lang="ts">
import DiaryCalendar from './components/calendar/DiaryCalendar.vue'
import DiaryEditor from './components/editor/DiaryEditor.vue'
import DiaryHeader from './components/header/DiaryHeader.vue'

import { useDiaryCalendar } from './composables/useDiaryCalendar'
import { useDiaryEntries } from './composables/useDiaryEntries'
import { useDiaryNavigation } from './composables/useDiaryNavigation'

const props = defineProps<{
  entries: any[]
}>()

const navigation = useDiaryNavigation()
const calendar = useDiaryCalendar(navigation.currentDisplayDate)
console.log(props.entries)
const diary = useDiaryEntries(props.entries.data)
function handleSelectDay(
  date: string,
  isCurrentMonth: boolean,
) {
  if (!isCurrentMonth) {
    const [year, month] = date.split('-').map(Number)

    navigation.currentDisplayDate.value = new Date(
      year,
      month - 1,
      1,
    )
  }

  diary.selectDay(date)
}
</script>

<template>
  <div class="min-h-screen bg-white text-zinc-900 flex flex-col items-center p-6">
    <DiaryHeader
      :current-month-label="navigation.currentMonthLabel.value"
      @previous="navigation.previousMonth"
      @next="navigation.nextMonth"
      @today="navigation.goToToday"
    />

    <div class="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-6">
      <DiaryCalendar
        :week-days="calendar.weekDays"
        :calendar-days="calendar.calendarDays.value"
        :selected-date="diary.selectedDate.value"
        :diary-store="diary.diaryStore.value"
        @select="handleSelectDay"
      />

      <DiaryEditor
        :selected-date="diary.selectedDate.value"
        :entry="diary.entry.value"
        @clear="diary.clearEntry"
        @save="diary.saveEntry"
      />
    </div>
  </div>
</template>