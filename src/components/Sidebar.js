import React, { Component } from 'react';
import { Link } from 'react-router';

class Sidebar extends Component {
  render() {
    return (
      <div className="col-sm-3 col-md-2 sidebar">
        <ul className="nav nav-sidebar">
          {
            this.props.departments.map(department => {
              return (
                <li key={department.id} className="active">
                  <Link to={`departments/${department.id}`}>
                    {department.name}
                  </Link>
                </li>
              );
            })
          }
        </ul>
      </div>
    );
  }
}

export default Sidebar;