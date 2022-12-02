import { FaLongArrowAltRight } from 'react-icons/fa';
import SelectCar from '../components/Rent/SelectCar';
import SelectDates from '../components/Rent/SelectDates';
import Summary from '../components/Rent/Summary';

function Rent() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="flex justify-center items-stretch gap-10">
        <SelectDates />
        <div className="flex justify-center items-center">
          <FaLongArrowAltRight className="text-2xl tablet:hidden" />
        </div>
        <SelectCar />
        <div className="flex justify-center items-center">
          <FaLongArrowAltRight className="text-2xl tablet:hidden" />
        </div>
        <Summary />
      </div>
    </div>
  );
}
export default Rent;
