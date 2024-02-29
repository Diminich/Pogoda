import { Input } from "@mui/material";
import styled from "styled-components";

export const ModalInput = styled(Input)`
  &.MuiInput-root {
    height: 10%;
    width: 60%;
    background: white;
    border: 1px solid gray;
    border-radius: 20px;
    font-weight: bold;

    & .MuiInputBase-root {
      height: 100%;
      padding-left: 5px;

      & .MuiOutlinedInput-notchedOutline {
        border-style: none;
      }
    }

    & .Mui-error {
      border: 1px solid #d32f2f;
      border-radius: 20px;
    }

    & .MuiFormHelperText-root {
      border: none;
      position: absolute;
      top: 45px;
      left: 5px;
      font-size: medium;
    }
  }
`;
