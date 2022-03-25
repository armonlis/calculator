import { ReactChild, ReactElement } from "react";
import StyledKeybord from "./style";

const Keyboard = (props: {children: ReactElement[]}) => {
  return (
    <StyledKeybord>{props.children}</StyledKeybord>   
  );
};

export default Keyboard;