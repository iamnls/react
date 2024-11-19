import React  from 'react';
import Banner from './Banner';
import About from './About';


// import Alert from './Alert'

const Home = () => {
  // const [text, setText] = useState("hello world")
  // const [alert, setAlert] = useState(null) 

  // const handleUpperCase = () => {
  //   console.log("Uppercase button clicked")
  //   setText(text.toUpperCase())
  //   setAlert("text in uppercase")

  // };
  // const handleLowerCase = () => {
  //   console.log("lower")
  //   setText(text.toLowerCase())
  //   setAlert("text in lowercase")
  // }
  // const clearTextArea = () => {
  //   setText('')
  //   setAlert("text clear")

  // }
  // const copyTextArea = () => {
  //   navigator.clipboard.writeText(text)
  //   showAlert("text copied")
  // };


  // const handleChange = (e) => {
  //   e.preventDefault();
  //   setText(e.target.value)
  // };

  // const handleColorChange = (event) => {
  //   setSelectedColor(e.target.value)
  // };

 

  return (
            
    <div>
      {/* <div className="mb-3 container">
      {alert && <div className="alert alert-success" role="alert">{alert}</div>}
        <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
        <textarea className="form-control" value={text} onChange={handleChange} placeholder={text}
          id="exampleFormControlTextarea1"rows="3"></textarea>
        <button className='btn btn-primary mt-3 mx-2' onClick={handleUpperCase}>Uppercase</button>
        <button className='btn btn-primary mt-3 mx-2' onClick={handleLowerCase}>Lowercase</button>
        <button className='btn btn-primary mt-3 mx-2' onClick={clearTextArea}>clear</button>
        <button className='btn btn-primary mt-3 mx-2' onClick={copyTextArea}>copy</button>
        <button className='btn btn-primary mt-3 mx-2' onClick={copyTextArea}>Download</button>
       
      </div>
     
      
      <div className="container">
        <h4>Analyze your text</h4>
        <p>{text.split(' ').filter(word => word !== "").length} words and {text.length} characters</p>
        <p>{0.008 * text.split('').length} average time to read</p>
        <h4>preview text</h4>
      <p>{text.length>0?text:"no preview to display"}</p>
     
      </div> */}
      <Banner />
      <About />
      </div>
  );
};

export default Home
