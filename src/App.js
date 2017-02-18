import React, { Component } from 'react';
import { Link } from 'react-router';

import './App.css';
import SidebarContainer from './containers/Sidebar';

class App extends Component {
  render() {
    return (
      <div className="app">
        <nav className="navbar navbar-inverse navbar-fixed-top">
          <div className="container-fluid">
            <div className="navbar-header">
              <Link className="navbar-brand" to="/">React.js</Link>
            </div>
          </div>
        </nav>
        
        <div className="container-fluid">
          <div className="row">
            <SidebarContainer />
            <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
