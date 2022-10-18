import { IntlShape } from "react-intl";



export const i18nFuction = (intl: IntlShape, str: string) => {
    
    return intl.formatMessage({ id: str });
};