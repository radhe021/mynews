import apiClient from './apiClient';
/*
homeAPi to get news of currrent place detected by web app
*/
function getProvinceNews(state) {
  const response  = apiClient.get(`everything?q=${state}&sortBy=popularity`);
  return response.then((res)=>res.data).then(re=>re.articles);
}
export default getProvinceNews ;

