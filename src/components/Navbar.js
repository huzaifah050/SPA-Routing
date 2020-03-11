import React from 'react';
import logo6 from '../img/logo6.png';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-default login-nav">
        <div class="container">
          <div class="navbar-header">
            <button
              type="button"
              class="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
              aria-expanded="false"
            >
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#">
              <img
                src={logo6}
                class="img-responsive brand-img-login img-circle"
                alt=""
              />
            </a>
          </div>

          <div
            class="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul class="nav navbar-nav navbar-right navbar-right-login">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/startups">Startups</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
