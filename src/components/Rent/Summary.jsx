import ThreeIcon from '../../assets/icons/three.png';

function Summary() {
  return (
    <div className="relative w-fit min-w-[400px] border border-slate-400 p-7 shadow-sm rounded-lg bg-white flex flex-col justify-start items-center gap-7">
      <img
        src={ThreeIcon}
        alt="one"
        className="w-[25px] absolute top-0 right-1/2 transform translate-x-1/2 -translate-y-1/2 rounded-full bg-white"
      />
      <h1 className="text-xl">Summary</h1>
    </div>
  );
}
export default Summary;
