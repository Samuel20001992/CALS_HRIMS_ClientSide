import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

import * as api from '../api/qualification.api.js';

export const getQualifications = () => async (dispatch) => {
  try {
    const { data } = await api.fetchQualifications();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createQualification = (qualification) => async (dispatch) => {
  try {
    const { data } = await api.createQualification(qualification);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateQualification = (id, qualification) => async (dispatch) => {
  try {
    const { data } = await api.updateQualification(id, qualification);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};



export const deleteQualification = (id) => async (dispatch) => {
  try {
    await api.deleteQualification(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};
