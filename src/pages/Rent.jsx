import { FaLongArrowAltRight } from 'react-icons/fa';
import HeroImage from '../assets/images/hero.webp';
import ProgressBar from '../components/Rent/ProgressBar';
import SelectCar from '../components/Rent/SelectCar';
import SelectDates from '../components/Rent/SelectDates';
import Summary from '../components/Rent/Summary';

function Rent() {
  return (
    <div className="min-h-screen flex flex-col justify-start items-center">
      <div className="relative w-full h-[80vh]">
        <img src={HeroImage} alt="hero" className="h-full w-full object-cover shadow-lg" />
        <SelectDates />
      </div>
      <ProgressBar />
    </div>
  );
}
export default Rent;

{
  /* <div className="flex justify-center items-stretch gap-10">
<SelectDates />
<div className="flex justify-center items-center">
  <FaLongArrowAltRight className="text-2xl tablet:hidden" />
</div>
<SelectCar />
<div className="flex justify-center items-center">
  <FaLongArrowAltRight className="text-2xl tablet:hidden" />
</div>
<Summary />
</div> */
}
