
import * as api from '../api/bankAccount.api.js';
import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';
export const getBankAccounts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchBankAccounts();
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createBankAccount = (bankAccount) => async (dispatch) => {
  try {
    const { data } = await api.createBankAccount(bankAccount);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateBankAccount = (id, bankAccount) => async (dispatch) => {
  try {
    const { data } = await api.updateBankAccount(id, bankAccount);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};



export const deleteBankAccount = (id) => async (dispatch) => {
  try {
    await api.deleteBankAccount(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};
