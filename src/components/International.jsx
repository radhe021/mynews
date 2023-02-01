/* eslint-disable import/extensions */
/* eslint-disable simple-import-sort/imports */
/* eslint-disable @typescript-eslint/no-implied-eval */

import react,{ useEffect, useState } from 'react';
import getinternationalNewsAPI from '../apiServices/internationalAPI';
import NewsGrid from './NewsGrid';

function International() {
  const [articles, setarticles] = useState([]);
  useEffect(() => {
    getinternationalNewsAPI().then((response) =>{
    //  console.log('tech is', JSON.stringify(response));
      setTimeout(setarticles(response), 1500);
    },
    ).catch((err)=>{
      console.log(err);
    });
  }, []);
  return (
    NewsGrid(articles)
  );
}

export default International;
