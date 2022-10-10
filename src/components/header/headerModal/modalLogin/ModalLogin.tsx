import { Modal } from 'antd';
import { Dispatch, SetStateAction } from 'react';
import { useIntl } from "react-intl";

import { useForm } from "react-hook-form";

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

    const onSubmit = () => {
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
            <div className='modalLogin'>
                <input {...register('loginUser', { required: true, validate: { loginUser: (str: string) => str === 'Admin' } })}
                    defaultValue='Admin' placeholder={intl.formatMessage({ id: 'header.inputLogin' })} className='modalLogin__input' />
                <input {...register('passwordUser', { required: true, validate: { passwordUser: (str: string) => str === '12345678' } })}
                    defaultValue='12345678' placeholder={intl.formatMessage({ id: 'header.inputPassword' })} type='password' className='modalLogin__input' />
                {errors.passwordUser || errors.loginUser ? <span className='modalLogin__errorMessage'>Имя пользователя или пароль введены неверно</span> : <></>}
            </div>
        </Modal >
    );
}

export default ModalLogin;