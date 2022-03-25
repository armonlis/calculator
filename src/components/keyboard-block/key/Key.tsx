import StyledKey from "./style";

const Key = (props: {keyValue: string, small?: boolean, onClick?: () => void }) => {
  const {keyValue, small = false, onClick} = props;
  return (
    <StyledKey small={small} onClick={onClick} >
      <p>{keyValue}</p>
    </StyledKey>
  );
}; 

export default Key;