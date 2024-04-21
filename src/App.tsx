import { useContext } from 'react';
import Landing from './pages/Landing';

import { LocaleContextType } from './@types/locale';
import { LocaleContext } from './utils/store/localeContext';
import LocaleProvider from './utils/store/localeContext';
import WeatherProvider from './utils/store/weatherContext';
import './App.css';

import { IntlProvider } from 'react-intl';
import messages_en from './utils/locales/en.json';
import messages_sw from './utils/locales/sw.json';

const App = () => {
  return (
    <LocaleProvider>
      <WeatherProvider>
        <AppWrapper />
      </WeatherProvider>
    </LocaleProvider>
  );
};

export default App;

const AppWrapper = () => {
  const messages = {
    en: messages_en,
    sw: messages_sw,
  };
  const { locale } = useContext(LocaleContext) as LocaleContextType;
  return (
    <IntlProvider locale={locale ?? 'en'} messages={messages[locale]}>
      <Landing />
    </IntlProvider>
  );
};
