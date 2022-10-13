import React, { useState, } from 'react';
import { Link, Outlet } from 'react-router-dom';
import {
  MDBIcon,
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarLink,
  MDBCollapse
} from 'mdb-react-ui-kit';

import Sunflowers from '../../assets/images/EarthBuddha.png';

import './navigation.styles.scss';

const Navigation = () => {
  const [showNavSecond, setShowNavSecond] = useState(false);
  return (
<div >
    <div className='navigation'>
    <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer fluid>

        <MDBNavbarToggler
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowNavSecond(!showNavSecond)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar show={showNavSecond}>
          <MDBNavbarNav>
            <MDBNavbarLink href='works'>WEBSITES</MDBNavbarLink>
            <MDBNavbarLink href='bio'>BIO</MDBNavbarLink>
            <MDBNavbarLink href='contact'>CONTACT</MDBNavbarLink>
          </MDBNavbarNav>
        </MDBCollapse>
        <MDBNavbarBrand href='HOME'>
          <div>

        Dorje Kirsten 
          </div>
          <div >

        <img className='Logo'
              src={Sunflowers}
              height='60'
              alt='Buddha Eyes'
              loading='lazy'
            />
          </div>
          </MDBNavbarBrand>
      </MDBContainer>
    </MDBNavbar>
    </div>
<Outlet/>
      
</div>



)}


export default Navigation
