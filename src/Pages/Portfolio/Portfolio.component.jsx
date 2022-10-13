import React from 'react';
import {
  MDBBtn,
  MDBCarousel,
  MDBCarouselItem,
  MDBContainer,
} from 'mdb-react-ui-kit';

import Nestz from '../../assets/images/Nestz.jpg';
import Galaxy from '../../assets/images/beautifulGalaxy.jpeg';
import Hung from '../../assets/images/hung-1.jpg';

import './Portfolio.styles.scss'

const Portfolio = () => {
  return (
    <MDBContainer className='portfolioContainer'>
    <MDBCarousel showControls showIndicators className='portfolioCarousel'>
      <MDBCarouselItem
        className='w-100  d-block'
        itemId={1}
        src={Nestz}
        alt='a tiny home'
      >
        <h5>NESTZ</h5>
        <p>An e-commerce website for tiny homes.</p>
        <MDBBtn color='white'>
          <a href='https://nestz.life/'>Visit Site</a>
        </MDBBtn>
      </MDBCarouselItem>
      <MDBCarouselItem
        className='w-100  d-block'
        itemId={2}
        src={Galaxy}
        alt='a beautiful galaxy'
      >
        <h5>Astral Tunes</h5>
        <p>A website that creates music from the position of the planets</p>
        <MDBBtn color='white'>
          <a href='https://astraltunes.com/'>Visit Site</a>
        </MDBBtn>
      </MDBCarouselItem>
      <MDBCarouselItem
        className='w-100  d-block'
        itemId={3}
        src={Hung}
        alt='a colorful painting'
      >
        <h5>Andrea Traber</h5>
        <p>An artist portfolio website.</p>
        <MDBBtn color='white'>
          <a href='https://andreatraber.com/'>Visit Site</a>
        </MDBBtn>
      </MDBCarouselItem>
    </MDBCarousel>
    </MDBContainer>
  );
}
export default Portfolio;
