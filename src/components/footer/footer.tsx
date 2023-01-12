import logo from "../../images/icons/logo.svg";
import icon from "../../images/icons/house.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="foot">
        <img src={logo} alt="" />
        <div className="contact">
          <address>
            345 Faulconer Drive, Suite 4 • Charlottesville, CA, 12345
          </address>
          <div className="ph-no">
            <a href="tel:+91">1234567899</a>
            <a href="tel:+91">1234567899</a>
          </div>
          <div className="socials">
            <p>Social Media</p>

            <div className="icons">
              <img src={icon} alt="" />
              <img src={icon} alt="" />
              <img src={icon} alt="" />
              <img src={icon} alt="" />
              <img src={icon} alt="" />
              <img src={icon} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="foot-links">
        <ul>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Help</li>
          <li>Privacy Policy</li>
          <li>Disclaimer</li>
        </ul>
        <p>Copyright © 2020 Minimumlivingcost. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
