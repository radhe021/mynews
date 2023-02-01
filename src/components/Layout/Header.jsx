/* eslint-disable react/jsx-no-undef */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* /* eslint-disable @typescript-eslint/no-unused-vars*/
import React from 'react';

import './Header.css';

import moment from 'moment';
import { useContext, useEffect, useRef, useState  } from 'react';
import { Col, Container, Figure, Image, Nav, Navbar, Row  } from 'react-bootstrap';
//import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import * as Icon from 'react-bootstrap-icons';
import { useHistory } from 'react-router-dom';

import getLocation from './../../apiServices/locationAPI';
import logo from './../../resources/img/logo-white.jpg';
import { getCurrentLocation, Login, toggleTheme } from './../../store/action';
import StoreContext from './../../store/StoreContext';

function Header() {
  const date = moment().format('LLLL');
  const [activeLink, setactiveLink] = useState(localStorage.getItem('activeLink'));
  const navLinkRef = useRef(null);
  const [searchTerm, setsearchTerm] = useState('');
  const LinkKeys = ['india', 'province', 'international', 'tech'];
  const history = useHistory();
  
  console.log('curr loca is ', activeLink);

  function handleSelect(selectedKey) {
    localStorage.setItem('activeLink', `/${selectedKey}`);
    setactiveLink(selectedKey) ;
    LinkKeys.forEach((key)=>{
      document.getElementById(key).removeAttribute('href') ;
    });
    let key = document.getElementById(selectedKey);
    key.setAttribute('href', localStorage.getItem('activeLink') ?? selectedKey);
    history.push(`/${selectedKey}` );
    // switch (selectedKey) {
    //   case 'india':
    //     history.push(`/${selectedKey}` );
    //     break;
    //   case 'state':
    //     history.push(`/${selectedKey}` );
    //     break;
    //   case 'international':
    //     history.push(`/${selectedKey}` );
    //     break;
    //   case 'tech':
    //     history.push(`/${selectedKey}` );
    //     break;
    //   default:
    //     history.push(`/${selectedKey}` );
    //     break;
    // }
  }
  function searchNews(e) {
    e.preventDefault();
    history.push({
      pathname: '/SearchNews',
      search: `?query=${searchTerm}`,
      state: { searchTerm: searchTerm },
    });
  }
  const  { state, dispatch } = useContext(StoreContext);
  console.log('state is', state);
  console.log('Dispatch is ', dispatch);

  useEffect(() => {
    setactiveLink(localStorage.getItem('activeLink'));
    getLocation().then((res)=>{ 
      console.log('location data is', res);
      // Login();
    });
  }, []);

  return (
		<>
    <Navbar >
    <Container>
    <Nav className='Header-Nav' activeKey={ activeLink } variant="pill" fill 
      onSelect={(selectedKey) => { handleSelect(selectedKey); }}
      style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', backgroundColor: '#c70606', height: '6rem', color: 'white' }}>
      <Nav.Item className='Nav-item'>
        <Nav.Link href= "india">
          {/* <Figure
            style={{ width: '70px', height: '70px', display: 'inline-flex' }}
          >
            <Figure.Image
              style={{ width: '70px', height: '70px', borderRadius: '5rem' }}
              alt="The HeadLiner"
              src={logo} />
              </Figure> */}
            {/* <Figure.Caption style={{ fontSize: '15px', color: 'white', paddingLeft:'5px' }}>
            <bold><h5>The HeadLiner</h5></bold>
            </Figure.Caption> */}
          
          <Icon.Newspaper size={50} color='white'/>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item className='Nav-item'>
        <Nav.Link id ='india' style={{ color:'white' }} eventKey='india' href='/india' ref={ navLinkRef } >India</Nav.Link>
      </Nav.Item>
      <Nav.Item className='Nav-item'>
        <Nav.Link id ='province' style={{ color:'white' }} eventKey='province' ref={ navLinkRef } >State</Nav.Link>
      </Nav.Item>
      <Nav.Item className='Nav-item'>
        <Nav.Link id= 'international' style={{ color:'white' }} eventKey='international' ref={ navLinkRef } >International</Nav.Link>
      </Nav.Item>
      <Nav.Item className='Nav-item'>
        <Nav.Link id= 'tech' style={{ color:'white' }} eventKey='tech' ref={ navLinkRef } >Technology</Nav.Link>
      </Nav.Item>
  <form className="form-inline" onSubmit={searchNews} >
  <input
    className="form-control mr-sm-2 Nav-SearchBar"
    type="search"
    placeholder="Search"
    aria-label="Search"
    value={searchTerm}
    // eslint-disable-next-line no-undef
    onChange={ e => setsearchTerm(e.target.value)}
    required
  />
  <button className="btn Nav-SearchBar-Btn" type="submit" >
   <Icon.Search size={16} className='srch-icon'/>
  </button>
</form>
      <Nav.Item>
          <Icon.PersonCircle size={60}  style={{ width: '40px', height: '40px', borderRadius: '5rem' }} className='srch-icon' onClick={()=> alert('Dev User')}/>
      </Nav.Item>
    </Nav>
    <Nav  className='Nav-date' >
        <Nav.Item>
          {date}
        </Nav.Item>
      </Nav>
      </Container>
      </Navbar>
      </>
  );
}

export default Header;
