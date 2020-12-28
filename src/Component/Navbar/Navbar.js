import React, { Component } from "react";
import "./Navbar.scss";
import logo from "../../img/logo.png";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <img src={logo} alt="city tours" />
        <ul className="navlinks">
          <li>
            <a href="/" className="navlink">
              Home
            </a>
          </li>
          <li>
            <a href="/" className="navlink">
              About
            </a>
          </li>
          <li>
            <a href="/" className="navlink active">
              Tours
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
