import axios from 'axios';

const url = 'http://localhost:5000/immigrations';

export const fetchImmigrations = () => axios.get(url);
export const createImmigration = (newImmigration) => axios.post(url, newImmigration);
export const updateImmigration = (id, updatedImmigration) => axios.patch(`${url}/${id}`, updatedImmigration);
export const deleteImmigration = (id) => axios.delete(`${url}/${id}`);
