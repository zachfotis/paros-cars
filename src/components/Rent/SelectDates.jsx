import { Button } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { BsCalendar2Date } from 'react-icons/bs';
import { selectDates } from '../../assets/data/texts';
import FirebaseContext from '../../context/FirebaseContext';
import LanguageContext from '../../context/LanguageContext';

function SelectDates() {
  const { language } = useContext(LanguageContext);
  const { user } = useContext(FirebaseContext);
  const [selectionRange, setSelectionRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);

  useEffect(() => {
    const deleteNode = (className) => {
      const node = document.querySelector(`.${className}`);
      if (node) {
        node.parentNode.removeChild(node);
      }
    };

    deleteNode('rdrDefinedRangesWrapper');
  }, []);

  const handleSelect = (ranges) => {
    setSelectionRange([ranges.selection]);
  };

  const handleClick = () => {};

  return (
    <div
      className="absolute top-[55%] right-[50%] transform translate-x-1/2 -translate-y-1/2 
      border border-slate-400 p-7 shadow-sm rounded-lg bg-white flex flex-col justify-start
      items-center gap-7 max-w-full overflow-auto mobile:px-3"
    >
      <div className="flex justify-center items-center gap-2">
        <BsCalendar2Date className="text-2xl" />
        <h1 className="text-xl">{selectDates[language].title}</h1>
      </div>
      <DateRangePicker ranges={selectionRange} onChange={handleSelect} staticRanges={[]} inputRanges={[]} />
      <Button variant="contained" color="primary" className="w-full" onClick={handleClick} disabled={!user}>
        {selectDates[language].button}
      </Button>
    </div>
  );
}
export default SelectDates;
