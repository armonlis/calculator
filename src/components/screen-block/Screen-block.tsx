import StyledScreenBlock from "./style";
import Screen from "./screen/Screen";

const ScreenBlock = (props: { result: string }) => {
  const { result } = props;
  return (
    <StyledScreenBlock>
      <p className="screen-block-name">MegaCalcCorp</p>
      <Screen result={result}/>
    </StyledScreenBlock>
  )
};

export default ScreenBlock;