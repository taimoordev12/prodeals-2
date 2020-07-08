import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../Footer/Footer.style.css';
import logo from '../../logo.png';
const Footer= () => {

return (
    <Container className='mt-5 footer-cont' >
        <Row>
            <Col md={3} className='mt-5'>
            <img src={logo} alt='' className="img-fluid" /> 
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
            </Col>

            <Col md={3} className='mt-5'>
            <h5>Cars</h5>
                <p>Find New Car <br/> Find Used Car <br/> Car Price Calculator</p>
            </Col>

            <Col md={3} className='mt-5'>
            <h5>Bikes</h5>
                <p>Find New Bike <br/> Find Used Bike <br/> Bike Price Calculator</p>
            </Col>

            <Col md={3} className='mt-5'>
            <h5>Bicycle</h5>
                <p>Find New Bicycle <br/> Find Used Bicycle <br/> Bicycle Price Calculator</p>
            </Col>
        </Row>
        <Row>
        <Col md={3}></Col>
        <Col md={3}>
            <h5>Tractor</h5>
                <p>Find New Tractor <br/> Find Used Tractor <br/> Tractor Price Calculator</p>
        </Col>
        <Col md={3}>
        <h5>HTV</h5>
                <p>Find New HTV <br/> Find Used HTV <br/> HTV Price Calculator</p>
        </Col>
        <Col md={3}>
        <h5>Rickshaws</h5>
        <p>Find New Rickshaws <br/> Find Used Rickshaws <br/> Rickshaws Price Calculator</p>
        </Col>
        </Row>
        <Row>
            <Col md={12} className="text-center mt-3">
                <p>Copyright © 2020 Pro Deals. All rights reserved. <br/>Powered by Headless.io</p>
            </Col>
        </Row>
   </Container>
    
);


}

export default Footer;
