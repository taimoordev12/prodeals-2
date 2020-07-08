import React, { Component } from 'react'
import '../CarsSection/CarsSection.style.css';
import CarsItem from '../CarsItem/CarsItem.component';
import {Row,Col,Container } from 'reactstrap';
import car1 from '../../images/car1.jpg';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const CarsSection=()=>{
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4,
          slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };
    const Cars= [
                {
                name: "Used Vitz 2015",
                image:{car1},
                description:"PKR 100000",
                description1:"Islamabad"
            },
            {
                name: "New Corola 2018",
                image:{car1},
                description:"PKR 1200000",
                description1:"Lahore"
            },
            {
                name: "New Civic 2019",
                image:{car1},
                description:"PKR 800000",
                description1:"Karachi"
            },
            {
                name: "New Civic 2019",
                image:{car1},
                description:"PKR 800000",
                description1:"Karachi"
            }, {
                name: "New Civic 2020",
                image:{car1},
                description:"PKR 800000",
                description1:"Karachi"
            }

            ]
        
    
return(
    <React.Fragment>
    <Container className="mt-5">
        <Row>
         <Col md={12}> <h1 className="text-center underline mb-5 color-main-2">Featured Cars</h1></Col>
         </Row>
           </Container>
            <Carousel responsive={responsive}>
            { Cars.map((car) => 

            <CarsItem key={car.name} person={car} />

            )}
            </Carousel>

        </React.Fragment>

        )

    }
        

export default CarsSection;