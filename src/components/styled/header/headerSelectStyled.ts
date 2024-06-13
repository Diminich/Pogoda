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
      maxWidth: "12%",
      fontSize: "16px",
    },

    [mediaMobile]: {
      maxWidth: "14%",
      fontSize: "14px",
    },

    [mediaHeight]: {
      fontSize: "24px",
    },
  },
});

export const LanguagesMenu = styled(Menu)({
  "& .MuiMenu-paper": {
    [mediaTablet]: {
      maxWidth: "12%",
    },

    [mediaMobile]: {
      maxWidth: "14%",
    },
  },
});

export const LanguagesMenuItem = styled(MenuItem)({
  "&.MuiMenuItem-root": {
    display: "flex",
    justifyContent: "center",

    [mediaTablet]: {
      fontSize: "16px",
    },

    [mediaMobile]: {
      fontSize: "14px",
    },

    [mediaHeight]: {
      fontSize: "24px",
    },
  },
});
