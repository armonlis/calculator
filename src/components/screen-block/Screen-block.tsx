import StyledScreenBlock from "./style";
import Screen from "./screen/Screen";

const ScreenBlock = (props: { result: string }) => {
  const { result } = props;
  return (
    <StyledScreenBlock>
      <p id="screen-block-name">MegaCalcCorp</p>
      <p id="screen-block-digits">10 digits calculator</p>
      <Screen result={result}/>
    </StyledScreenBlock>
  )
};

export default ScreenBlock;