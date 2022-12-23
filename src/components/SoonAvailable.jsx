import { useContext } from 'react';
import { ContactUsText } from '../assets/data/texts';
import LanguageContext from '../context/LanguageContext';

function SoonAvailable() {
  const { language } = useContext(LanguageContext);
  return (
    <div className="w-full max-w-[1280px] mx-auto flex flex-col justify-center items-center gap-2 border-2 border-gray-300 shadow-lg rounded-lg p-10 ">
      <h1 className="w-full text-center text-xl text-darkBlue">{ContactUsText[language].title}</h1>
      <p className="w-full text-center text-lg text-gray-500 tablet:text-justify">{ContactUsText[language].text}</p>
      <a href={ContactUsText[language].tel} className="text-center w-full text-xl text-darkBlue">
        {ContactUsText[language].phone}
      </a>
    </div>
  );
}
export default SoonAvailable;
