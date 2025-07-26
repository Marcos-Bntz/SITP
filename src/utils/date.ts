export function formatDate(date: string | Date): string {
  return new Date(date).toLocaleDateString('es-ES', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export function isDatePast(date: string | Date): boolean {
  return new Date(date) < new Date();
}