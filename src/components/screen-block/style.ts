import styled from 'styled-components';
import * as colors from '../../constants/colors';

const StyledScreenBlock = styled.div`
  width: 90%;
  height: 20vh;
  border: 2px solid ${colors.black};
  border-radius: 1vh;
  margin-top: 1vh;
  position: relative;
    #screen-block-name {
      position: absolute;
      top: 0;
      right: 2vh;
      display: block;
      background-color: ${colors.black};
      color: ${colors.white};
      font-weight: bold;
      padding: 5px;
      font-size: 1.5vh;
      line-height: 1.5vh;
    };
    #screen-block-digits {
      position: absolute;
      display: block;
      bottom: 1vh;
      left: 2vh;
      font-weight: bold;
      margin: 0;
      padding: 5px;
      font-size: 2vh;
      line-height: 2vh;
    };
`;

export default StyledScreenBlock;