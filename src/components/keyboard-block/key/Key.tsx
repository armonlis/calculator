import StyledKey from "./style";

type Props = {
  keyValue: string;
  small?: boolean;
  onClick?: () => void;
  double?: boolean;
}

const Key = (props: Props) => {
  const {keyValue, small = false, onClick, double = false} = props;
  return (
    <StyledKey small={small} double={double} onClick={onClick} >
      <p>{keyValue}</p>
    </StyledKey>
  );
}; 

export default Key;