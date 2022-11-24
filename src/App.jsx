import useFirebase from './hooks/useFirebase';
import './App.css';
import Loader from './components/Loader';
import Navbar from './components/Navbar';

function App() {
  // TODO: move this to a context
  const { isFirebaseInitialized } = useFirebase();

  return isFirebaseInitialized ? <Navbar /> : <Loader text="Configuring App..." />;
}

export default App;
