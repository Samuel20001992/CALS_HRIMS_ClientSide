import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

import * as api from '../api/immigration.api.js';

export const getImmigrations = () => async (dispatch) => {
  try {
    const { data } = await api.fetchImmigrations();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createImmigration = (immigration) => async (dispatch) => {
  try {
    const { data } = await api.createImmigration(immigration);
    console.log(data)
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateImmigration = (id, immigration) => async (dispatch) => {
  try {
    const { data } = await api.updateImmigration(id, immigration);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};



export const deleteImmigration = (id) => async (dispatch) => {
  try {
    await api.deleteImmigration(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};
