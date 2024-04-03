const Header = () => {
  return (
    <div className="header">
      <div className="header-logo">
        <img
          className="logo-image"
          alt="header-logo"
          src="https://img.freepik.com/free-vector/detailed-chef-logo-template_23-2148986823.jpg?w=826&t=st=1712044432~exp=1712045032~hmac=3dd8d4f42ba112e654a001b463b62c40326b58b419d512574c87f3391b825917logo.jpg"
        />
        <div className="header-items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;