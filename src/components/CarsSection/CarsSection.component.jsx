import React, { Component } from 'react'
import '../CarsSection/CarsSection.style.css';
import car1 from '../../images/car1.jpg';
import Carousel from "react-multi-carousel";
import Axios from '../../axios'
import "react-multi-carousel/lib/styles.css";
import {Row,Col,Container, Card, CardImg, CardText, CardBody, Button} from 'reactstrap';
import { Spinner } from 'reactstrap';
import { useHistory } from 'react-router'




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
      const history = useHistory()
      const [approvedCarData, setApprovedCarData] = React.useState([])
      const [loader, setLoader] = React.useState("true")

      const handleViewAdd = (vehicleID) => {
        history.push({
          pathname: `${process.env.PUBLIC_URL}/product/description/?vehicleID=${vehicleID}`
        });
      }

      React.useEffect (
        ()=>{
          Axios.get("/vehicles")
          .then(res => {
              setLoader("true")
              setApprovedCarData (res.data)
              setLoader("false")
          })
          .catch(err => {
            console.log(err)
          })
        },[]
      )
        
    
return(
    <React.Fragment>
    <Container className="mt-5">
        <Row>
         <Col md={12}> <h1 className="text-center underline mb-5 color-main-2">New/Used Vehicles</h1></Col>
         </Row>
           </Container>
            <Carousel responsive={responsive}>
            { approvedCarData.length >= 1 && loader === "false" ? approvedCarData.map((car, index) => (

              <Card key={index}>
                <CardImg top width="100%" className=" custom-featured-img img-fluid img-responsive img-thumbnail" src={`http://localhost:4000/Routes/uploads/${car.images[0] ? car.images[0].filename : ""}`} alt="Card image cap" />
                <CardBody>
                  <CardText style={{maxHeight:"30px"}}>
                    <div className="right">
                      <CardText className="">
                          <strong style={{marginLeft:"10px"}}>PKR {car.price}</strong>
                      </CardText>
                    </div>
                  <CardText className="ProductTitle">{car.title}</CardText>
                  </CardText>
                  <CardText> 
                    <p className="ForLastSpan">
                      <span className="ProductShortDetails">{car.modelYear}</span>
                      <span className="ProductShortDetails">{car.mileage}KMs</span>

                      <span>{car.transmission}</span>
                    </p>
                    </CardText>
                </CardBody>
                <Button
                onClick = {()=>handleViewAdd(car._id)}
                type="button"
                className="mb-2 mx-3"
                color="primary">
                  View
                </Button>
                </Card>
              ))
              :approvedCarData.length <= 0 && loader === "false"
              ?
              <div style={{margin: "20% auto", fontSize:"24px", fontWeight:"700", color:"#7a7a7a" }}>
                No Record Found!
              </div>
              :  <Spinner  color="primary" style={{margin: "20% auto", width: '7rem', height: '7rem' }} />}
            </Carousel>

        </React.Fragment>

        )

    }
        

export default CarsSection;