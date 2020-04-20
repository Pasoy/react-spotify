import React from "react";
import { NavLink } from "react-router-dom";

import { ReactComponent as HomeIcon } from "../assets/svg/home.svg";
import { ReactComponent as SearchIcon } from "../assets/svg/search.svg";
import { ReactComponent as LibraryIcon } from "../assets/svg/library.svg";
import { ReactComponent as Logo } from "../assets/svg/logo.svg";

const Nav = () => {
  return (
    <div className="NavBar">
      <div className="logo">
        <Logo />
      </div>
      <div className="navoptions">
        <NavLink to="/" exact activeClassName="active">
          <HomeIcon />
          Home
        </NavLink>
        <NavLink to="/search" activeClassName="active">
          <SearchIcon />
          Search
        </NavLink>
        <NavLink to="/library" activeClassName="active">
          <LibraryIcon />
          Your Library
        </NavLink>
      </div>
      <div className="cookies">
        <span>Cookies</span>
        <span>Privacy Policy</span>
      </div>
    </div>
  );
};

export default Nav;
