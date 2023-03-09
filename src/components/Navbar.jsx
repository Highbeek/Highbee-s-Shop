import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import { SiEngadget } from "react-icons/si";
import "./Navbar.css";


const Navbar = () => {
  return (
    <div className="navbar">
      <div>
        <h1 onClick={() => navigate("/")}>
          {<SiEngadget />} HighBee's Gadget's Store
        </h1>
      </div>

      <div className="links">
        <Link to="/">Shop</Link>
        <Link to="/cart">
          <ShoppingCart size={32} />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
