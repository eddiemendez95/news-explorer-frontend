import React from "react";
import { Link } from "react-router-dom";
import "../Header/Header.css";

const Navigation = ({
  handleRegistration,
  handleLogin,
  isLoggedIn,
  handleLogout,
}) => {
  //   const currentUserName = currentUser.name;
  return (
    <div className="header__info">
      {isLoggedIn ? (
        <>
          <Link className="header__logo-link" to="/">
            <button className="header__home-button" type="button">
              Home
            </button>
          </Link>
          <Link className="header__saved-articles-link" to="/profile">
            <div className="header__saved-articles">Saved articles</div>
          </Link>
          <button
            type="button"
            className="header__login-button"
            onClick={handleLogout}
          >
            {/* {currentUserName} */}
          </button>
        </>
      ) : (
        <>
          <Link className="header__logo-link" to="/">
            <button className="header__home-button" type="button">
              Home
            </button>
          </Link>
          <button
            type="button"
            className="header__login-button"
            onClick={handleLogin}
          >
            Sign In
          </button>
        </>
      )}
    </div>
  );
};

export default Navigation;
