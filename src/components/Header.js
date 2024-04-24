import { useEffect, useState } from "react";

import { BRAND_LOGO } from "../utils/Links";
import { Link } from "react-router-dom";
import {SWIGGY_API_URL} from "../utils/Links"
import { LocationDelhi } from "../utils/Location";

const Header = () => {

  const [urlData, setURLData] = useState("");

  useEffect(()=>{
    setURLData(SWIGGY_API_URL);
  }, []);

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
          {/* <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Choose Location!!
            </button>
            <ul className="dropdown-menu">
              <li>
                <button className="dropdown-item" onClick={()=>{
                  const firstIndex = urlData.indexOf("lat");
                  const secondIndex = urlData.indexOf("is-seo");
                  const latLongitude = urlData.substring(firstIndex, secondIndex - 1);
                  const tempArrayForLatLong = latLongitude.split("&");
                  tempArrayForLatLong.map((data)=>{
                    if(data[1] === "a")
                    data = "lat=" + LocationDelhi.latitude;
                    else data = "lng=" + LocationDelhi.longitude;
                  });
                  setURLData();
                }}>
                  Delhi
                </button>
              </li>
              <li>
                <button className="dropdown-item">
                  Moradabad
                </button>
              </li>
              <li>
                <button className="dropdown-item">
                  Ghaziabad
                </button>
              </li>
              <li>
                <button className="dropdown-item">
                  Noida
                </button>
              </li>
              <li>
                <button className="dropdown-item">
                  Gurgaon
                </button>
              </li>
            </ul>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
