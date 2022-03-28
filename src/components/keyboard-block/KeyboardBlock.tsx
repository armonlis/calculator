import StyledKeybord from "./style";
import Key from "./key/Key";
import { SyntheticEvent } from "react";

type Props = {
  handler: (key: string) => void;
};

const Keyboard = (props: Props) => {
  const {handler} = props;
  return (
    <StyledKeybord>
      <Key keyValue="1" onClick={() => handler("1")} />
      <Key keyValue="2" onClick={() => handler("2")} />
      <Key keyValue="3" onClick={() => handler("3")} />
      <Key keyValue="+" onClick={() => handler("+")} />
      <Key keyValue="4" onClick={() => handler("4")} />
      <Key keyValue="5" onClick={() => handler("5")} />
      <Key keyValue="6" onClick={() => handler("6")} />
      <Key keyValue="-" onClick={() => handler("-")} />
      <Key keyValue="7" onClick={() => handler("7")} />
      <Key keyValue="8" onClick={() => handler("8")} />
      <Key keyValue="9" onClick={() => handler("9")} />
      <Key keyValue="X" onClick={() => handler("X")} />
      <Key keyValue="%" onClick={() => handler("%")} />
      <Key keyValue="0" onClick={() => handler("0")} />
      <Key keyValue="." onClick={() => handler(".")} />
      <Key keyValue="/" onClick={() => handler("/")} />
      <Key keyValue="ON/OFF" small onClick={() => handler("ON/OFF")} />
      <Key keyValue="AC" onClick={() => handler("AC")} />
      <Key keyValue="M" onClick={() => handler("M")} />
      <Key keyValue="=" onClick={() => handler("=")} />
    </StyledKeybord>   
  );
};

export default Keyboard;