import React from 'react';
import Navbar from './Navbar';
import logo2 from '../img/logo2.jpg';

const Startupinfo = () => {
  return (
    <div>
      <Navbar />

      <div className="container">
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-10">
            <div className="panel panel-default">
              <div className="panel-heading">
                <h1 className="panel-title">Startup Information</h1>
              </div>
              <div className="panel-body">
                <div className="row">
                  <div className="col-md-8">
                    <p>
                      <span className="span-name">Business Name: </span> tutahub
                    </p>
                    <p>
                      <span className="span-name">Business Location: </span>{' '}
                      Accra
                    </p>
                    <p>
                      <span className="span-name">Business Website: </span>{' '}
                      tutahub.com
                    </p>
                    <p>
                      <span className="span-name">Phone: </span> 0275268487
                    </p>
                    <div className="startup-socials">
                      <p a href="#" className="fa fa-facebook">
                        {' '}
                        <span className="paragrap-social">N/A</span>
                      </p>
                      <p a href="#" className="fa fa-twitter">
                        {' '}
                        <span className="paragrap-social">N/A</span>
                      </p>
                      <p a href="#" className="fa fa-linkedin">
                        {' '}
                        <span className="paragrap-social">N/A</span>
                      </p>
                    </div>
                    <p>
                      <span className="span-name">Market/Industry: </span> Tech
                    </p>
                    <p>
                      <span className="span-name">Description: </span> a website
                      for tutorials
                    </p>
                  </div>
                  <div className="col-md-2">
                    <h5 style={{ fontWeight: '700' }}>Company Logo</h5>
                    <img src={logo2} className="img-responsive" alt="" />
                  </div>
                  <div className="col-md-2"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-1"></div>
        </div>
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-10">
            <div className="panel panel-default">
              <div className="panel-heading">
                <h1 className="panel-title">Founder Information</h1>
              </div>
              <div className="panel-body">
                <h4>Founder 1</h4>
                <p>
                  <span className="span-name">Full Name: </span> Thomas Frimpong
                </p>
                <div className="startup-socials">
                  <p a href="#" className="fa fa-facebook">
                    {' '}
                    <span className="paragrap-social">N/A</span>
                  </p>
                  <p a href="#" className="fa fa-twitter">
                    {' '}
                    <span className="paragrap-social">N/A</span>
                  </p>
                  <p a href="#" className="fa fa-linkedin">
                    {' '}
                    <span className="paragrap-social">N/A</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-1"></div>
        </div>
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-10">
            <h3>Startup Updates</h3>
          </div>
          <div className="col-md-1"></div>
        </div>
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-10">
            <div className="well">
              <p>I'm about getting started...</p>
              <p>
                <span className="span-name">By:</span>tutahub
              </p>
              <p>
                <span className="span-name">Added on:</span>2018-05-09 15:06:24
              </p>
            </div>
          </div>
          <div className="col-md-1"></div>
        </div>
      </div>
    </div>
  );
};

export default Startupinfo;
