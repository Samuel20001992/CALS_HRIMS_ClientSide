import axios from 'axios';

const url = 'http://localhost:5000/workExperiances';

export const fetchWorkExperiances = () => axios.get(url);
export const createWorkExperiance = (newWorkExperiance) => axios.post(url, newWorkExperiance);
export const updateWorkExperiance = (id, updatedWorkExperiance) => axios.patch(`${url}/${id}`, updatedWorkExperiance);
export const deleteWorkExperiance = (id) => axios.delete(`${url}/${id}`);
