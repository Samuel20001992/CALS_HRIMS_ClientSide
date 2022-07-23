import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

export default (workExperiances = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return  action.payload;
    case LIKE:
      return workExperiances.map((workExperiance) => (workExperiance._id === action.payload._id ? action.payload : workExperiance));
    case CREATE:
      return [...workExperiances, action.payload];
    case UPDATE:
      return workExperiances.map((workExperiance) => (workExperiance._id === action.payload._id ? action.payload : workExperiance));
    case DELETE:
      return workExperiances.filter((workExperiance) => workExperiance._id !== action.payload);
    default:
      return workExperiances;
  }
};

