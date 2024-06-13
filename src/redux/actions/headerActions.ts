import { createAction } from "@reduxjs/toolkit";

export const setLanguageAction = createAction<string>("HEADER_SET_LANGUAGE");
export const isLoadingLanguageAction = createAction<boolean>(
  "HEADER_IS_LOADING_ACTION"
);
