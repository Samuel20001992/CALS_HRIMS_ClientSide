
import * as api from '../api/announcement.api.js';
import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';
export const getAnnouncements = () => async (dispatch) => {
  try {
    const { data } = await api.fetchAnnouncements();
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createAnnouncement = (announcement) => async (dispatch) => {
  try {
    const { data } = await api.createAnnouncement(announcement);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateAnnouncement = (id, announcement) => async (dispatch) => {
  try {
    const { data } = await api.updateAnnouncement(id, announcement);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};



export const deleteAnnouncement = (id) => async (dispatch) => {
  try {
    await api.deleteAnnouncement(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};
