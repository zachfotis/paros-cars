import './Loader.css';

function Loader({ text = 'Loading...', isFluid = false }) {
  const classNames = isFluid
    ? 'w-full h-full flex flex-col justify-center items-center gap-5'
    : 'w-full h-screen flex flex-col justify-center items-center gap-5';

  return (
    <div className={classNames}>
      <span className="loader"></span>
      <p>{text}</p>
    </div>
  );
}
export default Loader;
