import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

export default (contracts = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return  action.payload;
    case LIKE:
      return contracts.map((contract) => (contract._id === action.payload._id ? action.payload : contract));
    case CREATE:
      return [...contracts, action.payload];
    case UPDATE:
      return contracts.map((contract) => (contract._id === action.payload._id ? action.payload : contract));
    case DELETE:
      return contracts.filter((contract) => contract._id !== action.payload);
    default:
      return contracts;
  }
};

