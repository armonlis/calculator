import { useState } from "react";
import StyledShell from "./style";
import ScreenBlock from "../screen-block/Screen-block";
import Keyboard from "../keyboard-block/KeyboardBlock";

const Shell = () => {
  
  const [result, setResult] = useState("0");
  const [power, setPower] = useState(false);
  
  function keyHandler(key: string) {
    switch (key) {
      case "ON/OFF": setResult("0"); power ? setPower(false) : setPower(true); 
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