import apiClient from './apiClient';
/*
searchAPI to get news based on provided search term
*/
function getNewsBySearchTerm(searchTerm) {
  const response  = apiClient.get(`everything?q=${searchTerm}&sortBy=popularity`);
  return response.then((res)=>res.data).then(re=>re.articles);
}
export default getNewsBySearchTerm ;