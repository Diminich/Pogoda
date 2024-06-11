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

export const languages = [
  { value: "ru", langugae: "RU" },
  { value: "en", langugae: "EN" },
];

export const mediaHeight = "@media (min-height: 999px)";
export const mediaTablet = "@media (max-width: 999px)";
export const mediaMobile = "@media (max-width: 375px)";
