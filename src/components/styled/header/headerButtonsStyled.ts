import { Button } from "@mui/material";
import styled from "styled-components";

export const HeaderButtonStyled = styled(Button)`
  &.MuiButton-root {
    height: 70%;
    width: 40%;
    background-color: rgba(0, 0, 0, 0);
    border: 1px solid white;
    border-radius: 10px;
    color: white;

    &:hover {
      background-color: rgba(0, 0, 0, 0);
    }
  }
`;
