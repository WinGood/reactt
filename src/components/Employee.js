import React, { Component } from 'react';

class Employee extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.id}</td>
        <td>{this.props.firstName}</td>
        <td>{this.props.lastName}</td>
        <td></td>
      </tr>
    );
  }
}

Employee.propTypes = {
  firstName: React.PropTypes.string.isRequired,
  lastName: React.PropTypes.string.isRequired
}

export default Employee;