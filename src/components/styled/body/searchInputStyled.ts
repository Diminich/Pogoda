import LoadingButton from "@mui/lab/LoadingButton";
import styled from "styled-components";
import { TextField } from "@mui/material";

export const SearchButton = styled(LoadingButton)`
  &.MuiLoadingButton-root {
    height: 80%;
    width: 15%;
    background-color: rgba(0, 0, 0, 0);
    border: 1px solid white;
    border-radius: 10px;
    color: white;

    &:hover {
      background-color: rgba(0, 0, 0, 0);
    }
  }
`;

export const SearchInput = styled(TextField)`
  &.MuiFormControl-root {
    height: 80%;
    width: 65%;
    background: white;
    border-radius: 20px;

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
