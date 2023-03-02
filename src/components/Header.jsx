import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header(props) {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io">
          <img
            src="https://bulma.io/images/bulma-logo.png"
            width="112"
            height="28"
          />
        </a>

        <a
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <NavLink to="/" className="navbar-item">
            Home
          </NavLink>

          <NavLink to="/Products" className="navbar-item">
            Products
          </NavLink>
        </div>
        <div className="navbar-end">
          <NavLink to="/Cart" className="navbar-item">
            My cart
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
