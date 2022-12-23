import { useContext } from 'react';
import LanguageContext from '../../context/LanguageContext';
import { aboutUsText } from '../../assets/data/texts';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

function AboutUs() {
  const { language } = useContext(LanguageContext);

  return (
    <section className="w-full max-w-[1280px] px-5 mx-auto tablet:pb-5">
      <div className="w-full flex flex-col justify-start items-start gap-14">
        <h1 className="w-full text-center text-4xl font-[500] text-darkBlue">{aboutUsText[language].title}</h1>
        <div className="relative flex flex-col justify-start items-center gap-10 tablet:flex-col">
          <div className="relative w-full text-lg text-justify text-gray-500 px-14 flex flex-col justify-start items-start gap-2 tablet:py-5 mobile:px-5">
            <FaQuoteLeft className="absolute top-[-30px] left-0 text-3xl text-darkBlue tablet:left-5" />
            <p>{aboutUsText[language].text}</p>
            <FaQuoteRight className="absolute bottom-[-30px] right-0 text-3xl text-darkBlue tablet:right-5" />
          </div>
        </div>
      </div>
    </section>
  );
}
export default AboutUs;
