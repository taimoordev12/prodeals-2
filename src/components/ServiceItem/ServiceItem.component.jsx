import React from 'react'
import {Col} from 'reactstrap';

const ServiceItem=({title,icon,description})=> {
    return (
      <Col md={4} className="text-center mt-5">
          <h1 >{icon}</h1>
          <h4 >{title}</h4>
            <p>{description}</p>
      </Col>
    )
}
export default ServiceItem;
