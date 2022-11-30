import { createContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const LanguageContext = createContext();

export default LanguageContext;

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useLocalStorage('language', 'GR');

  return <LanguageContext.Provider value={{ language, setLanguage }}>{children}</LanguageContext.Provider>;
};

export { LanguageProvider };
