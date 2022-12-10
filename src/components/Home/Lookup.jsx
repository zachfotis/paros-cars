import DateInput from '../Inputs/DateInput';
import './Lookup.css';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { MdCarRental } from 'react-icons/md';
import { Button } from '@mui/material';
import { useContext, useState } from 'react';
import { lookupText } from '../../assets/data/texts';
import LanguageContext from '../../context/LanguageContext';
import FirebaseContext from '../../context/FirebaseContext';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

function Lookup() {
  const { language } = useContext(LanguageContext);
  const { user } = useContext(FirebaseContext);
  const [pickupDate, setPickupDate] = useState(new Date());
  const [returnDate, setReturnDate] = useState(new Date());

  const navigate = useNavigate();

  const handleClick = () => {
    const state = {
      initialDates: {
        startDate: pickupDate,
        endDate: returnDate,
      },
    };

    navigate('/reservation', { state });
  };

  return (
    <motion.div
      initial={{ opacity: 0, bottom: '200px' }}
      animate={{ opacity: 1, bottom: '0px' }}
      transition={{ duration: 0.5 }}
      className="lookup absolute z-10 bottom-[0px] left-[50%] transform -translate-x-1/2 translate-y-1/2 flex flex-col justify-center items-center gap-8 p-7
      shadow-lg tablet:w-[90%]
    "
    >
      <div className="flex justify-center items-center gap-1 w-full flex-col">
        <MdCarRental className="text-4xl" />
        <h1 className="text-xl font-[300]">{lookupText[language].title}</h1>
      </div>
      <div className="w-full flex justify-center items-center gap-5 tablet:flex-col tablet:gap-7">
        <DateInput label={lookupText[language].date1} value={pickupDate} setValue={setPickupDate} />
        <FaLongArrowAltRight className="text-2xl tablet:hidden" />
        <DateInput label={lookupText[language].date2} value={returnDate} setValue={setReturnDate} />
      </div>
      <Button variant="contained" color="primary" className="tablet:w-full" onClick={handleClick} disabled={!user}>
        {lookupText[language].button}
      </Button>
    </motion.div>
  );
}
export default Lookup;
