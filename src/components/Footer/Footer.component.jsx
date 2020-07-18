import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../Footer/Footer.style.css';
import logo from '../../logo.png';
import { useHistory } from 'react-router'

const Footer= (props) => {
    const history = useHistory()

    const handleFooterSearch = (type) => {
        if (window.location.href.includes("/prodeals/search")) {
            window.location.reload()
        }
        history.push({
            pathname: `${process.env.PUBLIC_URL}/search`,
            state: { type: type }
        });
    }
return (
    <Container className='mt-5 footer-cont' >
        <Row>
            <Col md={3} className='mt-5'>
            <img src={logo} alt='' className="img-fluid" /> 
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
            </Col>

            <Col md={3} className='mt-5'>
            <h5>Cars</h5>
            <ul style={{padding: "0",listStyleType: "none"}}>
                <li style={{cursor:"pointer"}} onClick={()=>handleFooterSearch("car")}>Find New Car</li>
                <li style={{cursor:"pointer"}} onClick={()=>handleFooterSearch("car")}>Find Used Car </li>
            </ul >
            </Col>

            <Col md={3} className='mt-5'>
            <h5>Bikes</h5>
            <ul style={{padding: "0",listStyleType: "none"}}>
                <li style={{cursor:"pointer"}} onClick={()=>handleFooterSearch("bike")}>Find New Bike</li>
                <li style={{cursor:"pointer"}} onClick={()=>handleFooterSearch("bike")}>Find Used Bike</li>
            </ul >
            </Col>

            <Col md={3} className='mt-5'>
                
            <h5>Bicycle</h5>
            <ul style={{padding: "0",listStyleType: "none"}}>
                <li style={{cursor:"pointer"}} onClick={()=>handleFooterSearch("bicycle")}>Find New Bicycle</li>
                <li style={{cursor:"pointer"}} onClick={()=>handleFooterSearch("bicycle")}>Find Used Bicycle </li>
            </ul >
            </Col>
        </Row>
        <Row>
        <Col md={3}></Col>
        <Col md={3}>
            <h5>Tractor</h5>
            <ul style={{padding: "0",listStyleType: "none"}}>
                <li style={{cursor:"pointer"}} onClick={()=>handleFooterSearch("tractor")}>Find New Tractor</li>
                <li style={{cursor:"pointer"}} onClick={()=>handleFooterSearch("tractor")}>Find Used Tractor </li>
            </ul >
        </Col>
        <Col md={3}>
        <h5>HTV</h5>
        <ul style={{padding: "0",listStyleType: "none"}}>
            <li style={{cursor:"pointer"}} onClick={()=>handleFooterSearch("htv")}>Find New HTV</li>
            <li style={{cursor:"pointer"}} onClick={()=>handleFooterSearch("htv")}>Find Used HTV </li>
        </ul >
        </Col>
        <Col md={3}>
        <h5>Rickshaws</h5>
        <ul style={{padding: "0",listStyleType: "none"}}>
            <li style={{cursor:"pointer"}} onClick={()=>handleFooterSearch("rickshaws")}>Find New Rickshaws</li>
            <li style={{cursor:"pointer"}} onClick={()=>handleFooterSearch("rickshaws")}>Find Used Rickshaws </li>
        </ul >
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
