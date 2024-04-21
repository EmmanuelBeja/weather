import * as React from 'react';
import { LocaleContextType } from '../../@types/locale';

export const LocaleContext = React.createContext<LocaleContextType | null>(
  null
);

const LocaleProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [locale, setLocale] = React.useState<'en' | 'sw'>('en');

  const updateLocale = (newLocale: 'en' | 'sw') => {
    setLocale(newLocale);
  };

  return (
    <LocaleContext.Provider value={{ locale: locale ?? 'en', updateLocale }}>
      {children}
    </LocaleContext.Provider>
  );
};

export default LocaleProvider;
