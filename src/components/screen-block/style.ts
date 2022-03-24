import styled from 'styled-components';
import * as colors from '../../constants/colors';

const StyledScreenBlock = styled.div`
  width: 90%;
  height: 25%;
  border: 2px solid ${colors.black};
  border-radius: 1vh;
  margin-top: 1vh;
  position: relative;
    .screen-block-name {
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
    }
`;

export default StyledScreenBlock;