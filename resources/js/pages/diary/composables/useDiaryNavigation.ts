import { computed, ref } from 'vue'

export function useDiaryNavigation() {
  const currentDisplayDate = ref(new Date())

  const currentMonthLabel = computed(() =>
    currentDisplayDate.value.toLocaleString('pt-BR', {
      month: 'long',
      year: 'numeric',
    }),
  )

  function previousMonth() {
    const date = new Date(currentDisplayDate.value)

    date.setMonth(date.getMonth() - 1)

    currentDisplayDate.value = date
  }

  function nextMonth() {
    const date = new Date(currentDisplayDate.value)

    date.setMonth(date.getMonth() + 1)

    currentDisplayDate.value = date
  }

  function goToToday() {
    currentDisplayDate.value = new Date()
  }

  return {
    currentDisplayDate,
    currentMonthLabel,
    previousMonth,
    nextMonth,
    goToToday,
  }
}