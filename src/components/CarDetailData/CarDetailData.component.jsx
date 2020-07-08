import React from 'react'
import CarDetail from '../../components/CarDetails/CarDetail.component';
import {Row,Col,Container } from 'reactstrap';
import CarImage from '../../images/CarImage.jpg'
const CarDetailData =()=>{
    const CarData= [
                {
                image:{CarImage},
                title: "Honda Civic  2019 Oriel 1.8 i-VTEC CVT for Sale",
                description:"Lahore",
                description1:"2019 | 18520 Km | Petrol | 1800cc | Automatic" 
            },
            {
                image:{CarImage},
                title: "Honda Civic  2019 Oriel 1.8 i-VTEC CVT for Sale",
                description:"Lahore",
                description1:"2019 | 18520 Km | Petrol | 1800cc | Automatic" 
            },
            {
                image:{CarImage},
                title: "Honda Civic  2019 Oriel 1.8 i-VTEC CVT for Sale",
                description:"Lahore",
                description1:"2019 | 18520 Km | Petrol | 1800cc | Automatic" 
            },
            {
                image:{CarImage},
                title: "Honda Civic  2019 Oriel 1.8 i-VTEC CVT for Sale",
                description:"Lahore",
                description1:"2019 | 18520 Km | Petrol | 1800cc | Automatic" 
            },
            {
                image:{CarImage},
                title: "Honda Civic  2019 Oriel 1.8 i-VTEC CVT for Sale",
                description:"Lahore",
                description1:"2019 | 18520 Km | Petrol | 1800cc | Automatic" 
            }
            ]
        
    
return(
    <Container className="mt-5">
        <Row>
         <Col md={12}> <h1 className="text-center underline mb-5 color-main-2">Used Car For Sale In Pakistan</h1></Col>
         </Row>
         <Row>
             <Col>
            { CarData.map((car) => 
            <CarDetail person={car} />
            )}
             </Col>
         </Row>
           </Container>

        )

    }
        

export default CarDetailData;