import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

export default (announcements = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      console.log(action.payload);
      return  action.payload;
    case LIKE:
      return announcements.map((announcement) => (announcement._id === action.payload._id ? action.payload : announcement));
    case CREATE:
      return [...announcements, action.payload];
    case UPDATE:
      return announcements.map((announcement) => (announcement._id === action.payload._id ? action.payload : announcement));
    case DELETE:
      return announcements.filter((announcement) => announcement._id !== action.payload);
    default:
      return announcements;
  }
};

