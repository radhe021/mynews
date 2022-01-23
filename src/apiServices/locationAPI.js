import axios from 'axios';

const getLocation = () => {
  const URL = 'https://ipinfo.io/json?token=8f472e27e144ae';
  return axios.get(URL)
    .then(response => response.data)
    .catch(error => {
      throw error;
    });
};
export default getLocation;
