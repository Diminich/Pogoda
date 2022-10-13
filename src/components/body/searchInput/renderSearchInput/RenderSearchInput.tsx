import { Box } from '@mui/material';
import { TextField } from '@mui/material';
import { IntlShape } from "react-intl";

interface RenderSearchInputProps {
    intl: IntlShape;
    onSearchCity: () => void;
    cityName: string;
    isLoading: boolean;
    changeNameCity: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    isActiveError: boolean;
    error: number;
}

const RenderSearchInput: React.FC<RenderSearchInputProps> = ({ intl, onSearchCity, cityName, isLoading, changeNameCity, isActiveError, error }) => {

    const textField = {
        borderColor: 'black',
        bgcolor: 'white',
        '& .MuiTextField-root': { m: 1, width: '25ch' },
        '& label.Mui-focused': {
            color: 'black'
        },
        '& .MuiOutlinedInput-root': {
            ' &.Mui-focused fieldset': {
                borderColor: 'black'
            }
        }
    }

    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField
                sx={textField}
                id="outlined-search"
                inputProps={{ type: 'search' }}
                placeholder={intl.formatMessage({ id: 'body.search' })}
                value={cityName}
                onChange={(e) => changeNameCity(e)}
                type="search" />
        </Box>
        // {/* <Search
        //     // className={isActiveError ? 'searchInput__inputError' : 'searchInput__input'}
        //     bordered={false}
        //     allowClear={true}
        //     placeholder={
        //     enterButton={intl.formatMessage({ id: 'body.searchButton' })}
        //     size='middle'
        //     onChange={(e) => changeNameCity(e)}
        //     value={cityName}
        //     loading={isLoading}
        //     onSearch={onSearchCity}
        // />
        // <RenderSearchInputError error={error} intl={intl} /> */}
    )
}

export default RenderSearchInput;