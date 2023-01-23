import { Select } from "@mui/material";
import styled from "styled-components";

export const LanguagesSelect = styled(Select)`
    &.MuiInputBase-root {
        height: 70%;
        border: 1px solid white;
        border-radius: 10px;
        color: white;

        &:hover {
            box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 40%), 0px 2px 2px 0px rgb(0 0 0 / 40%), 0px 1px 5px 0px rgb(0 0 0 / 40%);
        }

        & .MuiOutlinedInput-notchedOutline {
             border-style: none;
        }

        &.MuiOutlinedInput-root {
            & .MuiOutlinedInput-input {
                padding-right: 15px;
            }
        }
    }
`