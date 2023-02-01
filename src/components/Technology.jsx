/* eslint-disable import/extensions */
/* eslint-disable simple-import-sort/imports */
/* eslint-disable @typescript-eslint/no-implied-eval */
import React from 'react';
import { useEffect, useState } from 'react';
import technologyAPI from './../apiServices/technologyAPI';
import NewsGrid from './NewsGrid';

function Technology() {
  const [articles, setarticles] = useState([]);
  useEffect(() => {
    technologyAPI().then((response) =>{
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

export default Technology;
