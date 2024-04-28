import { useState } from "react";
import { Link } from "react-router-dom";

import CitySearch from "./CitySearch";
import { BRAND_LOGO } from "../utils/Links";

const Header = () => {
  // let debounce = () => {
  //   let timer;
  //   clearTimeout(timer);
  //   timer = setTimeout(() => {
  //     console.log("hi");
  //   }, 800);
  // };
  return (
    <div className="header">
      <div className="header-logo">
        <img className="logo-image" alt="header-logo" src={BRAND_LOGO} />
        <div className="header-items">
          <button className="btn">
            <Link className="text-decoration-none" to="/">
              Home
            </Link>
          </button>
          <button className="btn">
            <Link className="text-decoration-none" to="/AboutUS">
              About Us
            </Link>
          </button>
          <button className="btn">
            <Link className="text-decoration-none" to="ContactUS">
              Contact Us
            </Link>
          </button>
          <CitySearch />
        </div>
      </div>
    </div>
  );
};

export default Header;
