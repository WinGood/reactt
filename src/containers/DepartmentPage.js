import { connect } from 'react-redux';

import DepartmentPage from '../components/DepartmentPage';
import { getEmployeesById } from '../actions/departments';
import { update } from '../actions/employees';

function mapStateToProps(state) {
  return {
    department: state.departments.department,
    employees: state.departments.employees
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getEmployees: (id) => dispatch(getEmployeesById(id)),
    updateEmployee: (employee) => dispatch(update(employee)),
  };
}

const DepartmentPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DepartmentPage);

export default DepartmentPageContainer;
