import { BRAND_LOGO } from "../data/Links";

const Header = () => {
  return (
    <div className="header">
      <div className="header-logo">
        <img className="logo-image" alt="header-logo" src={BRAND_LOGO} />
        <div className="header-items">
          <ul>
            <li><h3>Home</h3></li>
            <li><h3>About Us</h3></li>
            <li><h3>Contact Us</h3></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
