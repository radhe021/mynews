/* eslint-disable import/extensions */
/* eslint-disable @typescript-eslint/no-unused-vars */
/** @format */
import './Layout.css';

import moment from 'moment';
import { Col, Image, Row } from 'react-bootstrap';

import logo from './../../resources/img/logo-white.jpg';
import Footer from './Footer';
import Header from './Header';

function Layout(props) {
  return (
		<div>
			<Header />
			<div className="app-body">{props.children}</div>
			<Footer />
		</div>
  );
}

export default Layout;
