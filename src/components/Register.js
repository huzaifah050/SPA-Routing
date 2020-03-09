import React from 'react';
import Footer from './Footer';

const Register = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <form>
              <h3>Join KawoLegal. Sign up to get your Startup listed now!</h3>
              <div className="form-group">
                <label for="exampleInputEmail1">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  placeholder="Full Name"
                />
              </div>
              <div className="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  placeholder="Email"
                />
              </div>
              <div className="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                />
              </div>
              <div className="form-group">
                <label for="exampleInputPassword1">Confirm Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Confirm Password"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Sign up
              </button>
            </form>
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Register;
