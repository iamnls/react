import React, { useState } from 'react';

const Home = () => {
  const [text, setText] = useState("hello world")
  const [alert, setAlert] = useState(null)
  const [color, setColor] = useState("default")



  const showAlert = (message) =>{
    setAlert(message);
    setTimeout(() => setAlert(), 2000)
  }

  const handleUpperCase = () => {
    console.log("Uppercase button clicked")
    setText(text.toUpperCase())
    setAlert("text in uppercase")

  };
  const handleLowerCase = () => {
    console.log("lower")
    setText(text.toLowerCase())
    setAlert("text in lowercase")
  }
  const clearTextArea = () => {
    setText('')
    setAlert("text clear")

  }
  const copyTextArea = () => {
    navigator.clipboard.writeText(text)
    showAlert("text copied")
  };


  const handleChange = (e) => {
    e.preventDefault();
    setText(e.target.value)
  };

  const handleChangeColor =(e)=>{
    setColor(e.target.valued)
  }

  return (
    <div>
      <div className="mb-3 container">
      {alert && <div className="alert alert-success" role="alert">{alert}</div>}
        <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
        <textarea className="form-control" value={text} onChange={handleChange} placeholder={text}
          id="exampleFormControlTextarea1"rows="3"></textarea>
        <button className='btn btn-primary mt-3 mx-2' onClick={handleUpperCase}>Uppercase</button>
        <button className='btn btn-primary mt-3 mx-2' onClick={handleLowerCase}>Lowercase</button>
        <button className='btn btn-primary mt-3 mx-2' onClick={clearTextArea}>clear</button>
        <button className='btn btn-primary mt-3 mx-2' onClick={copyTextArea}>copy</button>
      </div>
      
      <div className="container">
        <h4>Analyze your text</h4>
        <p>{text.split(' ').filter(word => word !== "").length} words and {text.length} characters</p>
        <p>{0.008 * text.split('').length} average time to read</p>
        <h4>preview text</h4>
      <p>{text.length>0?text:"no preview to display"}</p>
     
      </div>
      
    </div>
  );
};

export default Home
