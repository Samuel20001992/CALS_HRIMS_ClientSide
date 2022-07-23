import axios from 'axios';

const url = 'http://localhost:5000/announcements';

export const fetchAnnouncements = () => axios.get(url);
export const createAnnouncement = (newAnnouncement) => axios.post(url, newAnnouncement);
export const updateAnnouncement = (id, updatedAnnouncement) => axios.patch(`${url}/${id}`, updatedAnnouncement);
export const deleteAnnouncement = (id) => axios.delete(`${url}/${id}`);
