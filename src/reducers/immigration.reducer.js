import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

export default (immigrations = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return  action.payload;
    case LIKE:
      return immigrations.map((immigration) => (immigration._id === action.payload._id ? action.payload : immigration));
    case CREATE:
      return [...immigrations, action.payload];
    case UPDATE:
      return immigrations.map((immigration) => (immigration._id === action.payload._id ? action.payload : immigration));
    case DELETE:
      return immigrations.filter((immigration) => immigration._id !== action.payload);
    default:
      return immigrations;
  }
};

