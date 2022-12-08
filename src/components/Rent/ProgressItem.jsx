import { TiTick } from 'react-icons/ti';

function ProgressItem({ title, number, completed, active }) {
  return (
    <div className="relative w-full h-[50px] flex justify-center items-center">
      <div
        className={`w-full h-[5px] rounded-sm ${active ? 'bg-orange' : 'bg-blue'} ${
          active && !completed && 'animate-pulse'
        }`}
      ></div>
      <span
        className={`absolute w-[30px] h-[30px] top-[50%] right-[-5px] z-10 transform -translate-y-1/2
       rounded-full ${active ? 'bg-orange' : 'bg-blue'} text-white flex justify-center items-center`}
      >
        {completed ? <TiTick className="text-xl" /> : number}
      </span>
      <h1
        className={`absolute top-[25%] right-[15%] transform -translate-y-1/2 text-sm ${
          active && !completed && 'font-[500]'
        } tablet:hidden`}
      >
        {title}
      </h1>
    </div>
  );
}
export default ProgressItem;
