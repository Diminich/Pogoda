import { Select } from "@mui/material";
import styled from "styled-components";
//class="MuiInputBase-input MuiOutlinedInput-input MuiSelect-outlined MuiSelect-select css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input"
export const LanguagesSelect = styled(Select)`
    &.MuiInputBase-root {
        height: 70%;
        border: 1px solid white;
        border-radius: 10px;
        color: white;

        & .MuiOutlinedInput-notchedOutline {
             border-style: none;
        }

        &.MuiOutlinedInput-root {
            & .MuiOutlinedInput-input {
                padding-right: 15px;
            }
        }
    }
}
`