import { useIntl } from "react-intl";

export const NameButtonsToggleWether = () => {
    const intl = useIntl();
    const nameButtonsToggleWether: Array<{ nameActiveButton: string, textButton: string }> = [
        { nameActiveButton: 'Today', textButton: intl.formatMessage({ id: 'body.today' }) },
        { nameActiveButton: 'Tomorrow', textButton: intl.formatMessage({ id: 'body.tomorrow' }) },
        { nameActiveButton: 'Daily', textButton: intl.formatMessage({ id: 'body.daily' }) }
    ];

    return nameButtonsToggleWether
}