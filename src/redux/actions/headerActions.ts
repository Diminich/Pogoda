import { createAction } from "@reduxjs/toolkit";

export const SET_LANGUAGE = "HEADER_SET_LANGUAGE";

export const setLanguage = createAction<string>(SET_LANGUAGE);