import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

export default (qualifications = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return  action.payload;
    case LIKE:
      return qualifications.map((qualification) => (qualification._id === action.payload._id ? action.payload : qualification));
    case CREATE:
      return [...qualifications, action.payload];
    case UPDATE:
      return qualifications.map((qualification) => (qualification._id === action.payload._id ? action.payload : qualification));
    case DELETE:
      return qualifications.filter((qualification) => qualification._id !== action.payload);
    default:
      return qualifications;
  }
};

