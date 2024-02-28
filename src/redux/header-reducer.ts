import { InitialStateHeaderType } from "./reducersTypes/reducersTypes";
import messages_ru from "./../i18n/ru.json";
import messages_en from "./../i18n/en.json";
import { createReducer } from "@reduxjs/toolkit";
import { setLanguageAction } from "./actions/headerActions";

const initialState: InitialStateHeaderType = {
  currentLanguage: "en",
  messages: {
    ru: messages_ru,
    en: messages_en,
  },
};

const headerReducer = createReducer(initialState, (builder) => {
  builder.addCase(setLanguageAction, (state, action) => {
    state.currentLanguage = action.payload
  })
});

export default headerReducer;
