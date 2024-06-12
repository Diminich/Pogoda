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
      // height: "65%",
      // width: "40px",
    },

    [mediaMobile]: {
      // height: "70%",
      // height: 80%;
      //   width: 11%;
      //   font-size: 14px;
    },

    [mediaHeight]: {
      // fontSize: "28px",
    },
  },
});

export const LanguagesMenu = styled(Menu)({});

export const LanguagesMenuItem = styled(MenuItem)({
  "&.MuiMenuItem-root": {
    width: "40px",
    display: "flex",
    justifyContent: "center",

    [mediaTablet]: {
      fontSize: "15px",
    },

    [mediaMobile]: {
      fontSize: "14px",
    },

    [mediaHeight]: {
      fontSize: "26px",
    },
  },
});
