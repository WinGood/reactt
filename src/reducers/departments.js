import db from '../../db.json';

const init = {
  list: db.departments,
  department: {},
  employees: []
};

const departments = (state = init, action) => {
  switch (action.type) {
    case 'GET_EMPLOYEES_REQUEST':
    {
      const department = state.list.find(department => department.id === action.body.departmentId);
      return {
        ...state,
        department: department,
      };
    }
    case 'GET_EMPLOYEES_SUCCESS':
    {
      return {
        ...state,
        employees: [...action.data]
      };
    }
    default:
      return state;
  }
};

export default departments;
