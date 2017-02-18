import api from '../api';
import AppConstants from '../constants/AppConstants';

export function getEmployeesById(id) {
  return {
    type: 'API',
    actions: [
      AppConstants.GET_EMPLOYEES_REQUEST,
      AppConstants.GET_EMPLOYEES_SUCCESS,
      AppConstants.GET_EMPLOYEES_FAIL
    ],
    promise: api.departments.getEmployeesById(id),
    departmentId: parseInt(id, 10)
  }
}