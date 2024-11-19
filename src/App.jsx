import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Alert from './components/Alert'
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";
import Contact from './components/Contact';
import About from './components/About';
import Home from './components/Home';

import Counter from './components/Counter';

import ProductState from './context/ProductState';
import Signup from './components/Signup';
import Login from './components/Login';
import CartItems from './components/CartItems';




function App() {
  // const [color, setColor] = useState("blue")
  const [mode, setMode] = useState('light')
  const [text, setText] = useState('enable dark mode')
  const [alert, setAlert] = useState(null)

  const showAlert = (type, message) => {
    setAlert({
      type: type,
      message: message
    })
    setTimeout(() => {
      setAlert(null)
    }, 1000);

  }



  const toggleMode = () => {
    if (mode == 'light') {
      setMode('dark')
      setText('enable light mode')
      showAlert('success', 'dark mode has been enable')
    }
    else {
      setMode('light')
      setText('enable dark mode')
      showAlert('success', 'light mode has been enable')
    }
  }


  return (
    <>
      <ProductState>
        <Router>
          <Navbar title="logo here" mode={mode} text={text} toggleMode={toggleMode} />
          <Alert alert={alert} showAlert={showAlert} />
          {/* <Counter /> */}
          {/* <Func /> */}
          <Routes>
            <Route path='/' element={<Home showAlert={showAlert} />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/about' element={<About />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cartitems" element={<CartItems />} />
         
          </Routes>
        </Router>
      </ProductState>
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
// In React, components go through a lifecycle that can be divided into three main phases:

// Mounting: This phase is when a component is being inserted into the DOM for the first time.

// constructor(): Initializes the component's state and binds event handlers.
// render(): Returns the JSX that represents the component's UI.
// componentDidMount(): Runs once after the component is mounted in the DOM, often used for API calls or setting up subscriptions.
// Updating: This phase occurs when a component's state or props change, causing it to re-render.

// shouldComponentUpdate(): Controls whether the component should re-render; useful for optimization.
// render(): React re-renders the component with updated data.
// componentDidUpdate(): Runs after re-rendering; commonly used to act on DOM changes or update data.
// Unmounting: This is when a component is removed from the DOM.

// componentWillUnmount(): Called right before the component is destroyed, often used to clean up subscriptions, timers, or any resources.
// Functional Components & Hooks
// In functional components, React hooks like useEffect manage lifecycle events:

// Mount: Code inside useEffect with an empty dependency array [] runs once on mount.
// Update: useEffect runs whenever dependencies change.
// Unmount: Returning a cleanup function in useEffect executes on unmount, cleaning up resources.
// This lifecycle management allows React to efficiently update the UI and handle resource cleanup.

// Explanation
// constructor: Initializes the state.
// componentDidMount: Sets up an interval to update count every second.
// shouldComponentUpdate: Only re-renders if the count is even.
// componentDidUpdate: Logs every update after a re-render.
// componentWillUnmount: Clears the interval on unmount.