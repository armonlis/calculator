import styled from "styled-components";
import * as colors from "../../../constants/colors";

type Props = {
  small: boolean;
  double: boolean;
};

const StyledKey = styled.div`
  width: ${ (props: Props) => props.double ? "46%" : "22%" };
  height: 8vh;
  text-align: center;
  background-color: ${colors.d_gray};
  border-radius: 1vh;
    p {
      font-size: ${ (props: Props) => props.small ? "2vh" : "6vh" };
      line-height: 8vh;
      font-weight: bold;
      margin: 0;
      padding: 0;
    };
  &:hover {
    cursor: pointer;
  };
`;

export default StyledKey;