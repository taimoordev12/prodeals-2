import React from 'react'
import '../ServiceSection/ServiceSection.style.css';
import { Container, Row,Col} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTasks,faCar,faHandshake,faCarSide,faTools,faCalculator} from '@fortawesome/free-solid-svg-icons'

import ServiceItem from '../ServiceItem/ServiceItem.component';

const ServiceData =[{
     id:1,
    icon:<FontAwesomeIcon icon={faTasks} />,
    title:'Auction Verfication',
    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,'
     },
     {
        id:2,
       icon:<FontAwesomeIcon icon={faCar} />,
       title:'Modification',
       description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,'
        },
        {
            id:3,
           icon:<FontAwesomeIcon icon={faHandshake} />,
           title:'AUtion Verfication',
           description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,'
            },
            {
                id:4,
               icon:<FontAwesomeIcon icon={faCarSide} />,
               title:'Rentals',
               description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,'
                },
                {
                    id:5,
                   icon:<FontAwesomeIcon icon={faTools} />,
                   title:'Inspection',
                   description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,'
                    },
                    {
                        id:6,
                       icon:<FontAwesomeIcon icon={faCalculator} />,
                       title:'price Calculator',
                       description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,'
                        }
    ]

const ServiceSection = ()=> {

    return (
        <Container className="mt-5">
      <Row>
          <Col md={12} className="text-center underline">
              <h1>Our Services</h1>
          </Col>
      {ServiceData.map((data)=><ServiceItem key={data.id} {...data}/>)}
      </Row>
      </Container>
    )
}
export default  ServiceSection;
