import { Dispatch, SetStateAction } from 'react';
import { useIntl } from "react-intl";
import { SubmitHandler, useForm } from "react-hook-form";
import { i18nFuction, registrationAccount } from '../../../../utils';
import { ModalStyled, TypographyStyled } from '../../../../styled/header/headerModalStyled';
import { Span } from '../../../../htmlTags/Span';
import { nameButtonsModalLoginSignUp } from '../../../../constants';
import { ModalSignUpButtons } from './modalSignUpButtons/ModalSignUpButtons';
import { ErrorMessage } from '@hookform/error-message';

interface ModalSignUpProps {
    visibleModalLogin: boolean;
    setVisibleModalLogin: Dispatch<SetStateAction<boolean>>;
}

export interface RegistrationAccount {
    loginUser: string;
    passwordUser: string;
    passwordAgain: string;
}

export const ModalSignUp: React.FC<ModalSignUpProps> = ({ visibleModalLogin, setVisibleModalLogin }) => {
    const intl = useIntl();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
        setError,
        clearErrors,
        getValues
    } = useForm<RegistrationAccount>({
        mode: 'onSubmit',
        reValidateMode: 'onSubmit'
    });

    const onSubmit: SubmitHandler<RegistrationAccount> = (userState: RegistrationAccount) => {
        if (registrationAccount(userState)) {
            alert('Вы зарегистрировались!');
            reset();
            onCloseModalWindow(false);
        } else {
            setError('loginUser', { message: i18nFuction(intl, 'header.inputErrorSignUp') });
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
            <form onSubmit={handleSubmit(onSubmit)} className={'modalSignUp'}>
                <TypographyStyled>
                    <Span className='modalHeader' text={i18nFuction(intl, 'header.signUp')} />
                    <input {...register('loginUser', {
                        required: i18nFuction(intl, 'header.inputErrorFieldFilingSignUp')
                    })}
                        placeholder={i18nFuction(intl, 'header.inputLogin')} className='modalInput' />

                    <ErrorMessage
                        name='loginUser'
                        errors={errors}
                        render={({ message }) => <span className='errorMessageLogin'>{message}</span>} />
                    <input {...register('passwordUser', {
                        required: i18nFuction(intl, 'header.inputErrorFieldFilingSignUp'),
                        minLength: {
                            value: 6,
                            message: i18nFuction(intl, 'header.inputPasswordErrorLengthSignUp')
                        }
                    })}
                        placeholder={i18nFuction(intl, 'header.inputPassword')} type='password' className='modalInput' />

                    <ErrorMessage
                        name='passwordUser'
                        errors={errors}
                        render={({ message }) => <span className='errorMessagePassword'>{message}</span>} />
                    <input {...register('passwordAgain', {
                        validate: { passwordAgain: (str) => str === getValues('passwordUser') || i18nFuction(intl, 'header.inputPasswordErrorSignUp') }
                    })}
                        placeholder={i18nFuction(intl, 'header.inputPassword')} type='password' className='modalInput' />

                    <ErrorMessage
                        name='passwordAgain'
                        errors={errors}
                        render={({ message }) => <span className='errorMessagePasswordAgain'>{message}</span>} />

                    <div className='modalButtons'>
                        {nameButtonsModalLoginSignUp(intl).map(({ nameButton, textButton, typeButton }, index) => <ModalSignUpButtons
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