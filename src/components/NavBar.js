import React from "react";
import { useAuth0 } from "../react-auth0-spa";
import { Link } from "react-router-dom";

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (

    <div>
      {!isAuthenticated && (
        <button onClick={() => loginWithRedirect({})}>Log in</button>
      )}

      {isAuthenticated && (
          <span>
          <Link to="/">Home</Link>
          <Link to="/profile">Profile</Link>
          <button onClick={() => logout()}>Log out</button>
          </span>
      )}
    </div>
  );
};

export default NavBar;