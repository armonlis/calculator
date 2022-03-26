import StyledKeybord from "./style";
import Key from "./key/Key";

type Props = {
  handler: (key: string) => void;
}

const Keyboard = (props: Props) => {
  const {handler} = props;
  return (
    <StyledKeybord>
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
      <Key keyValue="ON/OFF" small onClick={() => handler("ON/OFF")}/>
      <Key keyValue="AC" />
      <Key keyValue="=" double />
    </StyledKeybord>   
  );
};

export default Keyboard;