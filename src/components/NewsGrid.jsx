/* eslint-disable import/extensions */
import React from 'react';
import { Spinner } from 'react-bootstrap';

// import styles from './../resources/css/card.css';
import createNewsCard  from './NewsCard';


function NewsGrid(articles) {
  return <div className="container card-container">
    <div className="row align-items-center ">
      <h3>Here are top headlines</h3>
      {/* <h3>Here are top headlines from India</h3> */}
      {articles?.length === 0 ? (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (
        articles?.map((item, index) => {
          return (
            <React.Fragment key={index}>
              {createNewsCard(item, index)}
              <br />
              </React.Fragment  >
          );
        })
      )}
    </div>
  </div>;
}
export default NewsGrid;
