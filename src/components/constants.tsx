import { IntlShape } from "react-intl";
import { i18Function } from "./utils";

export const nameButtonsToggleWether = (intl: IntlShape) => [
  {
    nameButton: "today",
    path: "/home/today",
    textButton: i18Function(intl, "body.today"),
  },
  {
    nameButton: "tomorrow",
    path: "/home/tomorrow",
    textButton: i18Function(intl, "body.tomorrow"),
  },
  {
    nameButton: "daily",
    path: "/home/daily",
    textButton: i18Function(intl, "body.daily"),
  },
];

export const languages = [
  { value: "ru", language: "RU" },
  { value: "en", language: "EN" },
];

export const mediaHeight = "@media (min-height: 999px)";
export const mediaTablet = "@media (max-width: 999px)";
export const mediaMobile = "@media (max-width: 375px)";
