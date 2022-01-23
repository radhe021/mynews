/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

import searchNews from '../apiServices/searchAPI';
// eslint-disable-next-line import/extensions
import NewsGrid from './NewsGrid';

function SearchNews() {
  const [newsArticles, setnewsArticles] = useState([]);
  const queryParams = new URLSearchParams(window.location.search);
  let searchTerm  = queryParams.get('query');
  // eslint-disable-next-line no-undef
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-implied-eval
    searchNews(searchTerm).then( (result) => {
      setnewsArticles(result);
    }).catch((err)=>{
      console.log(err);
    });
  }, [searchTerm]);

  return (
    // eslint-disable-next-line no-undef
    NewsGrid(newsArticles.length === 0 ? [] : newsArticles)
  );
}

export default SearchNews;
