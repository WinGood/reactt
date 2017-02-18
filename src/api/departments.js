import request from './request';

const methods = {
  getEmployeesById(id) {
    return request.get(`/employees?departmentId=${id}`);
  }
};

export default methods;