import db from '../../db.json';
import AppConstants from '../constants/AppConstants';

const employees = (state = db.employees, action) => {
  switch (action.type) {
    case AppConstants.UPDATE_EMPLOYEE_REQUEST:
    {
      const nextState = [...state];
      const index     = nextState.findIndex(employee => {
        return employee.id === action.body.employee.id;
      });

      nextState[index] = action.body.employee;

      return nextState;
    }
    default:
      return state;
  }
};

export default employees;
