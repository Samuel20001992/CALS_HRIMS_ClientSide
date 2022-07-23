import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

export default (emergencyContacts = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return  action.payload;
    case LIKE:
      return emergencyContacts.map((emergencyContact) => (emergencyContact._id === action.payload._id ? action.payload : emergencyContact));
    case CREATE:
      return [...emergencyContacts, action.payload];
    case UPDATE:
      return emergencyContacts.map((emergencyContact) => (emergencyContact._id === action.payload._id ? action.payload : emergencyContact));
    case DELETE:
      return emergencyContacts.filter((emergencyContact) => emergencyContact._id !== action.payload);
    default:
      return emergencyContacts;
  }
};

