import { MenuItem } from "@mui/material";
import { useSelector } from "react-redux";
import { AppStateType, useAppDispath } from "../../../redux/redux-store";
import { LanguagesSelect } from "../../styled/header/headerSelectStyled";
import { setLanguageAction } from "../../../redux/actions/headerActions";
import { changeLanguages } from "../../../redux/asyncThunk/asyncThunk";

export const HeaderSelect: React.FC = () => {
  const dispatch = useAppDispath();
  const cityName = useSelector<AppStateType, string>(
    (state) => state.bodySearchCityPage.cityName
  );
  const currentLanguage = useSelector<AppStateType, string>(
    (state) => state.headerReducerPage.currentLanguage
  );
  const setCurrentLanguage = (e: any) => {
    dispatch(setLanguageAction(e.target.value as string));
    cityName !== "" && dispatch(changeLanguages());
  };

  return (
    <LanguagesSelect
      autoWidth={true}
      value={currentLanguage}
      onChange={setCurrentLanguage}
      IconComponent={() => null}
    >
      <MenuItem value="ru">RU</MenuItem>
      <MenuItem value="en">EN</MenuItem>
    </LanguagesSelect>
  );
};
