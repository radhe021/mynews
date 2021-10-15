
import React , { useState , useEffect } from 'react';
import axios from "axios";
import styles from './../resources/css/card.css'
import {Button , Col , CardGroup ,Card ,Row ,Spinner} from "react-bootstrap";

function Searchbar() {
  
  const [articles, setarticles] = useState([]);
  
  let headersList = {
    "Accept": "*/*",
    "Authorization": "ceaf5b946e1e476297c1e3c4a892f26b" 
   }
   
   let reqOptions = {
     url: "https://newsapi.org/v2/top-headlines?country=in",
     method: "GET",
     headers: headersList,
   }
  
  useEffect(() => {
      
      try {
         axios.request(reqOptions).then(function (response) 
         {
            console.log(response.data);
          if(response.data.status === 'ok' )
          {
            setTimeout(null,3000);
            setarticles(response.data.articles);
          }
          })}
      catch (error) 
          {
            console.log(error);
          }
        console.log('article are ',articles.length);
}, [])

const ArticleCard  = articles.map((item) => {
   return( 
        <p>{item.author}</p>
    )
});

  return (
    <div className="container">
      <div className="row align-items-center">
       <h3>Here are top headlines from India</h3>
       {
      articles.length === 0 ? 
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner> 
      :  
      articles.map((item) => {
      return( 
        <>
        <Card href={item.url} arget={"_blank"} rel={"noopener noreferrer"} key={item.title}
        className="text-center" bg={'Dark'} border="primary" style={{  width: '58rem' }}>
              <Card.Header as="h5">{`Featured by ${item.source.name}`}</Card.Header>
              <Card.Img className = {styles.cardImg} variant="top" src={item.urlToImage} />
              <Card.ImgOverlay>
              <Card.Body>
                <Card.Title><strong>{item.title}</strong></Card.Title>
                <Card.Text>
                  {item.description}
                </Card.Text>
                <Card.Link href={item.url} target={"_blank"} rel={"noopener noreferrer"}>Read More</Card.Link>
              </Card.Body>
              </Card.ImgOverlay>
              <br/>
         </Card>
         <br/>
         </>
        )
    })}
    </div>
    </div>
  )
}

export default Searchbar

