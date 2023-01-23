import { Dispatch, SetStateAction } from 'react';
import { ModalSignIn } from './modalSignIn/ModalSignIn';
import { ModalSignUp } from './modalSignUp/ModalSignUp';

interface WeatherDataContainerProps {
    visibleModalLogin: boolean;
    setVisibleModalLogin: Dispatch<SetStateAction<boolean>>;
    nameModalLogin: string;
}

export const ModalLogin: React.FC<WeatherDataContainerProps> = ({ visibleModalLogin, setVisibleModalLogin, nameModalLogin }) => {
    switch (nameModalLogin) {
        case 'signIn': {
            return <ModalSignIn visibleModalLogin={visibleModalLogin} setVisibleModalLogin={setVisibleModalLogin} />
        }

        case 'signUp': {
            return <ModalSignUp visibleModalLogin={visibleModalLogin} setVisibleModalLogin={setVisibleModalLogin} />
        }

        default: {
            return null;
        }
    }
};