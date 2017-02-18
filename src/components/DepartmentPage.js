import React, { Component } from 'react';

import Employee from './Employee';

class DepartmentPage extends Component {
  constructor(props) {
    super(props);

    props.getEmployees(props.params.id);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.params.id !== nextProps.params.id) {
      this.props.getEmployees(nextProps.params.id);
    }
  }

  render() {
    return (
      <div>
        <h1 className="page-header">{this.props.department.name}</h1>
        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
            <tr>
              <th>#</th>
              <th>First name</th>
              <th>Last name</th>
              <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {
              this.props.employees.map(employee => {
                return (
                  <Employee key={employee.id}
                            firstName={employee.firstName}
                            lastName={employee.lastName} />
                );
              })
            }
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

DepartmentPage.propTypes = {
  department: React.PropTypes.object.isRequired,
  employees: React.PropTypes.array.isRequired,
  getEmployees: React.PropTypes.func.isRequired
}

export default DepartmentPage;