import { FirebaseProvider } from './context/FirebaseContext';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Home from './pages/Home';
import Admin from './pages/Admin';
import Navbar from './components/Navbar';
import Rent from './pages/Rent';

function App() {
  return (
    <FirebaseProvider>
      <LanguageProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rent" element={<Rent />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </Router>
        <ToastContainer autoClose={2000} closeOnClick />
      </LanguageProvider>
    </FirebaseProvider>
  );
}

export default App;
