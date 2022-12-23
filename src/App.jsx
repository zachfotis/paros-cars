import { FirebaseProvider } from './context/FirebaseContext';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Home from './pages/Home';
import Admin from './pages/Admin';
import Navbar from './components/Layout/Navbar';
import Rent from './pages/Rent';
import Footer from './components/Layout/Footer';
import RentTerms from './pages/RentTerms';
import ContactUs from './pages/ContactUs';
import Cars from './pages/Cars';
import Cookies from './components/Layout/Cookies';

function App() {
  return (
    <FirebaseProvider>
      <LanguageProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cars" element={<Cars />} />
            <Route path="/terms" element={<RentTerms />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/reservation" element={<Rent />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
          <Footer />
          <Cookies />
        </Router>
        <ToastContainer autoClose={2000} closeOnClick />
      </LanguageProvider>
    </FirebaseProvider>
  );
}

export default App;
