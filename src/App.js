import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './componets/Navbar';
import Home from './componets/Home';
import About from './componets/About';
import NoteState from './context/notes/NoteState';
function App() {
  return (
    <>
    <NoteState>
    <Router>
    <Navbar/>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
    </NoteState>
    </>
  );
}

export default App;
