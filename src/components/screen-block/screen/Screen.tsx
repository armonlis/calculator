import StyledScreen from "./style";

const Screen = (props: {result: string}) => {
  const { result } = props;
  return (
    <StyledScreen>
      <p id="screen">{result}</p>
    </StyledScreen>
  )
};

export default Screen;