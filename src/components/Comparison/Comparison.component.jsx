import React from 'react';
import { Container, Col, Row } from 'reactstrap';
import ComparisonBanner from '../../images/ComparisonBanner.png';
import FormField from '../Form-Field/FormField.component';
import ButtonCustom from '../ButtonCustom/ButtonCustom.component';
import '../../components/Comparison/Comparison.style.css'

const Comparison =() =>{

        
    const MakeData = ['audi','suzuki','corolla'];
    return(
        <React.Fragment>
            <Container>
                <Row>
                    <Col md={12}>
                    <img src={ComparisonBanner} alt='' className="img-fluid" />
                    </Col>
                </Row>
            </Container>

            <Container className ="mt-5">
            <Row>
                <Col md={3}></Col>
                <Col md={3} className="">
             <FormField PlaceHolder='Choose Making' Type='select' OptionData={MakeData}/>
         </Col>
         <Col md={3} className=""> 
         <FormField PlaceHolder='Choose Model'Type='select' OptionData={MakeData}/>
        </Col>
        <Col md={3}></Col>
            </Row>
            <Row>
                <Col md={12} className="text-center mt-3">
                <ButtonCustom longbtn>Compare</ButtonCustom>
                </Col>
            </Row>
            </Container>

            <Container className="mt-5">
                <Row>
                    <Col md={12} className="text-center">
                        <h2>About Cars Comparison</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} className="text-center">
                        <h2>Price</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} className="text-center">
                        <h2>Specification</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} className="text-center">
                        <h2>Features</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </Col>
                </Row>
            </Container>
            </React.Fragment>
    );
}

export default Comparison;