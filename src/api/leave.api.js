import axios from 'axios';

const url = 'http://localhost:5000/leaves';

export const fetchLeaves = () => axios.get(url);
export const createLeave = (newLeave) => axios.post(url, newLeave);
export const updateLeave = (id, updatedLeave) => axios.patch(`${url}/${id}`, updatedLeave);
export const deleteLeave = (id) => axios.delete(`${url}/${id}`);
