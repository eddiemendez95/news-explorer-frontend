import React from "react";
import Navigation from "../Navigation/Navigation";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header__info-container">
        <h1 className="header__title">NewsExplorer</h1>
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
