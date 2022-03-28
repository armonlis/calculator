export function getResult(result: string, value: string): string {
  return result === "0" && result.length === 1 ? result = value : result = (result += value).slice(0, 10);
};