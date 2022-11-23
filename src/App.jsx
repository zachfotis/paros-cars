import useFirebase from './hooks/useFirebase';
import './App.css';
import Loader from './components/Loader';

function App() {
  const { isFirebaseInitialized } = useFirebase();

  return isFirebaseInitialized ? <h1>Paros Cars</h1> : <Loader text="Configuring App..." />;
}

export default App;
