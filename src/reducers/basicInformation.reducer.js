import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

export default (basicInformations = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return  action.payload;
    case LIKE:
      return basicInformations.map((basicInformation) => (basicInformation._id === action.payload._id ? action.payload : basicInformation));
    case CREATE:
      return [...basicInformations, action.payload];
    case UPDATE:
      return basicInformations.map((basicInformation) => (basicInformation._id === action.payload._id ? action.payload : basicInformation));
    case DELETE:
      return basicInformations.filter((basicInformation) => basicInformation._id !== action.payload);
    default:
      return basicInformations;
  }
};

