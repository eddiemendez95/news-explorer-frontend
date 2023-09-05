import React from "react";
import "./SearchForm.css";

function SearchForm() {
  return (
    <section className="search">
      <h2 className="search__heading">What's going on in the world?</h2>
      <p className="search__subheading">
        Find the latest news on any topic and save them in your personal
        account.
      </p>
      <form className="search__form">
        <fieldset className="search__form-fieldset">
          <div className="search__form-container">
            <input
              className="search__form-input"
              placeholder="Search..."
              type="text"
            />
          </div>
          <button className="search__form-button">Search</button>
        </fieldset>
      </form>
    </section>
  );
}

export default SearchForm;
