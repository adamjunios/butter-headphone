import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <div className="nav">
        <div className="logo">
          <Link to="/">BUTTER HEADPHONE</Link>
        </div>
        <div className="nav__menu">
          <span className="nav__hamburger">&nbsp;</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
