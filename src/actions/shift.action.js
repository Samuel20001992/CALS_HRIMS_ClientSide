import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

import * as api from '../api/shift.api.js';

export const getShifts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchShifts();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createShift = (shift) => async (dispatch) => {
  try {
    const { data } = await api.createShift(shift);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateShift = (id, shift) => async (dispatch) => {
  try {
    const { data } = await api.updateShift(id, shift);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};



export const deleteShift = (id) => async (dispatch) => {
  try {
    await api.deleteShift(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};
