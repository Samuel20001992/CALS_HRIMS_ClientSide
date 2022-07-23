import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

export default (bankAccounts = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      console.log(action.payload);
      return  action.payload;
    case LIKE:
      return bankAccounts.map((bankAccount) => (bankAccount._id === action.payload._id ? action.payload : bankAccount));
    case CREATE:
      return [...bankAccounts, action.payload];
    case UPDATE:
      return bankAccounts.map((bankAccount) => (bankAccount._id === action.payload._id ? action.payload : bankAccount));
    case DELETE:
      return bankAccounts.filter((bankAccount) => bankAccount._id !== action.payload);
    default:
      return bankAccounts;
  }
};

