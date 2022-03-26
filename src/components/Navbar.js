import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="brand">Abj Boot Camp</div>
      <div className="nav__items">
        <Link to="/">Home</Link>
        <Link to="/register">Get Started</Link>
      </div>
    </nav>
  );
};

export default Navbar;
