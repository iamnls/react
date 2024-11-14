import React, { useState } from "react"; // Import useState
import Register from "../assets/images/signup.jpg";
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
    const [credential, setCredential] = useState({
        name: "",
        email: "",
        password: "",
        cpassword: ""
    });

    const navigate = useNavigate(); // Initialize useNavigate

    const handleSubmit = async (e) => {
        e.preventDefault(); 
        const { name, email, password, cpassword } = credential;
        const response = await fetch("http://localhost:5000/api/auth/createuser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, password, cpassword })
        });

        const json = await response.json(); // Await the JSON response

        setCredential({
            name: "",
            email: "",
            password: "",
            cpassword: ""
        });

        if (json.success) {
            localStorage.setItem('token', json.authToken);
            navigate('/');
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
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6'>
                        <img src={Register} className="card-img-top" alt="..." />
                    </div>
                    <div className='col-md-6'>
                        <h4>Sign Up to Visit Website</h4>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input type="text" name='name' value={credential.name} onChange={onChange} className="form-control" id="name" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email address</label>
                                <input type="email" name='email' value={credential.email} onChange={onChange} className="form-control" id="email" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input type="password" name='password' value={credential.password} onChange={onChange} className="form-control" id="password" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                                <input type="password" name='cpassword' value={credential.cpassword} onChange={onChange} className="form-control" id="cpassword" />
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Signup;