import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

import * as api from '../api/emergencyContact.api.js';

export const getEmmergencyContacts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchEmmergencyContacts();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createEmmergencyContact = (emergencyContact) => async (dispatch) => {
  try {
    const { data } = await api.createEmmergencyContact(emergencyContact);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateEmmergencyContact = (id, emergencyContact) => async (dispatch) => {
  try {
    const { data } = await api.updateEmmergencyContact(id, emergencyContact);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};



export const deleteEmmergencyContact = (id) => async (dispatch) => {
  try {
    await api.deleteEmmergencyContact(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};
