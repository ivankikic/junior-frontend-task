import styled from "@emotion/styled";
import { VARIABLES } from "../../consts/global";

export const HeaderStyles = styled.div`
  a {
    color: #000;
  }
  a > button {
    background-color: ${VARIABLES.PRIMARY_COLOR};
    border-color: ${VARIABLES.PRIMARY_COLOR};
    &:hover {
      background-color: ${VARIABLES.PRIMARY_COLOR_HOVER};
      border-color: ${VARIABLES.PRIMARY_COLOR_HOVER};
    }
  }
`;

export const ResetButtonStyles = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
