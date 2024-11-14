import React, { useEffect, useState } from 'react'


// const [count, setCount]=useState(0)


//   useEffect(()=>{
//       const interval = setInterval(() => {
//           setCount((c)=>c+1)
//       }, 1000);
//       return ()=>{
//         clearInterval(interval)
//       }

//   },[])

// return (
//   <div>
//       <h2>collect:{count}</h2>
//   </div>
// // )

const Func=()=> {
const [count, setCount] = useState(0)
const [message, setMessage] = useState(null)
const [notification, setNotification] = useState([])


console.log("this is official className //rendered");

useEffect(() => {
  console.log("component mounted");
  return () => {
    console.log("component will unmount");

  }
}, [count])

useEffect(() => {
  console.log("count updated", count, message, notification);
}, [count, message, notification])

const increment = () => {
  setCount(count + 1)
}

return (
  <div className="container ">
    <p>Count: {count}</p>
    <button className='btn btn-primary' onClick={increment}>Increment</button>
  </div>
)
}

export default Func