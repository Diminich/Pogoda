import LoadingButton from "@mui/lab/LoadingButton";
import { styled } from "@mui/styles";
import { TextField } from "@mui/material";

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

    "@media (max-width: 999px)": {
      display: "flex",
    },

    "@media (max-width: 650px)": {
      width: "25%",
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

      "@media (max-width: 999px)": {
        fontSize: "18px",
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
      top: "45px",
      left: "5px",
      fontSize: "16px",

      "@media (max-width: 999px)": {
        top: "auto",
        bottom: "50px",
        left: "135px",
        border: "none",
        position: "absolute",
        fontSize: "24px",
      },
    },
  },
});
