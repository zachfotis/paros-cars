import { useEffect, useState } from 'react';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import OneIcon from '../../assets/icons/one.png';

function SelectDates() {
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

  const disabledDates = [
    new Date(new Date().setDate(new Date().getDate() + 5)),
    new Date(new Date().setDate(new Date().getDate() + 6)),
    new Date(new Date().setDate(new Date().getDate() + 7)),
    new Date(new Date().setDate(new Date().getDate() + 8)),
    new Date(new Date().setDate(new Date().getDate() + 9)),
  ];

  const handleSelect = (ranges) => {
    setSelectionRange([ranges.selection]);
  };

  return (
    <div className="relative w-fit min-w-[400px] border border-slate-400 p-7 shadow-sm rounded-lg bg-white flex flex-col justify-start items-center gap-7">
      <img
        src={OneIcon}
        alt="one"
        className="w-[25px] absolute top-0 right-1/2 transform translate-x-1/2 -translate-y-1/2 rounded-full bg-white"
      />
      <h1 className="text-xl">Select Dates</h1>
      <DateRangePicker
        ranges={selectionRange}
        onChange={handleSelect}
        disabledDates={disabledDates}
        staticRanges={[]}
        inputRanges={[]}
      />
    </div>
  );
}
export default SelectDates;
