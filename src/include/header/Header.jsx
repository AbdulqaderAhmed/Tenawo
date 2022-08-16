import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div className="banner-img">
        <nav className="transparent">
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
        <div className="header-title">
          <h3>የጤንነትዎ ዋስትና በጤናዎ !!</h3>
          <div className="header-btn">
            <Link
              to="/products"
              className="btn btn-large waves-effect waves-light blue bttn"
            >
              <i className="material-icons right">login</i>Login
            </Link>
            <Link
              to="/products"
              className="btn btn-large waves-effect waves-light red bttn"
            >
              <i className="material-icons right">app_registration</i>Register
            </Link>
          </div>
        </div>
      </div>

      <ul className="sidenav" id="mobile-demo">
        <div className="nav-image"></div>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/contact">Services</Link>
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
