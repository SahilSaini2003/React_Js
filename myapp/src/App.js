import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import UseState from './components/UseState';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  // let title = (() => {
  //   setInterval(() => {
  //     if (document.title === "Welcome!") {
  //       document.title = "It's me";
  //     }
  //     else {
  //       document.title = "Welcome!";
  //     }
  //   }, 2000);
  // })

  const showAlert = ((message, type) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  })
  const modeChange = (() => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert("Dark Mode Enabled!", "success");
      // title();
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode Enabled!", "success");
      // title();
    }
  })
  return (
    <>
      <Router>
        <Navbar title="Its Mee" you="Home" me="About ME" mode={mode} modeChange={modeChange} />
        <Alert alert={alert} />
        <Routes>
          <Route exact path="/about" element={<About mode={mode} />} />
          <Route exact path="/" element={<UseState showAlert={showAlert} mode={mode} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
