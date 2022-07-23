import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

export default (leaves = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return  action.payload;
    case LIKE:
      return leaves.map((leave) => (leave._id === action.payload._id ? action.payload : leave));
    case CREATE:
      return [...leaves, action.payload];
    case UPDATE:
      return leaves.map((leave) => (leave._id === action.payload._id ? action.payload : leave));
    case DELETE:
      return leaves.filter((leave) => leave._id !== action.payload);
    default:
      return leaves;
  }
};

