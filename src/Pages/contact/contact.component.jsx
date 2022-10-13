import React from 'react';
import { MDBRow, MDBCol, MDBContainer } from 'mdb-react-ui-kit';
import Mailer from '../../Components/Email/email.component.jsx';
import Email from '../../assets/images/mailbox.jpeg';

import './contact.styles.scss';

const Contact = () => {

  return (

    <div className="contactContainer">
      <div className="contactForm">
        <MDBContainer>
          <MDBRow>
            <MDBCol >
            <img
      src={Email}
      className='img-thumbnail'
      alt='a phone to contact Dorje Kirsten'
    />
              <h1 className="contactTitle">Send me an inquiry</h1>
    
        <Mailer />
            </MDBCol>
      </MDBRow>
    </MDBContainer>
      </div>
    </div>

  );

}
export default Contact;
