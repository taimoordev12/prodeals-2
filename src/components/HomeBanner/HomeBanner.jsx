import React,{Component} from 'react'
import {Container,Row,Col} from 'reactstrap';
import FormField from '../Form-Field/FormField.component';
import '../HomeBanner/HomeBanner.style.css';
import ButtonCustom from '../ButtonCustom/ButtonCustom.component';

const HomeBanner=()=> {
    const MakeData = ['audi','suzuki','corolla'];
    const ModelData = ['audi','suzuki','corolla'];
    const PriceData = ['1 lac to 10 lac','10 lac to 20 lac','20lac to 50 lac'];


    return (
        <Container fluid className="bg-img">
        <Row className="h-100">
            <Col md={12} className='text-white text-center align-self-end mb-5'>
                <h1>Find Used Cars in Pakistan</h1>
                <h4>With thousands of cars, we have just the right one for you</h4>
                </Col>
                <Col></Col>

         <Col md={3} className="">
             <FormField PlaceHolder='Choose Making' label='Choose Making' Type='select' OptionData={MakeData}/>
         </Col>
         <Col md={3} className=" "> 
         <FormField PlaceHolder='Choose Model' label='Choose Model' Type='select' OptionData={ModelData}/>
        </Col>
         <Col md={3} className=" ">
         <FormField PlaceHolder='Choose Price' label='Choose Price' Type='select' OptionData={PriceData}  />

         </Col>
         <Col md={2} className="">
             <h4 className="invisible mt-2">test</h4>
<ButtonCustom longbtn>Search</ButtonCustom>
         </Col>
         <Col></Col>


        </Row>
      </Container>
    )
}

export default  HomeBanner;