import { createContext, useEffect } from 'react';
import { toast } from 'react-toastify';
import useLocalStorage from '../hooks/useLocalStorage';

const LanguageContext = createContext();

export default LanguageContext;

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useLocalStorage('language', 'GR');

  useEffect(() => {
    if (language === 'GR') {
      toast.info('Η γλώσσα άλλαξε σε Ελληνικά!');
    } else {
      toast.info('Language changed to English!');
    }
  }, [language]);

  return <LanguageContext.Provider value={{ language, setLanguage }}>{children}</LanguageContext.Provider>;
};

export { LanguageProvider };
