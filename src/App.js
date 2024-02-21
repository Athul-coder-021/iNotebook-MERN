import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './componets/Navbar';
import Home from './componets/Home';
import About from './componets/About';
function App() {
  return (
    <>
    <Router>
    <Navbar/>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
