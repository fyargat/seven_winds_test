export function formatNumberLocaleRU(num: number) {
  return new Intl.NumberFormat('ru-RU', { style: 'decimal' }).format(num);
}
