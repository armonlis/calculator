export function getResult(result: string, value: string): string {
  if (value === "." && result.includes(".")) { return result }
  return result === "0" && result.length === 1 && value !== "." ? result = value : result = (result += value).slice(0, 10);
};

export function calculateResult(expression: string[]): string {
  const [num1, , num2 = "0", isPercent = ""] = expression;
  const action = expression.length === 2 ? "+" : expression[1];
  let result: string = "0";
  switch (action) {
    case "+": result = !!isPercent ? String(+num1 + +num1 / 100 * +num2) : String(+num1 + +num2); break;
    case "-": result = !!isPercent ? String(+num1 - +num1 / 100 * +num2) : String(+num1 - +num2); break;
    case "X": result = !!isPercent ? String(+num1 * +num2/100) : String(+num1 * +num2); break;
    case "/": result = +num2 === 0 ? "Err" : !!isPercent ? String(+num1 / (+num2 / 100)) : String(+num1 / +num2); break;
  };
  result = result.length > 10 && result.includes(".") ? result.slice(0, 10) : result;
  result = result[result.length - 1] === "." ? result.slice(0, result.length -1) : result;
  result = +result > 9999999999 || +result < -9999999999 ? ("^" + result).slice(0, 10) : result;
  return result;
};