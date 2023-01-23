import { RoutesComponents } from './routes/RoutesComponents';
import { Header } from './components/header/Header';
import './scss/index.scss';
import { IntlProvider } from 'react-intl';
import { useSelector } from 'react-redux';
import { AppStateType } from './redux/redux-store';

export const App: React.FC = () => {
  const currentLanguage = useSelector<AppStateType, string>(state => state.headerReducerPage.currentLanguage);
  const messegesLanguages = useSelector<AppStateType, any>(state => state.headerReducerPage.messages);

  return (
    <div className='App'>
      <IntlProvider locale={currentLanguage} messages={messegesLanguages[currentLanguage]}>
        <Header />
        <RoutesComponents />
      </IntlProvider>
    </div>
  );
}