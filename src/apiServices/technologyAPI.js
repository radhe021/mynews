import apiClient from './apiClient';
/*
homeAPi to get news of currrent place detected by web app
*/
function getTechNews() {
  const response  = apiClient.get('top-headlines?category=technology&sortBy=popularity');
  return response.then((res)=>res.data).then(re=>re.articles);
}
export default getTechNews ;

