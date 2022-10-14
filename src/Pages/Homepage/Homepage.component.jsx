import React from 'react';
import Astronaut from '../../assets/images/Astronaut-helmet-bro.png'

import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody,  MDBBtn } from 'mdb-react-ui-kit';
import './Homepage.styles.scss';

const Homepage = () => {
  return (
    <MDBContainer className='homepageContainer'>
      <MDBRow className='g-0'>
        <MDBCol md='6' lg='5'>
          
                <div className='bg-image hover-zoom'>
      <img src={Astronaut}
              className='img-fluid w-100'
              alt='astronaut helmet'  />
    </div>
    
     
        </MDBCol>
        <MDBCol md='6' lg='7'>
          <MDBCard className='h-100'>
            <MDBCardBody>
              <h5 className='card-title'>My Work</h5>
              <p className='card-text'>
                Pick a Card, any card.
              </p>
              <MDBBtn href='https://www.dorjekirsten.com/bio' color='primary'>
                Draw
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Homepage;
