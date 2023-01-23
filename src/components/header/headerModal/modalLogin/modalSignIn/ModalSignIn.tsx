import { Dispatch, SetStateAction } from 'react';
import { useIntl } from "react-intl";
import { SubmitHandler, useForm } from "react-hook-form";
import { i18nFuction, verificationAccount } from '../../../../utils';
import { ModalStyled, TypographyStyled } from '../../../../styled/header/headerModalStyled';
import { Span } from '../../../../htmlTags/Span';
import { nameButtonsModalLoginSignIn } from '../../../../constants';
import { ModalSignInButtons } from './modalSignInButtons/ModalSignInButtons';

interface ModalSignInProps {
    visibleModalLogin: boolean;
    setVisibleModalLogin: Dispatch<SetStateAction<boolean>>;
}

export interface VerificationAccount {
    loginUser: string;
    passwordUser: string;
}

export const ModalSignIn: React.FC<ModalSignInProps> = ({ visibleModalLogin, setVisibleModalLogin }) => {
    const intl = useIntl();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
        getValues,
        setError,
        clearErrors,
    } = useForm<VerificationAccount>({
        defaultValues: {
            loginUser: 'Admin',
            passwordUser: '12345678'
        },
        mode: 'onSubmit',
        reValidateMode: 'onSubmit'
    });

    const onSubmit: SubmitHandler<VerificationAccount> = (userState: VerificationAccount) => {
        debugger
        if (verificationAccount(userState)) {
            alert('Вы вошли!');
            reset();
            onCloseModalWindow(false);
        } else {
            setError('loginUser', { message: i18nFuction(intl, 'header.inputErrorSignIn') });
        }
    };

    const onCloseModalWindow = (event: boolean) => {
        setVisibleModalLogin(event);
        reset();
        clearErrors();
    }

    return (

        <ModalStyled
            open={visibleModalLogin}
        >
            <form onSubmit={handleSubmit(onSubmit)} className={'modalSignIn'}>
                <TypographyStyled>
                    <Span className='modalHeader' text={i18nFuction(intl, 'header.signIn')} />
                    <input {...register('loginUser', {
                        validate: { loginUser: (str) => str === getValues('loginUser') || i18nFuction(intl, 'header.inputErrorSignIn') }
                    })}
                        placeholder={i18nFuction(intl, 'header.inputLogin')} className='modalInput' />
                    <input {...register('passwordUser', {
                        required: i18nFuction(intl, 'header.inputErrorFieldFiling'),
                        validate: { passwordUser: (str) => str === getValues('passwordUser') || i18nFuction(intl, 'header.inputErrorSignIn') }
                    })}
                        placeholder={i18nFuction(intl, 'header.inputPassword')} type='password' className='modalInput' />
                    {(errors.loginUser || errors.passwordUser) && <span className='errorMessage'>{errors.loginUser?.message || errors.passwordUser?.message}</span>}
                    <div className='modalButtons'>
                        {nameButtonsModalLoginSignIn(intl).map(({ nameButton, textButton, typeButton }, index) => <ModalSignInButtons
                            nameButton={nameButton}
                            textButton={textButton}
                            typeButton={typeButton}
                            index={index}
                            onCloseModalWindow={onCloseModalWindow} />)}
                    </div>
                </TypographyStyled>
            </form>
        </ModalStyled>

    );
};