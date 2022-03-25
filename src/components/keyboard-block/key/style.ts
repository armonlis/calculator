import styled from "styled-components";
import * as colors from "../../../constants/colors";

const StyledKey = styled.div`
  width: 30%;
  height: 10vh;
  text-align: center;
  background-color: ${colors.d_gray};
  font-size: ${ (props: {small: boolean}) => props.small ? "3vh" : "6vh" };
  line-height: 10vh;
  font-weight: bold;
  border-radius: 1vh;
  &:hover {
    cursor: pointer;
  };
`;

export default StyledKey;