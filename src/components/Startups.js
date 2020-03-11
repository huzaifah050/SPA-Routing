import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

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
              <img
                src="img/logo1.jpg"
                className="img-responsive startup-logo"
                alt=""
              />
            </div>
            <div className="col-md-6">
              <h3>
                <a href="startupinfo.html"> tutahub</a>
              </h3>
              <p>a website for tutorials</p>
              <a
                href="startupinfo.html"
                className="btn btn-default startup-btn"
              >
                See full details
              </a>
            </div>
            <div className="col-md-2"></div>
          </div>
          <div className="row startup-search">
            <div className="col-md-2"></div>
            <div className="col-md-2">
              <img
                src="img/logo3.jpg"
                className="img-responsive startup-logo"
                alt=""
              />
            </div>
            <div className="col-md-6">
              <h3>
                <a href="startupinfo.html"> Anditer</a>
              </h3>
              <p> Anditer is a tech blog</p>
              <a
                href="startupinfo.html"
                className="btn btn-default startup-btn"
              >
                See full details
              </a>
            </div>
            <div className="col-md-2"></div>
          </div>
          <div className="row startup-search">
            <div className="col-md-2"></div>
            <div className="col-md-2">
              <img
                src="img/logo2.jpg"
                className="img-responsive startup-logo"
                alt=""
              />
            </div>
            <div className="col-md-8">
              <h3>
                <a href="startupinfo.html"> Think and Zoom</a>
              </h3>
              <p>
                {' '}
                Providing solutions for the visually impaired, such as
                mind-controlled zooming, and wearable controlled zooming.
              </p>
              <a
                href="startupinfo.html"
                className="btn btn-default startup-btn"
              >
                See full details
              </a>
            </div>
          </div>
          <div className="row startup-search">
            <div className="col-md-2"></div>
            <div className="col-md-2">
              <img
                src="img/logo1.jpg"
                className="img-responsive startup-logo"
                alt=""
              />
            </div>
            <div className="col-md-8">
              <h3>
                <a href="startupinfo.html"> Slatecube</a>
              </h3>
              <p>
                Slatecube helps job seekers develop job-relevant skills, gain
                work experience, and land well paying jobs through
                world-className up-skilling courses and virtual internships.
              </p>
              <a
                href="startupinfo.html"
                className="btn btn-default startup-btn"
              >
                See full details
              </a>
            </div>
          </div>
          <div className="row startup-search">
            <div className="col-md-2"></div>
            <div className="col-md-2">
              <img
                src="img/logo5.jpg"
                className="img-responsive startup-logo"
                alt=""
              />
            </div>
            <div className="col-md-8">
              <h3>
                <a href="startupinfo.html"> Sleekjob Academy</a>
              </h3>
              <p>
                Trains world className software developers in Ghana and matches
                them to employment opportunitie
              </p>
              <a
                href="startupinfo.html"
                className="btn btn-default startup-btn"
              >
                See full details
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Startups;
