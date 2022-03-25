import styled from 'styled-components';
import * as colors from '../../../constants/colors';
import * as fonts from "../../../constants/fonts"

const StyledScreen = styled.div`
  ${fonts.PressStart2P}
  width: 96%;
  height: 8vh;
  background-color: ${colors.black};
  margin: 0 auto;
  margin-top: 15%;
    #screen {
      font-family: PressStart2P;
      text-align: right;
      color: ${colors.green};
      font-size: 4vh;
      line-height: 8vh;
    }
`;

export default StyledScreen;