import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './Footer.css'


function Footer() {

    
    return(
        <footer>
            <Container className='footer' fluid={true}>
                    <Row className="justify-content-between p-3">
                        {/* <Col className="p-0" md={3} sm={12}>
                            Ashvinder Suri
                        </Col> */}
                        <Col className="p-0 d-flex justify-content-between" md={3}>
                            This site was made by Ashvinder Suri.
                        </Col>
                    </Row>
            </Container>
        </footer>
    );

}

export default Footer;