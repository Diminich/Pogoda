import { useState } from 'react';
import { useIntl } from "react-intl";
import { HeaderButtons } from './headerButtons/HeaderButtons';
import { ModalLogin } from "./modalLogin/ModalLogin";

export const HeaderModal: React.FC = () => {
    const intl = useIntl();
    const [isModalVisibleModalLoginSignIn, setIsModalVisibleModalLoginSignIn] = useState(false);
    const [isModalVisibleModalLoginSignUp, setIsModalVisibleModalLoginSignUp] = useState(false);

    return (
        <>
            <HeaderButtons intl={intl} setIsModalVisibleModalLoginSignIn={setIsModalVisibleModalLoginSignIn} setIsModalVisibleModalLoginSignUp={setIsModalVisibleModalLoginSignUp} />
            <ModalLogin
                titleModal={intl.formatMessage({ id: 'header.signIn' })}
                textButtonOk={intl.formatMessage({ id: 'header.buttonOkSignIn' })}
                textButtonCancel={intl.formatMessage({ id: 'header.buttonCancelSignIn' })}
                isModalVisibleModalLogin={isModalVisibleModalLoginSignIn}
                setIsModalVisibleModalLogin={setIsModalVisibleModalLoginSignIn} />
            <ModalLogin
                titleModal={intl.formatMessage({ id: 'header.signUp' })}
                textButtonOk={intl.formatMessage({ id: 'header.buttonOkSignUp' })}
                textButtonCancel={intl.formatMessage({ id: 'header.buttonCancelSignUp' })}
                isModalVisibleModalLogin={isModalVisibleModalLoginSignUp}
                setIsModalVisibleModalLogin={setIsModalVisibleModalLoginSignUp} />
        </>
    )
};