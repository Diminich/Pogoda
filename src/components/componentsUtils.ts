import moment from "moment";
import { IntlShape } from "react-intl";
import "moment/locale/ru";

export const i18Function = (intl: IntlShape, str: string) => {
  return intl.formatMessage({ id: str });
};

export const formatTime = (time: number, format: string, language?: string) => {
  moment.locale(language);
  return moment(time * 1000).format(format);
};
