import moment from "moment";
import { IntlShape } from "react-intl";
import "moment/locale/ru";

export const i18nFuction = (intl: IntlShape, str: string) => {
  return intl.formatMessage({ id: str });
};

export const formatTime = (time: number, format: string, language?: string) => {
  moment.locale(language);
  return moment(time * 1000).format(format);
};

export const formatCalendar = () => {
  return moment().calendar(null, { sameDay: "[Today]" });
};

export const refactorParams = ({ ...params }) => {
  let refactorTemp: { [key: string]: number } = {};

  for (const key in params) {
    refactorTemp[key] = Math.round(params[key]);
  }

  return refactorTemp;
};

export const upperCaseFirstLetter = (str: string) => {
  return str
    .split("")
    .map((el, index) => (index === 0 ? el.toUpperCase() : el))
    .join("");
};
