import request from './request';

const methods = {
  update(employee) {
    return request.put(`/employees/${employee.id}`, {
      ...employee
    });
  }
};

export default methods;