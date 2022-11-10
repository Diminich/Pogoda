import { InitialStateHeaderType } from "./reducersTypes/reducersTypes";
import { InferActionTypes } from "./redux-store";
import messages_ru from "./../i18n/ru.json";
import messages_en from "./../i18n/en.json";

const SET_LANGUAGE = "SET_LANGUAGE";

const initialState: InitialStateHeaderType = {
  currentLanguage: "en",
  messages: {
    ru: messages_ru,
    en: messages_en,
  },
};

type InitialStateType = typeof initialState;
type ActionTypes = InferActionTypes<typeof actionHeader>;

const headerReducer = (
  state: InitialStateType = initialState,
  actionHeader: ActionTypes
): InitialStateType => {
  switch (actionHeader.type) {
    case SET_LANGUAGE:
      return {
        ...state,
        currentLanguage: actionHeader.setLanguage,
      };

    default:
      return state;
  }
};

export const actionHeader = {
  setLanguage: (setLanguage: string) =>
  ({
    type: SET_LANGUAGE,
    setLanguage,
  } as const),
};

export default headerReducer;
