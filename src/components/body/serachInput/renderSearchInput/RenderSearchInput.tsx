import { Input } from "antd";
import { SearchProps } from "antd/lib/input";
import { ForwardRefExoticComponent, RefAttributes } from "react";
import { IntlShape } from "react-intl";
import RenderSearchInputError from "./RenderSearchInputError";

interface RenderSearchInputProps {
    classNameRenderSearchInput: { readonly [key: string]: string; };
    intl: IntlShape;
    Search: ForwardRefExoticComponent<SearchProps & RefAttributes<Input>>;
    onSearchCity: () => void;
    cityName: string;
    isLoading: boolean;
    changeNameCity: (e: React.ChangeEvent<HTMLInputElement>) => void;
    isActiveError: boolean;
    error: number;
}

const RenderSearchInput: React.FC<RenderSearchInputProps> = ({ classNameRenderSearchInput, intl, Search, onSearchCity, cityName, isLoading, changeNameCity, isActiveError, error }) => {
    const styles = classNameRenderSearchInput;
    return (
        <>
            <Search
                className={isActiveError ? styles.searchInputError : styles.searchInput}
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
            <RenderSearchInputError classNameRenderSearchInputError={styles} error={error} intl={intl} />
        </>
    )
}

export default RenderSearchInput;