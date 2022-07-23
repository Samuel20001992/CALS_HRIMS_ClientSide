import axios from 'axios';

const url = 'http://localhost:5000/emmergencyContacts';

export const fetchEmmergencyContacts = () => axios.get(url);
export const createEmmergencyContact = (newEmergencyContact) => axios.post(url, newEmergencyContact);
export const updateEmmergencyContact = (id, updatedEmergencyContact) => axios.patch(`${url}/${id}`, updatedEmergencyContact);
export const deleteEmmergencyContact = (id) => axios.delete(`${url}/${id}`);
