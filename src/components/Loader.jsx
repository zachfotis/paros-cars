import './Loader.css';

function Loader({ text = 'Loading...' }) {
  return (
    <>
      <span className="loader"></span>
      <p>{text}</p>
    </>
  );
}
export default Loader;
