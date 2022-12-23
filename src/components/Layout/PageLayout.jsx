import { useContext } from 'react';
import LanguageContext from '../../context/LanguageContext';

function PageLayout({ image, title, children }) {
  const { language } = useContext(LanguageContext);
  return (
    <section className="flex flex-col items-center justify-center mb-20">
      <img src={image} alt="hero" className="h-[60vh] w-full object-cover shadow-lg" />
      <h1 className="w-full text-center text-3xl font-[500] text-darkBlue my-14 tablet:my-10">
        {language === 'EN' ? title.EN : title.GR}
      </h1>
      {children}
    </section>
  );
}
export default PageLayout;
