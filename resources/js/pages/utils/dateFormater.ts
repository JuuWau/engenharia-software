export function formatDate(
  date?: string | null,
  locale = "pt-BR"
): string {
  if (!date) {
    return "-";
  }

  const parsedDate = new Date(
    date.replace(" ", "T")
  );

  if (isNaN(parsedDate.getTime())) {
    return "-";
  }

  return parsedDate.toLocaleDateString(locale);
}