import { useSelector } from "react-redux";
import { AppStateType, useAppDispath } from "../../../redux/redux-store";
import {
  LanguageButton,
  LanguagesMenu,
  LanguagesMenuItem,
} from "../../styled/header/headerSelectStyled";
import {
  isLoadingLanguageAction,
  setLanguageAction,
} from "../../../redux/actions/headerActions";
import { changeLanguages } from "../../../redux/asyncThunk/asyncThunk";
import { MouseEvent, useLayoutEffect, useState } from "react";
import { languages } from "../../constants";

export const HeaderSelect: React.FC = () => {
  const dispatch = useAppDispath();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const currentLanguage = useSelector<AppStateType, string>(
    (state) => state.headerReducerPage.currentLanguage
  );

  useLayoutEffect(() => {
    if (currentLanguage) {
      dispatch(changeLanguages());
    }
  }, [currentLanguage, dispatch]);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const setLanguage = (language: string) => {
    if (language !== currentLanguage) {
      dispatch(isLoadingLanguageAction(true));
    }
    dispatch(setLanguageAction(language));
    setAnchorEl(null);
  };

  return (
    <>
      <LanguageButton variant="contained" onClick={(e) => handleClick(e)}>
        {currentLanguage}
      </LanguageButton>
      <LanguagesMenu
        anchorEl={anchorEl}
        open={!!anchorEl}
        onClose={handleClose}
      >
        {languages.map(({ language, value }, index) => {
          return (
            <LanguagesMenuItem key={index} onClick={() => setLanguage(value)}>
              {language}
            </LanguagesMenuItem>
          );
        })}
      </LanguagesMenu>
    </>
  );
};
