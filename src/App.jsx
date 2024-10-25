import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  //const [color, setColor] = useState("blue")
  const [mode, setMode] = useState('light')
  const [text, setText] = useState('enable dark mode')
  const [alert, setAlet] = useState(null)

  const showAlert =(types, message)=>{
    setAlert({
      type: type,
      message: message
    })
  }


    const toggleMode=()=>{
  if (mode=='light'){
    setMode('dark')
    setText('enable light mode')
    showAlert('sucess', 'dark mode has been enable')
  }
  else{
    setMode('light')
    setText('enable dark mode')
    showAlert('sucess', 'light mode has been enable')
  }
  }

  return (
    <>
      <Navbar title="this is header" mode={mode} text={text} toggleMode={toggleMode}/>

      <h1>Vite + React</h1>
      {/*<div className="card">
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
