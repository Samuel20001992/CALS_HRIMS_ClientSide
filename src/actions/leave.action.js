import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

import * as api from '../api/leave.api.js';

export const getLeaves = () => async (dispatch) => {
  try {
    const { data } = await api.fetchLeaves();
    
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createLeave = (leave) => async (dispatch) => {
  try {
    const { data } = await api.createLeave(leave);
console.log(data);
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateLeave = (id, leave) => async (dispatch) => {
  try {
    const { data } = await api.updateLeave(id, leave);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};



export const deleteLeave = (id) => async (dispatch) => {
  try {
    await api.deleteLeave(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};
