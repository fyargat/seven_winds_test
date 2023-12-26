export function deepCopy<T>(entry: T): T {
  return JSON.parse(JSON.stringify(entry));
}
