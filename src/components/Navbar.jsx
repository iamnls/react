import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";
import productContext from '../context/productContext';

const Navbar = (props) => {
  const context = useContext(productContext);
  const { state: { cart } } = context;
  const navigate = useNavigate();

  const handleSignOut = () => {
    try {
      localStorage.removeItem('token');
      navigate('/login');
    } catch (error) {
      console.error("Error during sign out: ", error);
    }
  };

  const isAuthenticated = !!localStorage.getItem('token');

  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">{props.title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact Us</Link>
              </li>
              {!isAuthenticated ? (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/signup">Signup</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">Login</Link>
                  </li>
                </>
              ) : (
                <li className="nav-item">
                  <button className='btn btn-danger nav-link' onClick={handleSignOut}>Sign Out</button>
                </li>
              )}
              <li className="nav-item">
                <Link className="nav-link position-relative" to="/cartitems"><FaShoppingCart />
                  <span className="position-absolute top-5 start-100 translate-middle badge bg-danger">
                    {cart?.length || 0}
                    <span className="visually-hidden">unread messages</span>
                  </span>
                </Link>
              </li>
            </ul>
            <button className='btn btn-success me-2' onClick={props.toggleMode}>{props.text}</button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
