import ProgressItem from './ProgressItem';

function ProgressBar() {
  return (
    <div className="w-full bg-slate-200 flex justify-center items-center py-[30px]">
      <div className="w-full max-w-[1280px] flex justify-center items-center px-5">
        <ProgressItem title="Vehicle Selection" number={1} active={true} completed={true} />
        <ProgressItem title="Extra Features" number={2} active={true} completed={false} />
        <ProgressItem title="Your Information" number={3} />
        <ProgressItem title="Finalize" number={4} />
      </div>
    </div>
  );
}
export default ProgressBar;
