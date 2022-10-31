import './App.css';
// import About from './components/About';
import NavBar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';

//let name = "Shubham"

function App() {
  const [mode, setMode] = useState('light');  // Whether dark mode is enabled or not 
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    })
  }
  const toggleMode = () => {
    console.log("Shubham")
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark Mode has been enabled", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode has been enabled", "success");
    }
  }

  return (
    <>
      <NavBar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm heading="Enter the text to analyze below" mode={mode} />
        {/* <About></About> */}
      </div>
    </>
  );
}

export default App;

