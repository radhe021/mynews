/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * /* eslint-disable @typescript-eslint/no-unused-vars
 *
 * @format
 */

/** @format */
import React from 'react'
import './Layout.css';

import { Col, Image, Row } from 'react-bootstrap';

function Footer() {
  return (
		<footer
			className="app-footer"
			style={{
			  display: 'flex',
			  flexDirection: 'row',
			  alignItems: 'center',
			  justifyContent: 'space-evenly',
			  backgroundColor: '#c70606',
			  height: '3rem',
			  color: 'white',
			}}
		>
			It's a free news service powered by NewsAPI
		</footer>
  );
}

export default Footer;
