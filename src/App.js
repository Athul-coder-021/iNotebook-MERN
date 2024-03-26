import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './componets/Navbar';
import Home from './componets/Home';
import About from './componets/About';
import NoteState from './context/notes/NoteState';
import Alert from './componets/Alert';
import Login from './componets/Login';
import Signup from './componets/Signup';
import { useState } from 'react';
function App() {
  const[alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
        setAlert(null)
    }, 1250);
  }
  return (
    <>
    <NoteState>
    <Router>
    <Navbar/>
    <Alert alert={alert}/>
    <div className="container">
    <Routes>
        <Route path="/" element={<Home showAlert={showAlert}/>} />
        <Route path="/about" element={<About showAlert={showAlert} />} />
        <Route path="/login" element={<Login showAlert={showAlert}/>} />
        <Route path="/signup" element={<Signup showAlert={showAlert}/>} />
      </Routes>
    </div>
    </Router>
    </NoteState>
    </>
  );
}

export default App;
