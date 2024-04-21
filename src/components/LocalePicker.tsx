import { useContext } from 'react';
import { LocaleContextType } from '../@types/locale';
import { LocaleContext } from '../utils/store/localeContext';

const LocalePicker: React.FC = () => {
  const { updateLocale, locale } = useContext(
    LocaleContext
  ) as LocaleContextType;
  return (
    <div className="flex items-center gap-2">
      <label htmlFor="locale" className="text-[white]">
        Select Language
      </label>
      <select
        id="locale"
        name="locale"
        value={locale}
        onChange={(e) => updateLocale(e.target.value as 'en' | 'sw')}
        className="rounded-md px-2 py-1"
      >
        <option value="en">English</option>
        <option value="sw">Swahili</option>
      </select>
    </div>
  );
};

export default LocalePicker;
