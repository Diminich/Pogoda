import LoadingButton from "@mui/lab/LoadingButton";
import { styled } from "@mui/styles";
import { TextField } from "@mui/material";
import { mediaHeight, mediaMobile, mediaTablet } from "../../constants";

export const SearchButton = styled(LoadingButton)({
  "&.MuiLoadingButton-root": {
    height: "80%",
    width: "15%",
    backgroundColor: "rgba(0, 0, 0, 0)",
    border: "1px solid white",
    borderRadius: "10px",
    color: "white",

    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0)",
    },

    [mediaTablet]: {
      width: "25%",
      fontSize: "15px",
    },

    [mediaMobile]: {
      width: "30%",
      fontSize: "14px",
    },

    [mediaHeight]: {
      width: "24%",
      fontSize: "26px",
    },
  },
});

export const SearchInput = styled(TextField)({
  "&.MuiFormControl-root": {
    height: "80%",
    width: "65%",
    background: "white",
    borderRadius: "20px",

    "& .MuiInputBase-root": {
      height: "100%",
      paddingLeft: "5px",

      [mediaTablet]: {
        fontSize: "18px",
      },

      [mediaHeight]: {
        fontSize: "26px",
      },

      "& .MuiOutlinedInput-notchedOutline": {
        borderStyle: "none",
      },
    },

    "& .Mui-error": {
      border: "1px solid #d32f2f",
      borderRadius: "20px",
    },

    "& .MuiFormHelperText-root": {
      border: "none",
      position: "absolute",
      bottom: "95%",
      left: "10%",
      fontSize: "16px",

      [mediaTablet]: {
        bottom: "90%",
        left: "12%",
        fontSize: "20px",
      },

      [mediaMobile]: {
        bottom: "95%",
        left: "12%",
        fontSize: "16px",
      },

      [mediaHeight]: {
        bottom: "95%",
        left: "10%",
        fontSize: "26px",
      },
    },
  },
});
