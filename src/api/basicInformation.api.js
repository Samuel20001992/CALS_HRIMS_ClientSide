import axios from 'axios';

const url = 'http://localhost:5000/basicInformations';

export const fetchBasicInformations = () => axios.get(url);
export const createBasicInformation = (newBasicInformation) => axios.post(url, newBasicInformation);
export const updateBasicInformation = (id, updatedBasicInformation) => axios.patch(`${url}/${id}`, updatedBasicInformation);
export const deleteBasicInformation = (id) => axios.delete(`${url}/${id}`);
