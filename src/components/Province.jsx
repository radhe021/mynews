/* eslint-disable @typescript-eslint/no-implied-eval */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable import/extensions */
import './../resources/css/Province.css';

import {  useEffect, useState  } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';

import getLocation from './../apiServices/locationAPI';
import getProvinceNews from './../apiServices/provinceAPI';
import NewsGrid from './NewsGrid';

function Province() {

  // const [locationData, setlocationData] = useState({
  //   Latitude:0.00,
  //   Longitude:0.00,
  //   Accuracy:0.00,
  // });
  const [locationInfo, setlocationInfo] = useState({
    'ip': '47.15.22.226',
    'city': 'Delhi',
    'region': 'Delhi',
    'country': 'IN',
    'loc': '26.8393,80.9231',
    'org': 'AS55836 Reliance Jio Infocomm Limited',
    'postal': '226004',
    'timezone': 'Asia/Kolkata',
  });
  const [articles, setarticles] = useState([]);

  // navigator.geolocation.getCurrentPosition(success, error, options);
  // function success(pos) {
  //   var crd = pos.coords;
  //   console.log('Your current position is:');
  //   console.log(`Latitude : ${crd.latitude}`);
  //   console.log(`Longitude: ${crd.longitude}`);
  //   console.log(`More or less ${crd.accuracy} meters.`);
  //   setlocationData({
  //     Latitude:crd.latitude,
  //     Longitude:crd.longitude,
  //     Accuracy:crd.accuracy,
  //   });
  // }
  // function error(err) {
  //   console.warn(`ERROR(${err.code}): ${err.message}`);
  //   setlocationData({
  //     ErrorCode:err.code,
  //     ErrorMessage:err.message,
  //   });
  // }
  // var options = {
  //   enableHighAccuracy: true,
  //   timeout: 5000,
  //   maximumAge: 0,
  // };

  useEffect(() => {
    getLocation().then((res)=>{ 
    // console.log('location data is', res);
      setlocationInfo(res);
    });
  }, []);

  useEffect(() => {
    getProvinceNews(locationInfo.region).then((response) =>{
      //console.log('province is', JSON.stringify(response));
      setTimeout(setarticles(response), 1500);
    },
    ).catch((err)=>{
      console.log(err);
    });
  }, [locationInfo]);

  return (
    <div className='container-fluid'>
      {/* //bi bi-geo-alt-fill */}
      <Container>

        <Row>
          <Col>
          <Icon.GeoAltFill color="rgb(199, 6, 6)" size={30} className='location-icon' displayname={'Hi'} />
          <p>{locationInfo.city}{' '}{locationInfo.region}{' '}{locationInfo.country}</p>
          </Col>
        </Row>
      
      
      {/* <p>Hi your location is</p>
      <p>{locationData.Longitude}</p>
      <p>{locationData.Latitude}</p>
      <p>{locationData.Accuracy}</p>
      <p>{locationData?.ErrorCode}</p>
      <p>{locationData?.ErrorMessage}</p> */}
         {NewsGrid(articles)}
         </Container>
    </div>
  );
}

export default Province;
