import React from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation after sign out

const SignOut = ({ onSignOut }) => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    // Call the passed onSignOut function for custom sign-out logic
    onSignOut();

    // Redirect the user to the login page
    navigate('/login');
  };

  return (
    <button onClick={handleSignOut} className="signout-button">
      Sign Out
    </button>
  );
};

export default SignOut;
