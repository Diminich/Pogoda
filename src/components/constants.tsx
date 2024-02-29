import { IntlShape } from "react-intl";
import { i18nFuction } from "./utils";

export const nameButtonsToggleWether = (intl: IntlShape) => [
  {
    nameButton: "today",
    path: "/home/today",
    textButton: i18nFuction(intl, "body.today"),
  },
  {
    nameButton: "tomorrow",
    path: "/home/tomorrow",
    textButton: i18nFuction(intl, "body.tomorrow"),
  },
  {
    nameButton: "daily",
    path: "/home/daily",
    textButton: i18nFuction(intl, "body.daily"),
  },
];
