import { BRAND_LOGO } from "../data/Links";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="header-logo">
        <img className="logo-image" alt="header-logo" src={BRAND_LOGO} />
        <div className="header-items">
          <ul>
            <li><h3><Link to="/">Home</Link></h3></li>
            <li><h3><Link to="/AboutUS">About Us</Link></h3></li>
            <li><h3><Link to="ContactUS">Contact Us</Link></h3></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
