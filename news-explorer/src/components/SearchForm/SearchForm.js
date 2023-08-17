import React from "react";
import "./SearchForm.css";

function SearchForm({ handleFetchArticles }) {
  //   const [isButtonClicked, setIsButtonClicked] = useState(false);
  //   const [isQuery, setIsQuery] = useState("");

  //   const buttonClassName = isButtonClicked
  //     ? "header-home__search-wrap__button-clicked"
  //     : "header-home__search-wrap__button";

  //   const handleButtonClick = () => {
  //     setIsButtonClicked(true);
  //     setTimeout(function () {
  //       setIsButtonClicked(false);
  //     }, 100);
  //     handleFetchArticles(`${isQuery.toLowerCase()}`);
  return (
    <div className="searchform">
      <h2 className="searchform__heading">What's going on in the world?</h2>
      <p className="searchform__subheading">
        Find the latest news on any topic and save them in your personal
        account.
      </p>
      <div className="searchform__bar">
        <input className="searchform__input" placeholder="Search..." value="" />
        <button className="seachform__button">Search</button>
      </div>
    </div>
  );
}

export default SearchForm;
