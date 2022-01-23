import axios from 'axios';
/*
API client for NEWS API
*/

let headersList = {
  Accept: '*/*',
  Authorization: 'ceaf5b946e1e476297c1e3c4a892f26b',
};

let reqOptions = {
  baseURL: 'https://newsapi.org/v2/',
  headers: headersList,
};
const apiClient = axios.create(
  reqOptions,
);

export default apiClient ;