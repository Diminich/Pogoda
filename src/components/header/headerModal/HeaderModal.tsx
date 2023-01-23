import { useState } from 'react';
import { HeaderButtons } from './headerButtons/HeaderButtons';
import { ModalLogin } from './modalLogin/ModalLogin';

export const HeaderModal: React.FC = () => {
    const [visibleModalLogin, setVisibleModalLogin] = useState<boolean>(false);
    const [nameModalLogin, setNameModalLogin] = useState<string>('');

    return (
        <>
            <HeaderButtons
                setVisibleModalLogin={setVisibleModalLogin}
                setNameModalLogin={setNameModalLogin} />
            <ModalLogin
                visibleModalLogin={visibleModalLogin}
                setVisibleModalLogin={setVisibleModalLogin}
                nameModalLogin={nameModalLogin} />
        </>
    )
};