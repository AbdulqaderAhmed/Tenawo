import React from "react";
import { Link } from "react-router-dom";

export default function Header2() {
  return (
    <>
      <nav className="blue">
        <div className="nav-wrapper container">
          <Link to="/" className="brand-logo">
            Tenawo
          </Link>
          <a href="#" data-target="mobile-demo" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>

          <ul className="right hide-on-med-and-down">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/service">Services</Link>
            </li>
            <li>
              <Link to="/about">Blogs</Link>
            </li>
            <li>
              <Link to="/about">Out Team</Link>
            </li>
            <li>
              <Link to="/about">Contact Us</Link>
            </li>
          </ul>
        </div>
      </nav>

      <ul className="sidenav" id="mobile-demo">
        <div className="nav-image"></div>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/service">Services</Link>
        </li>
        <li>
          <Link to="/about">Blogs</Link>
        </li>
        <li>
          <Link to="/about">Out Team</Link>
        </li>
        <li>
          <Link to="/about">Contact Us</Link>
        </li>
      </ul>
    </>
  );
}
