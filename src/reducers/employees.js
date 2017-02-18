import db from '../../db.json';

const employees = (state = db.employees, action) => {
  switch (action.type) {
    case 'GET_CITIES_SUCCESS':
    {
      return [...action.data];
    }
    default:
      return state;
  }
};

export default employees;
