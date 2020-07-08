import React from 'react';
import {Container, Row, Col, Form, Label, Input, FormGroup } from 'reactstrap';
import ButtonCustom from '../ButtonCustom/ButtonCustom.component';


const AccesoriesInformation =() =>{
    return(
        <React.Fragment>
        <Container>
            <Row>
                <Col md={12} className="text-center mt-3">
                    <h1>Accesories Information</h1>
                </Col>
            </Row>
        </Container>

        <Container className="mt-3">
            <Row>
                <Col md={3}></Col>
                <Col md={6}>
                <Form> 
                <FormGroup>
                <Label>Title</Label>
                <Input type="textarea" name="text" ></Input>
                </FormGroup>

                <FormGroup>
                <Label>City</Label>
                <Input type="textarea" name="text" ></Input>
                </FormGroup>

                <FormGroup>
                <Label>Category</Label>
                <Input type="textarea" name="text" ></Input>
                </FormGroup>

                <FormGroup>
                <Label>Condition</Label>
                <Input type="textarea" name="text" ></Input>
                </FormGroup>

                <FormGroup>
                <Label>Describe Your Accessory</Label>
                <Input type="textarea" name="text" ></Input>
                </FormGroup>

                <FormGroup>
                <Label>Expected Price</Label>
                <Input type="textarea" name="text" ></Input>
                </FormGroup>

                <FormGroup>
                <Label for="exampleFile">Upload Image</Label>
                    <Input type="file" name="file" id="exampleFile" />
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

export default AccesoriesInformation;