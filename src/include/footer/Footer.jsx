import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <footer className="page-footer blue">
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h5 className="white-text">Tenawo</h5>
              <p className="grey-text text-lighten-4">
                KMS ETH Health Trading SC is the first innovative healthcare
                company founded by professionals and innovators from various
                educational diversities from Ethiopia, Canada, the United
                Kingdom, and the United States of America.
              </p>
            </div>
            <div className="col l4 offset-l2 s12">
              <h5 className="white-text">Links</h5>
              <ul>
                <li>
                  <Link className="grey-text text-lighten-3" to="/">
                    Blogs
                  </Link>
                </li>
                <li>
                  <Link className="grey-text text-lighten-3" to="/about">
                    About
                  </Link>
                </li>
                <li>
                  <Link className="grey-text text-lighten-3" to="/service">
                    Services
                  </Link>
                </li>
                <li>
                  <a className="grey-text text-lighten-3" to="/">
                    Teams
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container link">
            © 2014 Tenawo, Made by KMS ETH Health Trading S.C
            <a className="grey-text text-lighten-4 right" href="#!">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a className="grey-text text-lighten-4 right" href="#!">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a className="grey-text text-lighten-4 right" href="#!">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a className="grey-text text-lighten-4 right" href="#!">
              <i className="fa-brands fa-facebook"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
