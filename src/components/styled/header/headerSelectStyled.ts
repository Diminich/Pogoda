import { MenuItem, Select } from "@mui/material";
import { styled } from "@mui/styles";

export const LanguagesSelect = styled(Select)({
  "&.MuiInputBase-root": {
    height: "75%",
    border: "1px solid white",
    borderRadius: "10px",
    color: "white",
    transition:
      "background-color 5ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",

    "&:hover": {
      boxShadow:
        "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
      transition:
        "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    },

    "&:active": {
      boxShadow:
        "0px 5px 5px -3px rgba(0,0,0,0.2), 0px 8px 10px 1px rgba(0,0,0,0.14), 0px 3px 14px 2px rgba(0,0,0,0.12)",
    },

    "& .MuiSelect-select.MuiSelect-outlined": {
      marginLeft: "4px",
      paddingRight: "18px",
    },

    "& .MuiOutlinedInput-notchedOutline": {
      borderStyle: "none",
    },
  },
});

export const LanguagexMenuitem = styled(MenuItem)({
  "&.MuiMenuItem-root": {
    display: "flex",
    justifyContent: "center",
  },
});
