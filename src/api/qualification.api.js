import axios from 'axios';

const url = 'http://localhost:5000/qualifications';

export const fetchQualifications = () => axios.get(url);
export const createQualification = (newQualification) => axios.post(url, newQualification);
export const updateQualification = (id, updatedQualification) => axios.patch(`${url}/${id}`, updatedQualification);
export const deleteQualification = (id) => axios.delete(`${url}/${id}`);
