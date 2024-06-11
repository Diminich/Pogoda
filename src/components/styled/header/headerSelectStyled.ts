import { Button, Menu, MenuItem } from "@mui/material";
import { styled } from "@mui/styles";
import { mediaHeight, mediaMobile, mediaTablet } from "../../constants";



export const LanguageButton = styled(Button)({
  "&.MuiButton-root": {
    minWidth: "0px",
    border: "1px solid white",
    borderRadius: "10px",
    backgroundColor: "rgba(0, 0, 0, 0)",

    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0)",
    },

    [mediaTablet]: {
      fontSize: "19px",
    },

    [mediaMobile]: {
      fontSize: "16px",
    },

    [mediaHeight]: {
      fontSize: "28px",
    },
  },
});

export const LanguagesMenu = styled(Menu)({});

export const LanguagesMenuItem = styled(MenuItem)({
  "&.MuiMenuItem-root": {
    display: "flex",
    justifyContent: "center",

    [mediaTablet]: {
      fontSize: "19px",
    },

    [mediaMobile]: {
      fontSize: "16px",
    },

    [mediaHeight]: {
      fontSize: "28px",
    },
  },
});