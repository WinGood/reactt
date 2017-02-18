import api from '../api';

export function getEmployeesById(id) {
  return {
    type: 'API',
    actions: ['GET_EMPLOYEES_REQUEST', 'GET_EMPLOYEES_SUCCESS', 'GET_EMPLOYEES_FAIL'],
    promise: api.departments.getEmployeesById(id),
    departmentId: parseInt(id)
  }
}