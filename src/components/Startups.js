import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import logo1 from '../img/logo1.jpg';
import logo3 from '../img/logo3.jpg';
import logo5 from '../img/logo5.jpg';
import logo2 from '../img/logo2.jpg';
import { Link } from 'react-router-dom';

export const Startups = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <form>
          <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-10">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search Startup by Name or Industry"
                  id="txtSearch"
                />
                <div className="input-group-btn">
                  <button className="btn btn-primary" type="submit">
                    <span className="glyphicon glyphicon-search"></span> Search
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-1"></div>
          </div>
        </form>
        <div className="container">
          <div className="row startup-search">
            <div className="col-md-2"></div>
            <div className="col-md-2">
              <img src={logo1} className="img-responsive startup-logo" alt="" />
            </div>
            <div className="col-md-6">
              <h3>
                <Link to="/startupinfo"> tutahub</Link>
              </h3>
              <p>a website for tutorials</p>
              <Link to="/startupinfo" className="btn btn-default startup-btn">
                See full details
              </Link>
            </div>
            <div className="col-md-2"></div>
          </div>
          <div className="row startup-search">
            <div className="col-md-2"></div>
            <div className="col-md-2">
              <img src={logo3} className="img-responsive startup-logo" alt="" />
            </div>
            <div className="col-md-6">
              <h3>
                <Link to="/startupinfo"> Anditer</Link>
              </h3>
              <p> Anditer is a tech blog</p>
              <Link to="/startupinfo" className="btn btn-default startup-btn">
                See full details
              </Link>
            </div>
            <div className="col-md-2"></div>
          </div>
          <div className="row startup-search">
            <div className="col-md-2"></div>
            <div className="col-md-2">
              <img src={logo2} className="img-responsive startup-logo" alt="" />
            </div>
            <div className="col-md-8">
              <h3>
                <Link to="/startupinfo"> Think and Zoom</Link>
              </h3>
              <p>
                {' '}
                Providing solutions for the visually impaired, such as
                mind-controlled zooming, and wearable controlled zooming.
              </p>
              <Link to="/startupinfo" className="btn btn-default startup-btn">
                See full details
              </Link>
            </div>
          </div>
          <div className="row startup-search">
            <div className="col-md-2"></div>
            <div className="col-md-2">
              <img src={logo1} className="img-responsive startup-logo" alt="" />
            </div>
            <div className="col-md-8">
              <h3>
                <Link to="/startupinfo"> Slatecube</Link>
              </h3>
              <p>
                Slatecube helps job seekers develop job-relevant skills, gain
                work experience, and land well paying jobs through
                world-className up-skilling courses and virtual internships.
              </p>
              <Link to="/startupinfo" className="btn btn-default startup-btn">
                See full details
              </Link>
            </div>
          </div>
          <div className="row startup-search">
            <div className="col-md-2"></div>
            <div className="col-md-2">
              <img src={logo5} className="img-responsive startup-logo" alt="" />
            </div>
            <div className="col-md-8">
              <h3>
                <Link to="/startupinfo"> Sleekjob Academy</Link>
              </h3>
              <p>
                Trains world className software developers in Ghana and matches
                them to employment opportunitie
              </p>
              <Link to="/startupinfo" className="btn btn-default startup-btn">
                See full details
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Startups;
