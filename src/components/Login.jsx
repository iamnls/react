import React, { useState } from 'react'; 
import Register from "../assets/images/signup.jpg";
import { Link } from 'react-router-dom'; 

const Login = () => {
    const [credential, setCredential] = useState({
        email: "",
        password: ""
    });

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission

        const { email, password } = credential; // Removed cpassword and name
        const response = await fetch("http://localhost:5000/api/auth/login", { // Assuming this is the login endpoint
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password }) // Sending only email and password
        });

        const json = await response.json(); // Correctly awaiting the JSON response
        setCredential({
            email: "",
            password: ""
        });

        if (json.success) {
            localStorage.setItem('token', json.authToken);
            // Redirect or perform any action after successful login
        }

        console.log("this is user", json);
    };

    const onChange = (e) => {
        setCredential({
            ...credential, [e.target.name]: e.target.value
        });
    };

    return (
        <>
            <div className="container">
                <div className='row'>
                    <div className='col-md-6'>
                        <img src={Register} className="card-img-top" alt="..." />
                    </div>
                    <div className='col-md-6'>
                        <h4>Login to Visit Website</h4> {/* Updated heading */}
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" name='email' value={credential.email} onChange={onChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" name='password' value={credential.password} onChange={onChange} className="form-control" id="exampleInputPassword1" />
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                            <p>Not registered? <Link to="/signup">Sign Up</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;