import React from 'react';

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
                src="img//logo6.png"
                className="img-responsive brand-img-login img-circle"
                alt=""
              />
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
