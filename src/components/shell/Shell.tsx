import { useState } from "react";
import StyledShell from "./style";
import ScreenBlock from "../screen-block/Screen-block";
import Keyboard from "../keyboard-block/KeyboardBlock";
import { getResult, calculateResult } from "./functions";


const Shell = () => {
  const [result, setResult] = useState("0");
  const [expression, setExpression] = useState([result]);
  const [power, setPower] = useState(false);
  
  function keyHandler(key: string) {
    console.log("HANDLER>>>", expression);
    switch (key) {
      case "ON/OFF": setExpression(["0"]); setResult("0"); power ? setPower(false) : setPower(true); break;
      case "AC": setExpression(["0"]); setResult("0");  break;
      case "1": setResult(getResult(result, "1")); break;
      case "2": setResult(getResult(result, "2")); break;
      case "3": setResult(getResult(result, "3")); break;
      case "4": setResult(getResult(result, "4")); break;
      case "5": setResult(getResult(result, "5")); break;
      case "6": setResult(getResult(result, "6")); break;
      case "7": setResult(getResult(result, "7")); break;
      case "8": setResult(getResult(result, "8")); break;
      case "9": setResult(getResult(result, "9")); break;
      case "0": setResult(getResult(result, "0")); break;
      case ".": setResult(getResult(result, ".")); break;
      case "+": if (expression.length === 1) { setExpression([result, "+"]) } else { setExpression([calculateResult([...expression, result]), "+"]) }; 
        setResult("0"); break;
      case "-": if (expression.length === 1) { setExpression([result, "-"]) } else { setExpression([calculateResult([...expression, result]), "-"]) }; 
      setResult("0"); break;
      case "X": if (expression.length === 1) { setExpression([result, "X"]) } else { setExpression([calculateResult([...expression, result]), "X"]) }; 
      setResult("0"); break;
      case "/": if (expression.length === 1) { setExpression([result, "/"]) } else { setExpression([calculateResult([...expression, result]), "/"]) }; 
      setResult("0"); break;
      case "=": setExpression([calculateResult([...expression, result])]); setResult(calculateResult([...expression, result])); break; 
    };
  };
  
  return (
    <StyledShell>
      <ScreenBlock result={ power ? result : " "}/>
      <Keyboard handler={keyHandler}/>
    </StyledShell>
  );
};

export default Shell;