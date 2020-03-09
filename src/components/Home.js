import React from 'react';
import Footer from './Footer';
import HomeNave from './HomeNave';

const Home = () => {
  return (
    <div>
      <div className="showcase">
        <div className="container">
          <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4">
              <div className="showcase-text">
                <h1 className="text-center">KAWOLEGAL</h1>
                <p className="text-center">
                  A collaborative ecosystem for problem solvers and support for
                  Startups.
                </p>
                <a href="register.html" className="btn btn-info btn-lg">
                  Register Now!
                </a>
              </div>
            </div>
            <div className="col-md-4"></div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
