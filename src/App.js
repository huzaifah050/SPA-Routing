import React from 'react';
import './App.css';
import Home from './components/Home';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Startups from './components/Startups';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route exact={true} path="/" component={Home} />
        <Route exact={true} path="/login" component={Login} />
        <Route exact={true} path="/register" component={Register} />
        <Route exact={true} path="/startups" component={Startups} />
      </div>
    </BrowserRouter>
  );
}

export default App;
