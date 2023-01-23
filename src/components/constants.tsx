import { IntlShape } from "react-intl";
import { i18nFuction } from "./utils";

export const nameButtonsToggleWether = (intl: IntlShape) => [
    { nameButton: 'today', path: '/home/today', textButton: i18nFuction(intl, 'body.today') },
    { nameButton: 'tomorrow', path: '/home/tomorrow', textButton: i18nFuction(intl, 'body.tomorrow') },
    { nameButton: 'daily', path: '/home/daily', textButton: i18nFuction(intl, 'body.daily') }
];



export const nameButtonsHeader = (intl: IntlShape) => [
    { nameButton: 'signIn', textButton: i18nFuction(intl, 'header.signIn') },
    { nameButton: 'signUp', textButton: i18nFuction(intl, 'header.signUp') }
];

interface NameButtonsModalLoginSignIn {
    nameButton: string;
    typeButton: 'submit';
    textButton: string;
}

export const nameButtonsModalLoginSignIn = (intl: IntlShape): NameButtonsModalLoginSignIn[] => [
    {nameButton: 'cancel', typeButton: 'submit', textButton: i18nFuction(intl, 'header.buttonCancelSignIn') },
    {nameButton: 'signIn', typeButton: 'submit', textButton: i18nFuction(intl, 'header.buttonSignIn') }
];

interface NameButtonsModalLoginSignUp {
    nameButton: string;
    typeButton: 'submit';
    textButton: string;
}

export const nameButtonsModalLoginSignUp = (intl: IntlShape): NameButtonsModalLoginSignUp[] => [
    {nameButton: 'cancel', typeButton: 'submit', textButton: i18nFuction(intl, 'header.buttonCancelSignUp') },
    {nameButton: 'signUp', typeButton: 'submit', textButton: i18nFuction(intl, 'header.buttonSignUp') }
];