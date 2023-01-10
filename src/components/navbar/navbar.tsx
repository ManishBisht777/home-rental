import logo from "../../images/icons/logo.svg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="home rental logo" />
      <button className="hamburger">ham</button>
      <ul className="nav-links">
        <li>Home</li>
        <li>Landlords</li>
        <li>Tenants</li>
        <li>Contact Us</li>
      </ul>
    </nav>
  );
};

export default Navbar;
