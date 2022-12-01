import DateInput from './Inputs/DateInput';
import './Lookup.css';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { MdCarRental } from 'react-icons/md';
import { Button } from '@mui/material';
import { useContext, useState } from 'react';
import { lookupText } from '../assets/data/texts';
import LanguageContext from '../context/LanguageContext';

function Lookup() {
  const { language } = useContext(LanguageContext);
  const [pickupDate, setPickupDate] = useState(new Date());
  const [returnDate, setReturnDate] = useState(new Date());

  const handleClick = () => {
    // TODO: Add logic to handle click
  };

  return (
    <div
      className="lookup absolute z-10 top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center gap-8 p-7
      shadow-lg tablet:w-[90%]
    "
    >
      <div className="flex justify-center items-center gap-1 w-full flex-col">
        <MdCarRental className="text-4xl" />
        <h1 className="text-xl font-[300]">{lookupText[language].title}</h1>
      </div>
      <div className="w-full flex justify-center items-center gap-5 mobile:flex-col mobile:gap-7">
        <DateInput label={lookupText[language].date1} value={pickupDate} setValue={setPickupDate} />
        <FaLongArrowAltRight className="text-2xl mobile:hidden" />
        <DateInput label={lookupText[language].date2} value={returnDate} setValue={setReturnDate} />
      </div>
      <Button variant="contained" color="primary" className="mobile:w-full" onClick={handleClick}>
        {lookupText[language].button}
      </Button>
    </div>
  );
}
export default Lookup;
