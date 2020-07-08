import React from 'react';
import {Container, Row, Col, Form, Label, Input, FormGroup } from 'reactstrap';
import ButtonCustom from '../ButtonCustom/ButtonCustom.component';


const InspectionForm =() =>{
    return(
        <React.Fragment>
        <Container>
            <Row>
                <Col md={12} className="text-center mt-3">
                    <h1>Book Your Car For Inspection Here</h1>
                </Col>
            </Row>
        </Container>

        <Container className="mt-3">
            <Row>
                <Col md={3}></Col>
                <Col md={6}>
                <Form> 
                <FormGroup>
                <Label>Model Year</Label>
                <Input type="textarea" name="text" ></Input>
                </FormGroup>

                <FormGroup>
                <Label>Car Info</Label>
                <Input type="textarea" name="text" ></Input>
                </FormGroup>

                <FormGroup>
                <Label>Name</Label>
                <Input type="textarea" name="text" ></Input>
                </FormGroup>

                <FormGroup>
                <Label>Phone</Label>
                <Input type="textarea" name="text" ></Input>
                </FormGroup>

                <FormGroup>
                <Label>City</Label>
                <Input type="textarea" name="text" ></Input>
                </FormGroup>

                <FormGroup check>
            <Label check>
          <Input type="checkbox" />{' '}
                        Send me relevent news and updates 
            </Label>
                </FormGroup>
                <FormGroup className="text-center mt-3" >
                <ButtonCustom longbtn >Submit</ButtonCustom>
                </FormGroup>
            </Form>


                </Col>
                <Col md={3}></Col>
            </Row>
        </Container>
            
        </React.Fragment>
    )

}

export default InspectionForm;