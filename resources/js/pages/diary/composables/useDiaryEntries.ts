import axios from 'axios'
import { reactive, ref } from 'vue'
import { toast } from "vue3-toastify";

import { diaryEntrySchema } from '../schemas/diary.schema'

export function useDiaryEntries(entries: any[]) {
  const selectedDate = ref<string | null>(null)

  const entry = ref({
    title: '',
    content: '',
    mood: null as string | null,
  })

  const errors = reactive<Record<string, string>>({})

  const diaryStore = ref(
    entries.reduce(
      (acc: Record<string, any>, item: any) => {
        acc[item.entry_date] = item

        return acc
      },
      {},
    ),
  )

  function clearEntry() {
    entry.value = {
      title: '',
      content: '',
      mood: null,
    }
  }

  function selectDay(date: string) {
    selectedDate.value = date

    const stored = diaryStore.value[date]

    entry.value = {
      title: stored?.title ?? '',
      content: stored?.content ?? '',
      mood: stored?.mood ?? null,
    }
  }

  async function saveEntry() {
    if (!selectedDate.value) {
      return
    }

    Object.keys(errors).forEach((key) => {
      delete errors[key]
    })

    const payload = {
      title: entry.value.title,
      content: entry.value.content,
      mood: entry.value.mood,
      entry_date: selectedDate.value,
    }

    const result = diaryEntrySchema.safeParse(
      payload,
    )

    if (!result.success) {
      result.error.issues.forEach((issue) => {
        const field = issue.path[0] as string

        errors[field] = issue.message
      })

      toast.error(
        result.error.issues[0].message,
      )

      return
    }

    try {
      const { data } = await axios.post(
        '/diary',
        result.data,
      )

      diaryStore.value[selectedDate.value] =
        data.data

      toast.success(data.message)
    } catch (error) {
      console.error(error)

      toast.error(
        'Não foi possível salvar o registro.',
      )
    }
  }

  return {
    selectedDate,
    entry,
    errors,
    diaryStore,
    selectDay,
    saveEntry,
    clearEntry,
  }
}