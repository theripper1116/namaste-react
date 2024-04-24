import { BRAND_LOGO } from "../utils/Links";
import { Link } from "react-router-dom";

const Header = () => {
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
          <div className="dropdown">
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
                <a className="dropdown-item" href="#">
                  Delhi
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Moradabad
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Ghaziabad
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Noida
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Gurgaon
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
