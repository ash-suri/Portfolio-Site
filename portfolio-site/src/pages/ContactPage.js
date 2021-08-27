import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row } from 'react-bootstrap';


import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';
import './Contact.css';
 

export default function IconsSocial() {
    return(
        
        <Row className="social-container">
             <a href="https://github.com/ash-suri" target="_blank" rel="noopener noreferrer" className="github social">
                 <FontAwesomeIcon icon={faGithub} size="2x"/>
            </a>

            <a href="https://www.linkedin.com/in/ash-suri/" target="_blank" rel="noopener noreferrer" className="linkedin social">
                 <FontAwesomeIcon icon={faLinkedin} size="2x"/>
            </a>

            <a href = "mailto: ashvsuri@gmail.com" target="_blank" rel="noopener noreferrer" className="email social">
                <FontAwesomeIcon icon={faEnvelope} size="2x"/>
            </a>
        </Row>
  
    )
}