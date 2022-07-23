import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

import * as api from '../api/workExperiance.api.js';

export const getWorkExperiances = () => async (dispatch) => {
  try {
    const { data } = await api.fetchWorkExperiances();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createWorkExperiance = (workExperiance) => async (dispatch) => {
  try {
    const { data } = await api.createWorkExperiance(workExperiance);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateWorkExperiance = (id, workExperiance) => async (dispatch) => {
  try {
    const { data } = await api.updateWorkExperiance(id, workExperiance);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};



export const deleteWorkExperiance = (id) => async (dispatch) => {
  try {
    await api.deleteWorkExperiance(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};
