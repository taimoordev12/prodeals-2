import React from 'react'
import {Col} from 'reactstrap';

const TabItem=({icon,title})=> {
    return (
        
                <Col  xs={4} className="text-center">
                <h2>{icon}</h2>
                 <h6>{title}</h6>
                </Col>
               
          
    )
}

export default TabItem;
