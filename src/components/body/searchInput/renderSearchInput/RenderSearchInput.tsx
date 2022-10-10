import { SearchProps } from "antd/lib/input";
import { ForwardRefExoticComponent } from "react";
import { IntlShape } from "react-intl";
import RenderSearchInputError from "./RenderSearchInputError";

interface RenderSearchInputProps {
    intl: IntlShape;
    Search: ForwardRefExoticComponent<SearchProps>;
    onSearchCity: () => void;
    cityName: string;
    isLoading: boolean;
    changeNameCity: (e: React.ChangeEvent<HTMLInputElement>) => void;
    isActiveError: boolean;
    error: number;
}

const RenderSearchInput: React.FC<RenderSearchInputProps> = ({ intl, Search, onSearchCity, cityName, isLoading, changeNameCity, isActiveError, error }) => {
    return (
        <>
            <Search
                className={isActiveError ? 'searchInput__inputError' : 'searchInput__input'}
                bordered={false}
                allowClear={true}
                placeholder={intl.formatMessage({ id: 'body.search' })}
                enterButton={intl.formatMessage({ id: 'body.searchButton' })}
                size='middle'
                onChange={(e) => changeNameCity(e)}
                value={cityName}
                loading={isLoading}
                onSearch={onSearchCity}
            />
            <RenderSearchInputError error={error} intl={intl} />
        </>
    )
}

export default RenderSearchInput;