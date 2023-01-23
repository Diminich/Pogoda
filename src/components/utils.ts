import moment from "moment";
import { IntlShape } from "react-intl";
import 'moment/locale/ru';
import { users } from "../users/users";
import { VerificationAccount } from "./header/headerModal/modalLogin/modalSignIn/ModalSignIn";
import { RegistrationAccount } from "./header/headerModal/modalLogin/modalSignUp/ModalSignUp";

export const i18nFuction = (intl: IntlShape, str: string) => {
    return intl.formatMessage({ id: str });
};

export const formatTime = (time: number, format: string, language?: string) => {
    moment.locale(language);
    return moment(time * 1000).format(format);
};

export const formatCalendar = () => {
    return moment().calendar(null, { sameDay: '[Today]' });
};

export const refactorParams = ({ ...params }) => {
    let refactorTemp: { [key: string]: number } = {};

    for (const key in params) {
        refactorTemp[key] = Math.round(params[key]);
    }

    return refactorTemp;
};

export const verificationAccount = ({ loginUser, passwordUser }: VerificationAccount) => {
    return users.find(({ login, password }) => {
        if (passwordUser === '') {
            return login === loginUser ? true : false;
        }
        return login === loginUser && password === passwordUser ? true : false;
    })
};

export const registrationAccount = ({ loginUser, passwordUser }: RegistrationAccount) => {
    if (!verificationAccount({ loginUser, passwordUser: '' })) {
        users.push({ login: loginUser, password: passwordUser });
        return true
    } else {
        return false
    }
};