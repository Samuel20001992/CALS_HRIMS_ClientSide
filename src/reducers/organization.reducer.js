import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

export default (organizations = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return  action.payload;
    case LIKE:
      return organizations.map((organization) => (organization._id === action.payload._id ? action.payload : organization));
    case CREATE:
      return [...organizations, action.payload];
    case UPDATE:
      return organizations.map((organization) => (organization._id === action.payload._id ? action.payload : organization));
    case DELETE:
      return organizations.filter((organization) => organization._id !== action.payload);
    default:
      return organizations;
  }
};

