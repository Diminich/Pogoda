// import styles from './modalLogin.module.scss';
import { Modal } from 'antd';
import { Dispatch, SetStateAction } from 'react';
import { useIntl } from "react-intl";

import { useForm, SubmitHandler } from "react-hook-form";

interface ModalLoginProps {
    titleModal: string;
    textButtonOk: string;
    textButtonCancel: string;
    isModalVisibleModalLogin: boolean;
    setIsModalVisibleModalLogin: Dispatch<SetStateAction<boolean>>;
}

interface InitialValuesLogin {
    loginUser: string;
    passwordUser: string;
}

const ModalLogin: React.FC<ModalLoginProps> = ({ titleModal, textButtonOk, textButtonCancel, isModalVisibleModalLogin, setIsModalVisibleModalLogin }) => {
    const intl = useIntl();
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<InitialValuesLogin>();

    const onSubmit: SubmitHandler<InitialValuesLogin> = () => {
        setIsModalVisibleModalLogin(false);
    };

    const handleCancel = () => {
        setIsModalVisibleModalLogin(false);
    };



    return (
        <Modal
            centered={true}
            bodyStyle={{ height: 150 }}
            title={titleModal}
            visible={isModalVisibleModalLogin}
            onOk={handleSubmit(onSubmit)}
            onCancel={handleCancel}
            okText={textButtonOk}
            cancelText={textButtonCancel}
            maskClosable={false}
            closable={false}
        >
            <div className='wrapperInputsLogin'>
                <input {...register('loginUser', { required: true, validate: { loginUser: str => str === 'Admin' } })}
                    defaultValue='Admin' placeholder={intl.formatMessage({ id: 'header.inputLogin' })} className='inputLogin' />
                <input {...register('passwordUser', { required: true, validate: { passwordUser: str => str === '12345678' } })}
                    defaultValue='12345678' placeholder={intl.formatMessage({ id: 'header.inputPassword' })} type='password' className='inputPassword' />
                {errors.passwordUser || errors.loginUser ? <span className='errorMessage'>Имя пользователя или пароль введены неверно</span> : <></>}
            </div>
        </Modal >
    );
}

export default ModalLogin;