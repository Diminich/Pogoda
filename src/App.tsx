import RoutesComponents from './routes/RoutesComponents';
import styles from './app.module.scss';
import Header from './components/header/Header';
import Body from './components/body/Body';
import 'antd/dist/antd.css';
import { IntlProvider } from 'react-intl';
import { useSelector } from 'react-redux';
import { AppStateType } from './redux/redux-store';

const App: React.FC = () => {
  const currentLanguage = useSelector<AppStateType, string>(state => state.headerReducerPage.currentLanguage);
  const messegesLanguages = useSelector<AppStateType, any>(state => state.headerReducerPage.messages);
  return (
    <div className={styles.warapperApp}>
      <IntlProvider locale={currentLanguage} messages={messegesLanguages[currentLanguage]}>
        <Header />
        <Body />
        <RoutesComponents />
      </IntlProvider>
    </div>
  );
}

export default App;