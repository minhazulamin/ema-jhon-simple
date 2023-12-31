import React from "react";
import "./Header.css";
// import logo from '../../images'
import logo from "../../images/Logo.svg";

const Header = () => {
  return (
    <nav className="header">
      <img src={logo} />
      <div>
        <a href="/shop">shop</a>
        <a href="/order">Orders</a>
        <a href="/inventory">inventory</a>
        <a href="4">login</a>
      </div>
    </nav>
  );
};

export default Header;
