const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('ceaf5b946e1e476297c1e3c4a892f26b');

// export function getTopNewsHeadLines(query,category,lang='en',country='us'){

  export function getTopNewsHeadLines(){
newsapi.v2.sources({
  category: 'technology',
  language: 'en',
  country: 'us'
  // q:query,
  // category: category,
  // language: lang,
  // country: country
}).then(response => {
  console.log(response);
  return response;
});
}

