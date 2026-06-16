export const DIARY_MOODS = [
  'happy',
  'sad',
  'angry',
  'fear',
  'anxious',
  'neutral',
] as const

export type DiaryMood = typeof DIARY_MOODS[number]