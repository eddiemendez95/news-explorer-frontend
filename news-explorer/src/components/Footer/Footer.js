import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div> &#x24B8; 2023 Supersite, Powered by News API</div>
      <Link className="header__logo-link" to="/">
        <button className="footer__home-button" type="button">
          Home
        </button>
      </Link>
      <a href="https://github.com/eddiemendez95">
        <img src="../../images/GitHub-Symbol (1).png" alt="GitHub" />
      </a>
    </div>
  );
}

export default Footer;
