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
        <Key keyValue="ON/OFF" small onClick={() => power ? setPower(false) : setPower(true)}/>
      </Keyboard>  
    </StyledShell>
  );
};

export default Shell;