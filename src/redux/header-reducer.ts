import { InitialStateHeaderType } from "./reducersTypes/reducersTypes";
import { InferActionTypes } from "./redux-store";
import messages_ru from "./../i18n/ru.json";
import messages_en from "./../i18n/en.json";

const SET_LANGUAGE = 'SET_LANGUAGE';

const initialState: InitialStateHeaderType = {
    currentLanguage: 'en',
    messages: {
        'ru': messages_ru,
        'en': messages_en
    }
};

type InitialStateType = typeof initialState;
type ActionTypes = InferActionTypes<typeof action>;

const headerReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case SET_LANGUAGE:
            return {
                ...state,
                currentLanguage: action.setLanguage
            };

        default:
            return state;
    }
};

export const action = {
    setLanguage: (setLanguage: string) => ({
        type: SET_LANGUAGE,
        setLanguage
    } as const)
}


export default headerReducer;