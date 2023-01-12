import { useState } from "react";
import logo from "../../images/icons/logo.svg";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState<boolean>(false);

  return (
    <nav className="navbar">
      <img className="nav-logo" src={logo} alt="home rental logo" />
      <button
        aria-expanded={navOpen}
        onClick={() => setNavOpen(!navOpen)}
        className="hamburger"
      >
        ham
      </button>
      <ul className="nav-links">
        <li>Home</li>
        <li>Landlords</li>
        <li>Tenants</li>
        <li>Contact Us</li>
      </ul>
      <button onClick={() => setNavOpen(!navOpen)} className="close">
        close
      </button>
    </nav>
  );
};

export default Navbar;
