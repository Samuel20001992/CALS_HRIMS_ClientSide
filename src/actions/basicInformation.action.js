import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

import * as api from '../api/basicInformation.api.js';

export const getBasicInformations = () => async (dispatch) => {
  try {
    const { data } = await api.fetchBasicInformations();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createBasicInformation = (basicInformation) => async (dispatch) => {
  try {
    const { data } = await api.createBasicInformation(basicInformation);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateBasicInformation = (id, basicInformation) => async (dispatch) => {
  try {
    const { data } = await api.updateBasicInformation(id, basicInformation);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};



export const deleteBasicInformation = (id) => async (dispatch) => {
  try {
    await api.deleteBasicInformation(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};
