import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="navbar">
      <nav>
        <Link to={"/home"}>Home</Link>
        <Link to={"/ShippingForm"}>Shipping Form</Link>
        <Link to={"/ShippingList"}>Shipping List</Link>
      </nav>
    </div>
  );
}

export default Navbar;
