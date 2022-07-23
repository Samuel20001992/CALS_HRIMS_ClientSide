import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

import * as api from '../api/contract.api.js';

export const getContracts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchContracts();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createContract = (contract) => async (dispatch) => {
  try {
    const { data } = await api.createContract(contract);
    console.log(contract);
    console.log(data);
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateContract = (id, contract) => async (dispatch) => {
  try {
    const { data } = await api.updateContract(id, contract);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};



export const deleteContract = (id) => async (dispatch) => {
  try {
    await api.deleteContract(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};
