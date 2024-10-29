import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Alert from './components/Alert'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  } from "react-router-dom"
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import Email from './components/Email'

function App() {
  //const [color, setColor] = useState("blue")
  const [mode, setMode] = useState('light')
  const [text, setText] = useState('enable dark mode')
  const [alert, setAlert] = useState(null)

  const showAlert =(type, message)=>{
    setAlert({
      type: type,
      message: message
    })
    setTimeout(() => {
      setAlert(null)
      
    }, 1000);
  }


    const toggleMode=()=>{
  if (mode=='light'){
    setMode('dark')
    setText('enable light mode')
    showAlert('success', 'dark mode has been enable')
  }
  else{
    setMode('light')
    setText('enable dark mode')
    showAlert('success', 'light mode has been enable')
  }
  }

  return (
    <>
    <Router>
      <Navbar title="this is header" mode={mode} text={text} toggleMode={toggleMode} />
       <Alert alert={alert} showAlert={showAlert} />
        
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about'element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route Path='/email' element={<Email />} />
      </Routes>       
    </Router>

      {/*<h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setColor("red")}>
          please click this page  {color}
        </button>

      </div>*/}

      </>
  )
}

export default App

// import React, { useState } from 'react'
// import './App.css'
// import Navbar from './components/Navbar'

// function App() {
//   const [color, setColor] = useState('blue')

//   const handleSetColor = (newColor) => {
//     setColor(newColor)
//   }


  
//   return (
//     <div>
//       <Navbar setColor={handleSetColor} />
//       <p style={{ color: color }}>This text changes color!</p>
//     </div>
//   )
// }

// export default App
