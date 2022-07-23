import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

import * as api from '../api/organization.api.js';

export const getOrganizations = () => async (dispatch) => {
  try {
    const { data } = await api.fetchOrganizations();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createOrganization = (organization) => async (dispatch) => {
  try {
    const { data } = await api.createOrganization(organization);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateOrganization = (id, organization) => async (dispatch) => {
  try {
    const { data } = await api.updateOrganization(id, organization);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};



export const deleteOrganization = (id) => async (dispatch) => {
  try {
    await api.deleteOrganization(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};
