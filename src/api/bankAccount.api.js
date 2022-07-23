import axios from 'axios';

const url = 'http://localhost:5000/bankAccounts';

export const fetchBankAccounts = () => axios.get(url);
export const createBankAccount = (newBankAccount) => axios.post(url, newBankAccount);
export const updateBankAccount = (id, updatedBankAccount) => axios.patch(`${url}/${id}`, updatedBankAccount);
export const deleteBankAccount = (id) => axios.delete(`${url}/${id}`);
