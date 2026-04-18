import axios from 'axios';

const API_URL = 'http://localhost:3000/verses';

export const getVerses = () => axios.get(API_URL);
export const getVerse = (id) => axios.get(`${API_URL}/${id}`);
export const addVerse = (data) => axios.post(API_URL, data);
export const updateVerse = (id, data) => axios.put(`${API_URL}/${id}`, data);
export const deleteVerse = (id) => axios.delete(`${API_URL}/${id}`);