import React from 'react';
import { Container, Row, Col} from 'reactstrap';
import inspecbanner from '../../images/Inspectionbanner.png';
import ButtonCustom from '../ButtonCustom/ButtonCustom.component';
import {withRouter} from 'react-router-dom';
const redirect =()=>{
    console.log('asssd');
  
}
const Inspection =({history}) =>{
    console.log(history);
    return(
        <div>
        <React.Fragment>
        <Container>
            <Row>
            <Col md={12}>
            <img alt="InspectionBanner" src={inspecbanner} className="img-fluid" />
            </Col>
            </Row>
        </Container>

        <Container>
            <Row>
                <Col md={12} className="text-center mt-5">
                    <h2>Why Choose Prodeal ?</h2>
                </Col>
            </Row>

            <Row className="mt-5 text-center">
                <Col md={4} >
                    <h3>Engine Testing</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                </Col>
                <Col md={4}>
                <h3>Inner Body</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                </Col>
                <Col md={4}>
                <h3>External Body</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                </Col>
            </Row>
            <Row className="mt-5 text-center">
            <Col md={2}></Col>
            <Col md={4}>
            <h3>Accident Damage</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
            </Col>
            <Col md={4}>
            <h3>Road Testing</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
            </Col>
            <Col md={2}></Col>
            </Row>
        </Container>
        <Container>
            <Row>
                <Col md={12} className="text-center mt-5">
                    <ButtonCustom onClick1={() => { history.push(`${process.env.PUBLIC_URL}/inspectionform`)}} /*onClick={()=>history.push(`${process.env.PUBLIC_URL}/inspectionform`)} */>Book Now</ButtonCustom>
                </Col>
            </Row>
        </Container>
        </React.Fragment>
        </div>
    );

}

export default withRouter(Inspection);