import axios from 'axios';

axios.defaults.baseURL = 'https://63947de54df9248eada3bddf.mockapi.io';

export const addMaterial = async values => {
  const res = await axios.post('/materials', values);
  return res.data;
};

export const getMaterial = async () => {
  const res = await axios.get('/materials');
  return res.data;
};
