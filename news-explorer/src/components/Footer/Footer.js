import React from "react";
import "./Footer.css";
import githubIcon from "../../images/GitHub-Symbol.svg";

function Footer() {
  return (
    <footer className="footer">
      <h2 className="footer__copywright">
        {" "}
        &#x24B8; 2023 Supersite, Powered by News API
      </h2>
      <div className="footer__links">
        <a className="footer__home" href="#home">
          Home
        </a>
        <a
          className="footer__practicum"
          href="https://tripleten.com/"
          target="_blank"
          rel="noreferrer"
        >
          Practicum
        </a>
        <a
          href="https://github.com/eddiemendez95"
          target="_blank"
          rel="noreferrer"
        >
          <img className="footer__git " src={githubIcon} alt="GitHub Icon" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
