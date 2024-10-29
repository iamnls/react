import React, { useState } from 'react';

const Home = () => {
  const [text, setText] = useState("hello world");
  const [alert, setAlert] = useState(null);
  const [color, setColor] = useState("#000000"); 
  const showAlert = (message) => {
    setAlert(message);
    setTimeout(() => setAlert(null), 2000); 
  };

  const handleUpperCase = () => {
    setText(text.toUpperCase());
    showAlert("Converted to uppercase");
  };

  const handleLowerCase = () => {
    setText(text.toLowerCase());
    showAlert("Converted to lowercase");
  };

  const clearTextArea = () => {
    setText('');
    showAlert("Text cleared");
  };

  const copyTextArea = () => {
    navigator.clipboard.writeText(text);
    showAlert("Text copied to clipboard");
  };

  const handleChange = (e) => {
    e.preventDefault();
    setText(e.target.value);
  };

  const handleColorChange = (e) => {
    setColor(e.target.value);
    showAlert("Text color changed");
  };

  return (
    <div>
      <div className="mb-3 container">
        {alert && <div className="alert alert-success" role="alert">{alert}</div>}
        <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
        <textarea
          className="form-control"
          value={text}
          onChange={handleChange}
          placeholder="Enter your text here"
          id="exampleFormControlTextarea1"
          rows="3">
        </textarea>
        <button className='btn btn-primary mt-3 mx-2' onClick={handleUpperCase}>Uppercase</button>
        <button className='btn btn-primary mt-3 mx-2' onClick={handleLowerCase}>Lowercase</button>
        <button className='btn btn-primary mt-3 mx-2' onClick={clearTextArea}>Clear</button>
        <button className='btn btn-primary mt-3 mx-2' onClick={copyTextArea}>Copy</button>
        
        <div className="mt-3">
          <label htmlFor="colorPicker" className="form-label">Choose Text Color:</label>
          <input 
            type="color" 
            id="colorPicker" 
            value={color} 
            onChange={handleColorChange} 
            className="form-control form-control-color"
          />
        </div>
      </div>
      
      <div className="container" style={{ color: color }}>
        <h4>Analyze your text</h4>
        <p>{text.split(' ').filter(word => word !== "").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(' ').filter(word => word !== "").length} minutes to read</p>
        <h4>Preview text</h4>
        <p>{text.length > 0 ? text : "No preview to display"}</p>
      </div>
    </div>
  );
};

export default Home;
