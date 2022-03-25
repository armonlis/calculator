import { useState } from "react";
import StyledShell from "./style";
import ScreenBlock from "../screen-block/Screen-block";

const Shell = () => {
  const [result, setResult] = useState("...");
  const [power, setPower] = useState(false)
  return (
    <StyledShell>
      <ScreenBlock result={ power ? result : "POWER OFF"}/>
    </StyledShell>
  );
};

export default Shell;