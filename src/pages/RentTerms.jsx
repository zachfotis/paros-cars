import { useContext, useEffect } from 'react';
import LanguageContext from '../context/LanguageContext';
import RentTermsItem from '../components/RentTerms/RentTermsItem';
import { rentTerms } from '../assets/data/texts';
import TermsImage from '../assets/images/terms.jpg';
import PageLayout from '../components/Layout/PageLayout';

function RentTerms() {
  const { language } = useContext(LanguageContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageLayout title={layoutText} image={TermsImage}>
      <div className="w-full max-w-[1280px] px-10 mx-auto flex flex-col justify-start items-start gap-10">
        <RentTermsItem item={rentTerms[language].driver} />
        <RentTermsItem item={rentTerms[language].license} />
        <RentTermsItem item={rentTerms[language].fines} />
        <RentTermsItem item={rentTerms[language].fuel} />
        <RentTermsItem item={rentTerms[language].rentalLength} />
        <RentTermsItem item={rentTerms[language].taxes} />
        <RentTermsItem item={rentTerms[language].insurance} />
        <RentTermsItem item={rentTerms[language].fullInsurance} />
      </div>
    </PageLayout>
  );
}
export default RentTerms;

const layoutText = {
  EN: 'Terms and Conditions',
  GR: 'Όροι και Προϋποθέσεις Ενοικίασης',
};
