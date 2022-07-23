import axios from 'axios';

const url = 'http://localhost:5000/contracts';

export const fetchContracts = () => axios.get(url);

export const createContract = (newContract) => axios.post(url, newContract);
export const updateContract = (id, updatedContract) => axios.patch(`${url}/${id}`, updatedContract);
export const deleteContract = (id) => axios.delete(`${url}/${id}`);
