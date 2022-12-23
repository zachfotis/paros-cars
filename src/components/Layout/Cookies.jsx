import { useContext } from 'react';
import CookieConsent from 'react-cookie-consent';
import LanguageContext from '../../context/LanguageContext';

function Cookies() {
  const { language } = useContext(LanguageContext);
  return <CookieConsent buttonText={cookiesText[language].button}>{cookiesText[language].text}</CookieConsent>;
}
export default Cookies;

const cookiesText = {
  EN: {
    text: 'This website uses cookies to enhance the user experience.',
    button: 'I understand',
  },
  GR: {
    text: 'Αυτός ο ιστότοπος χρησιμοποιεί cookies για να βελτιώσει την εμπειρία του χρήστη.',
    button: 'Το κατάλαβα',
  },
};
