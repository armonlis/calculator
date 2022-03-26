import { useState } from "react";
import StyledShell from "./style";
import ScreenBlock from "../screen-block/Screen-block";
import Keyboard from "../keyboard-block/KeyboardBlock";
import Key from "../keyboard-block/key/Key";

const Shell = () => {
  const [result, setResult] = useState("0");
  const [power, setPower] = useState(false);
  return (
    <StyledShell>
      <ScreenBlock result={ power ? result : " "}/>
      <Keyboard>
        <Key keyValue="1" />
        <Key keyValue="2" />
        <Key keyValue="3" />
        <Key keyValue="+" />
        <Key keyValue="4" />
        <Key keyValue="5" />
        <Key keyValue="6" />
        <Key keyValue="-" />
        <Key keyValue="7" />
        <Key keyValue="8" />
        <Key keyValue="9" />
        <Key keyValue="X" />
        <Key keyValue="%" />
        <Key keyValue="0" />
        <Key keyValue="M" />
        <Key keyValue="/" />
        <Key keyValue="ON/OFF" small onClick={() => power ? setPower(false) : setPower(true)}/>
        <Key keyValue="AC" />
        <Key keyValue="=" double />
      </Keyboard>  
    </StyledShell>
  );
};

export default Shell;