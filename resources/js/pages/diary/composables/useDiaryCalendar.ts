import { computed, Ref } from 'vue'

export function useDiaryCalendar(currentDisplayDate: Ref<Date>) {
  const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']

  const calendarDays = computed(() => {
    const year = currentDisplayDate.value.getFullYear()
    const month = currentDisplayDate.value.getMonth()

    const firstDayOfMonth = new Date(year, month, 1).getDay()
    const lastDateOfMonth = new Date(year, month + 1, 0).getDate()
    const lastDateOfPrevMonth = new Date(year, month, 0).getDate()

    const days = []

    for (let i = firstDayOfMonth - 1; i >= 0; i--) {
      const prevMonthDay = lastDateOfPrevMonth - i
      const date = new Date(year, month - 1, prevMonthDay)

      days.push({
        day: prevMonthDay,
        date: formatDate(date),
        isCurrentMonth: false,
      })
    }

    for (let i = 1; i <= lastDateOfMonth; i++) {
      const date = new Date(year, month, i)

      days.push({
        day: i,
        date: formatDate(date),
        isCurrentMonth: true,
      })
    }

    const remainingDays = 42 - days.length

    for (let i = 1; i <= remainingDays; i++) {
      const date = new Date(year, month + 1, i)

      days.push({
        day: i,
        date: formatDate(date),
        isCurrentMonth: false,
      })
    }

    return days
  })

  function formatDate(date: Date) {
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0')

    return `${year}-${month}-${day}`
  }

  return {
    weekDays,
    calendarDays,
    formatDate,
  }
}