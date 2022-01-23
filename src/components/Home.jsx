/* eslint-disable import/extensions */
/* eslint-disable simple-import-sort/imports */
/* eslint-disable @typescript-eslint/no-implied-eval */
import { useEffect, useState } from 'react';
import homeAPI from './../apiServices/homeAPI';
import NewsGrid from './NewsGrid';

function Home() {
  const [articles, setarticles] = useState([]);
  useEffect(() => {
    homeAPI().then((response) =>{
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
export default Home;


