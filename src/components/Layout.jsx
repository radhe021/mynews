import React from 'react'
import {Row ,Col,Image} from 'react-bootstrap';
import moment from "moment";
import "./Layout.css"
import logo from './../resources/img/logo-white.jpg'

function Layout(props) {
  var currentTime = new Date();

var currentOffset = currentTime.getTimezoneOffset();
var ISTOffset = 330;   // IST offset UTC +5:30 
var ISTTime = new Date(currentTime.getTime() + (ISTOffset + currentOffset)*60000);
var hoursIST = ISTTime.getHours();
const AMorPM = hoursIST >= 12 ? "PM":"AM";
hoursIST = hoursIST <= 12 ? hoursIST :(hoursIST -12 );
var minutesIST = ISTTime.getMinutes();


// const Time = (hoursIST + ":" + minutesIST + " "+AMorPM)
const Time = moment().format('LT');
const date = moment().format('LLLL');//new Date().toString();


  return (
    <div>
      <header>
      <Row> 
        <Col>
              <Image className="logo-img" src={logo} alt="logo" width="100" height="100"/>
             </Col>
              {/* <Row> */}
              <Col>
                <h1> <strong> The HeadLiner </strong> </h1>
                </Col>
              {/* </Row>
              <Row> */}
              {/* <h3><strong>{Time}</strong></h3> <h3>{date}</h3> */}
              <Col>
              <h3><strong>{date}</strong> </h3>
              {/* </Row> */}
              </Col>
      </Row>
      </header>
      <div className="app-body">
      {props.children}</div>
      <footer className="app-footer" >It's a free news service powered by NewsAPI</footer>
    </div>
  )
}

export default Layout
