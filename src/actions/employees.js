import api from '../api';
import AppConstants from '../constants/AppConstants';

export function update(employee) {
  return {
    type: 'API',
    actions: [
      AppConstants.UPDATE_EMPLOYEE_REQUEST,
      AppConstants.UPDATE_EMPLOYEE_SUCCESS,
      AppConstants.UPDATE_EMPLOYEE_FAIL
    ],
    promise: api.employees.update(employee),
    employee
  }
}