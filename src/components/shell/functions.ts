export function getResult(result: string, value: string): string {
  return result === "0" && result.length === 1 ? result = value : result = (result += value).slice(0, 10);
};

export function calculateResult(expression: string[]): string {
  const [num1, , num2 = "0"] = expression;
  const action = expression.length === 2 ? "+" : expression[1];
  console.log('>>>>', num1, '>>>>', action, '>>>>', num2)
  let result: string = "0";
  switch (action) {
    case "+": result = String(+num1 + +num2); break;
    case "-": result = String(+num1 - +num2); break;
  };
  return result;
};