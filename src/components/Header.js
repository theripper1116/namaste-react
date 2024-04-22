import { BRAND_LOGO } from "../utils/Links";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="header-logo">
        <img className="logo-image" alt="header-logo" src={BRAND_LOGO} />
        <div className="header-items">
          <button className="btn btn-outline-light">
            <Link className="text-decoration-none" to="/">
              Home
            </Link>
          </button>
          <button className="btn btn-outline-light">
            <Link className="text-decoration-none" to="/AboutUS">
              About Us
            </Link>
          </button>
          <button className="btn btn-outline-light">
            <Link className="text-decoration-none" to="ContactUS">
              Contact Us
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
