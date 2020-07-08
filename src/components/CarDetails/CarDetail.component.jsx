import React from 'react';
import {Col, Container, Row} from 'reactstrap';

const CarDetail=({image,title,description,description1})=> {
    return (
      <Container>
          <Row>
      <Col md={4} className="text-center mt-5">
      <img  src={image} alt=" " />

      </Col>
        <Col md={8}>
    <h1>{title}</h1>
    <p>{description}<br />{description1}</p>
      </Col>
      </Row>
      </Container>
    )
}
export default CarDetail;
