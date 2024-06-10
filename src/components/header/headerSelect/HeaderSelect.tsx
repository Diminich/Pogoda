import { useSelector } from "react-redux";
import { AppStateType, useAppDispath } from "../../../redux/redux-store";
import {
  LanguagesSelect,
  LanguagexMenuitem,
} from "../../styled/header/headerSelectStyled";
import {
  isloadingLanguageAction,
  setLanguageAction,
} from "../../../redux/actions/headerActions";
import { changeLanguages } from "../../../redux/asyncThunk/asyncThunk";
import { useLayoutEffect } from "react";

export const HeaderSelect: React.FC = () => {
  const dispatch = useAppDispath();
  const isLoadingLanguage = useSelector<AppStateType, boolean>(
    (state) => state.headerReducerPage.isLoadingLanguages
  );
  const currentLanguage = useSelector<AppStateType, string>(
    (state) => state.headerReducerPage.currentLanguage
  );

  useLayoutEffect(() => {
    if (isLoadingLanguage) {
      dispatch(changeLanguages());
    }
  }, [currentLanguage]);

  const setCurrentLanguage = (e: any) => {
    dispatch(setLanguageAction(e.target.value as string));
    dispatch(isloadingLanguageAction(true));
  };

  return (
    <LanguagesSelect
      value={currentLanguage}
      onChange={setCurrentLanguage}
      inputProps={{ IconComponent: () => null }}
    >
      <LanguagexMenuitem value="ru">RU</LanguagexMenuitem>
      <LanguagexMenuitem value="en">EN</LanguagexMenuitem>
    </LanguagesSelect>
  );
};
