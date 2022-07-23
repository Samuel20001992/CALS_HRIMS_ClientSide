import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

export default (shifts = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return  action.payload;
    case LIKE:
      return shifts.map((shift) => (shift._id === action.payload._id ? action.payload : shift));
    case CREATE:
      return [...shifts, action.payload];
    case UPDATE:
      return shifts.map((shift) => (shift._id === action.payload._id ? action.payload : shift));
    case DELETE:
      return shifts.filter((shift) => shift._id !== action.payload);
    default:
      return shifts;
  }
};

