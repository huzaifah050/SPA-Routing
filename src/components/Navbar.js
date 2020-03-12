import React from 'react';
import logo6 from '../img/logo6.png';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-default login-nav">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
              aria-expanded="false"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">
              <img
                src={logo6}
                className="img-responsive brand-img-login img-circle"
                alt=""
              />
            </a>
          </div>

          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul className="nav navbar-nav navbar-right navbar-right-login">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <NavLink to="/startups">Startups</NavLink>
              </li>
              <li>
                <NavLink to="/register">Register</NavLink>
              </li>
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
