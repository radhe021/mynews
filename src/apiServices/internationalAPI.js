import apiClient from './apiClient';
/*
homeAPi to get news of currrent place detected by web app
*/
function getinternationalNewsAPI() {
  const response  = apiClient.get('top-headlines?country=us&sortBy=popularity');
  return response.then((res)=>res.data).then(re=>re.articles);
}
export default getinternationalNewsAPI ;

