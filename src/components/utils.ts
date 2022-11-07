import moment from "moment";
import { IntlShape } from "react-intl";

export const i18nFuction = (intl: IntlShape, str: string) => {

    return intl.formatMessage({ id: str });
};

export const formatTime = (time: number, format: string, language?: string) => {
    moment.locale(language);
    return moment(time * 1000).format(format)
};

export const formatCalendar = () => {
    return moment().calendar(null, { sameDay: '[Today]' })
};

export const refactorParams = (...params: number[]) => {

}