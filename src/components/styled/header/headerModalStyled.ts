import styled from "styled-components";
import { Modal, Typography } from '@mui/material';
import Button from '@mui/material/Button';


export const ModalStyled = styled(Modal)`
    &.MuiModal-root {   
        height: 61%;
        width: 50%;
        position: absolute;
        top: 18%;
        left: 25%;
    }
`

export const TypographyStyled = styled(Typography)`
  	&.MuiTypography-root {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        background: white;
        border-radius: 20px;
    }
`
export const ModalButtonsStyled = styled(Button)`
    &.MuiButton-root {
        height: 100%;
        width: 35%;
        border: 1px solid black;
        border-radius: 20px;
        color: black;
        background: white;
    }
`;