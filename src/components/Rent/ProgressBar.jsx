import useRentalContext from '../../context/RentalContext';
import ProgressItem from './ProgressItem';

function ProgressBar({ reference }) {
  const { availableCars, selectedCar } = useRentalContext();

  return (
    <div ref={reference} className="w-full bg-slate-200 flex justify-center items-center py-[30px]">
      <div className="w-full max-w-[1280px] flex justify-center items-center px-5">
        <ProgressItem
          title="Vehicle Selection"
          number={1}
          active={availableCars.length > 0 ? true : false}
          completed={selectedCar ? true : false}
        />
        <ProgressItem title="Extra Features" number={2} active={selectedCar ? true : false} completed={false} />
        <ProgressItem title="Your Information" number={3} />
        <ProgressItem title="Finalize" number={4} />
      </div>
    </div>
  );
}
export default ProgressBar;
