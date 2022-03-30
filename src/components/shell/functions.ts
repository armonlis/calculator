export function getResult(result: string, value: string): string {
  if (value === "." && result.includes(".")) { return result }
  return result === "0" && result.length === 1 && value !== "." ? result = value : result = (result += value).slice(0, 10);
};

export function calculateResult(expression: string[]): string {
  const [num1, , num2 = "0"] = expression;
  const action = expression.length === 2 ? "+" : expression[1];
  let result: string = "0";
  switch (action) {
    case "+": result = String(+num1 + +num2).slice(0, 10); break;
    case "-": result = String(+num1 - +num2).slice(0, 10); break;
    case "X": result = String(+num1 * +num2).slice(0, 10); break;
    case "/": result = String(+num1 / +num2).slice(0, 10); break;
  };
  return result;
};