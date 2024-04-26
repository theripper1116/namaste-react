import { useState } from "react";
import { Link } from "react-router-dom";

import { BRAND_LOGO } from "../utils/Links";
import useRestaurentGeographicData from "../utils/useRestaurentGeographicData";

export const getGeographicalDetails = () => {
  const enteredCity = document.getElementById("floatingTextarea").value;
  const getGeographicData = useRestaurentGeographicData(toString(enteredCity));
  return getGeographicData;
};

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
          <div className="form-floating">
            <textarea
              className="form-control"
              placeholder="Leave a comment here"
              id="floatingTextarea"
            ></textarea>
            <label htmlFor="floatingTextarea" style={{ marginLeft: "5px" }}>
              Enter City Name
            </label>
          </div>
          <button className="btn" onClick={getGeographicalDetails}>
            Search!!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
