import { Facebook, Instagram } from "@material-ui/icons";
import React from "react";
import "./components.styles.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer__details">
        <h3>Abj Bootcamp</h3>
        <div className="footer__links">
          <a href="https://www.facebook.com/abjbootcamp/">
            <Facebook />
          </a>
          <a href="https://www.instagram.com/abjbootcamp/">
            <Instagram />
          </a>
        </div>
      </div>
      <div className="footer__credit">
        <span>&copy; copyright 2022 Abj BootCamp</span>
        <span>- Developed by Abj BootCamp</span>
      </div>
    </footer>
  );
};

export default Footer;
