import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
const Navbar = () => {
  return (
    <div class="navbar">
      <div class="container">
        <div class="logo">
          <h2 class="logo-text">Ultra Profile</h2>
        </div>
        <ul class="ul-list">
          <li class="list-item">
            <Link exact to="/">
              Home
            </Link>
          </li>
          <li class="list-item">
            <a href="#">Work</a>
          </li>
          <li class="list-item">
            <a href="#">Portfolio</a>
          </li>
          <li class="list-item">
            <a href="#">Resume</a>
          </li>
          <li class="list-item">
            <a href="#">About</a>
          </li>
          <li class="list-item">
            <Link exact to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
