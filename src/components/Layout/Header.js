import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const Header = (props) => {
  const inputChangeHandler = (e) => {
    props.onSearch(e.target.value);
  };

  return (
    <header className="header">
      <div className="header__container">
        {/* Navigation */}
        <div className="navigation">
          {/* Checkbox for toggle */}
          <input
            type="checkbox"
            className="navigation__checkbox"
            id="nav-toggle"
          />
          <label htmlFor="nav-toggle" className="navigation__button">
            <span className="navigation__icon">&nbsp;</span>
          </label>
        </div>
        {/* Logo */}
        <div className="header__logo-box">
          <h1>سفارش غذای آنلاین</h1>
        </div>
        {/* Search Form */}
        <form action="#" className="search">
          <button className="search__button">
            <FaSearch className="search__icon" />
          </button>
          <input
            type="text"
            className="search__input"
            placeholder="جستجو"
            onChange={inputChangeHandler}
          />
        </form>
      </div>
    </header>
  );
};

export default Header;
