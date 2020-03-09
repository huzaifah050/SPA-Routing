import React from 'react';
import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import { Startups } from './components/Startups';
import logo6 from './img/logo6.png';

function App() {
  return (
    <div>
      <Router>
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

        <Route exact={true} path="/" component={Home} />
        <Route exact={true} path="/login" component={Login} />
        <Route exact={true} path="/register" component={Register} />
        <Route exact={true} path="/startups" component={Startups} />
      </Router>
    </div>
  );
}

export default App;
