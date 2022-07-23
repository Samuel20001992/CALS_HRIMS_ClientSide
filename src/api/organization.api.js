import axios from 'axios';

const url = 'http://localhost:5000/organizations';

export const fetchOrganizations = () => axios.get(url);
export const createOrganization = (newOrganization) => axios.post(url, newOrganization);
export const updateOrganization = (id, updatedOrganization) => axios.patch(`${url}/${id}`, updatedOrganization);
export const deleteOrganization = (id) => axios.delete(`${url}/${id}`);
