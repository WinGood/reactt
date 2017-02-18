import request from './request';

const methods = {
  updateEmployee(employee) {
    return request.put(`/employees/${employee.id}`, {
      ...employee
    });
  }
};

export default methods;