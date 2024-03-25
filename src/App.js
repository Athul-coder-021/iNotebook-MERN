import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './componets/Navbar';
import Home from './componets/Home';
import About from './componets/About';
import NoteState from './context/notes/NoteState';
import Alert from './componets/Alert';
import Login from './componets/Login';
import Signup from './componets/Signup';
function App() {
  return (
    <>
    <NoteState>
    <Router>
    <Navbar/>
    {/* <Alert/> */}
    <div className="container">
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
      </Routes>
    </div>
    </Router>
    </NoteState>
    </>
  );
}

export default App;
