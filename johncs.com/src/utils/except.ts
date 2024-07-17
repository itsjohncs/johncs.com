export default function except<T extends object, K extends keyof T>(
  obj: T,
  keys: K[],
): Omit<T, K> {
  const result = { ...obj };
  keys.forEach(function (key) {
    delete result[key];
  });
  return result;
}
