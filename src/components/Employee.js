import React, { Component } from 'react';

import './Employee.css';
import FormControl from './FormControl';

class Employee extends Component {
  constructor(props) {
    super(props);

    this.onEdit   = this.onEdit.bind(this);
    this.offEdit  = this.offEdit.bind(this);
    this.saveEdit = this.saveEdit.bind(this);

    this.state = {
      isEditMode: false,
      firstName: props.firstName,
      lastName: props.lastName
    };
  }

  onEdit() {
    this.setState({isEditMode: true});
  }

  offEdit() {
    this.setState({
      isEditMode: false,
      firstName: this.props.firstName,
      lastName: this.props.lastName
    });
  }

  saveEdit() {
    this.setState({isEditMode: false});

    this.props.onUpdate({
      id: this.props.id,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      departmentId: this.props.departmentId
    });
  }

  handleChangeValue(keyField, event) {
    this.setState({
      [keyField]: event.target.value
    });
  }

  render() {
    return (
      <tr>
        <td>{this.props.id}</td>
        <td>
          <FormControl
            isEditMode={this.state.isEditMode}
            value={this.state.firstName}
            onChange={this.handleChangeValue.bind(this, 'firstName')}
          />
        </td>
        <td>
          <FormControl
            isEditMode={this.state.isEditMode}
            value={this.state.lastName}
            onChange={this.handleChangeValue.bind(this, 'lastName')}
          />
        </td>
        <td>
          <div className="employee-actions">
          {
            (this.state.isEditMode)
              ?
                <div>
                  <button className="btn btn-success" onClick={this.saveEdit}>Save</button>
                  <button className="btn btn-danger" onClick={this.offEdit}>Close</button>
                </div>
              :
              <button className="btn btn-primary" onClick={this.onEdit}>Edit</button>
          }
          </div>
        </td>
      </tr>
    );
  }
}

Employee.propTypes = {
  id: React.PropTypes.number.isRequired,
  departmentId: React.PropTypes.number.isRequired,
  firstName: React.PropTypes.string.isRequired,
  lastName: React.PropTypes.string.isRequired,
  onUpdate: React.PropTypes.func.isRequired
}

export default Employee;