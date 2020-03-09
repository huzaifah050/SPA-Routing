import React from 'react';
import logo6 from '../img/logo6.png';

const HomeNave = () => {
  return (
    <div>
      <nav className="navbar navbar-default navbar-fixed-top home-nav">
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
                className="img-responsive brand-img img-circle"
                alt=""
              />
            </a>
          </div>

          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul className="nav navbar-nav navbar-right">
              <li className="active">
                <a href="index.html">Home</a>
              </li>
              <li>
                <a href="startups.html">Starups</a>
              </li>
              <li>
                <a href="register.html">Register</a>
              </li>
              <li>
                <a href="login.html">Login</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default HomeNave;
