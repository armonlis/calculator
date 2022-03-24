import styled from 'styled-components';
import * as colors from '../../constants/colors'

const StyledShell = styled.div`
  height: 80vh;
  width: 50vh;
  margin: 10vh auto;
  border: 5px solid ${colors.d_gray};
  border-radius: 2vh;
  background-color: ${colors.silver};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: top;
`;

export default StyledShell;