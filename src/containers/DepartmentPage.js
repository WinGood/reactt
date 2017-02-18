import { connect } from 'react-redux';

import DepartmentPage from '../components/DepartmentPage';
import { getEmployeesById } from '../actions/departments';

function mapStateToProps(state) {
  return {
    department: state.departments.department,
    employees: state.departments.employees
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getEmployees: (id) => dispatch(getEmployeesById(id)),
  };
}

const DepartmentPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DepartmentPage);

export default DepartmentPageContainer;
