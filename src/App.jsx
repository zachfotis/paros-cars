import { FirebaseProvider } from './context/FirebaseContext';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Admin from './pages/Admin';
import Navbar from './components/Navbar';
import { LanguageProvider } from './context/LanguageContext';

function App() {
  return (
    <FirebaseProvider>
      <LanguageProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </Router>
      </LanguageProvider>
    </FirebaseProvider>
  );
}

export default App;
