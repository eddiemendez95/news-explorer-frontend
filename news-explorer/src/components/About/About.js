import React from "react";
import "./About.css";
import authorPic from "../../images/thumbnail.png";

function About() {
  return (
    <div className="about">
      <img
        className="about__picture"
        src={authorPic}
        alt="Picture of Eddie Mendez"
      />
      <div className="about__content">
        <p className="about__title">About the author</p>
        <p className="about__description">
          My name is Eddie Mendez. I am an enthusiastic and driven Full Stack
          Engineer actively pursuing new opportunities, coming from extensive
          mortgage background brings experience in problem-solving abilities and
          attention to detail. <br></br> <br></br>I am confident with HTML, CSS,
          JavaScript, Git, Figma, React.js, Rest API, Node.js, Express.js,
          MongoDB, and Google Cloud. (LinkedIn provided in the footer)
        </p>
      </div>
    </div>
  );
}

export default About;
