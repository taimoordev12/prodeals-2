import React, { useState } from 'react';
import { withRouter } from 'react-router-dom'
import '../../components/CarsSection/CarsSection.style.css';
import '../Profile/profile.styles.css'
import {Row,Col,Container, Card, CardImg, CardText, CardBody, CardTitle, Button} from 'reactstrap';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Axios from '../../axios'
import { useEffect } from 'react';
import { Spinner } from 'reactstrap';
import { useHistory } from 'react-router'

const Profile=(props) => {
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
      const [userVehicles, setuserVehicles] = React.useState([])
      const [loader, setLoader] = React.useState("true")
      const [userData, setUserData] = React.useState({})
      const [count, setCount] = React.useState("")

      const handleViewAdd = (vehicleID) => {
        history.push({
          pathname: `${process.env.PUBLIC_URL}/product/description/?vehicleID=${vehicleID}`
        });
      }
      const handleDeleteAdd = (vehicleID) =>{
        Axios.delete(`/ads/${vehicleID}`).then(res=>{
          alert("Ad Deleted Successfully!")
        })
        setCount(vehicleID)
      }
    useEffect (
        ()=>{
        const userDataStorage = JSON.parse(localStorage.getItem("user"))
        setUserData(userDataStorage)
        Axios.get(`/profile/${userDataStorage._id}`)
        .then(res=>{
          // console.log(res.data)
            setLoader("true")
            setuserVehicles(res.data.data)
            setLoader("false")
        })
        .catch(err=>{
            console.log(err)
        })
        },[count]
    )
    console.log(userVehicles)
return(
    <React.Fragment>
    <Container className="mt-5">
        <Row>
            <Col></Col>
            <Col sm={10}>
                <Card className="ProfileCardStyles">
                <CardBody>
                <CardTitle style={{textAlign:"center"}}> <strong>Your Profile </strong></CardTitle>
                <CardText>
                    <div className="right">
                    <CardText className="">
                    <strong style={{marginRight:"20px"}}>{userData  && userData.firstName ? userData.firstName : null} {userData  && userData.lastName ? userData.lastName : null }</strong>
                    </CardText>
                    </div>
                    <CardText className="" style={{marginLeft:"20px"}}><strong>Name </strong></CardText>
                </CardText>
                {/* <CardText>
                    <div className="right">
                    <CardText className="">
                        <strong style={{marginRight:"20px"}}>{userData  && userData.lastName ? userData.lastName : null }</strong>
                    </CardText>
                    </div>
                    <CardText className="" style={{marginLeft:"20px"}}><strong>Last Name </strong></CardText>
                </CardText> */}
                <CardText>
                    <div className="right">
                    <CardText className="">
                        <strong style={{marginRight:"20px"}}>{ userData  && userData.email ?  userData.email : null}</strong>
                    </CardText>
                    </div>
                    <CardText className="" style={{marginLeft:"20px"}}><strong>Email</strong></CardText>
                </CardText>
                {userData && userData.phone ? 
                <CardText>
                    <div className="right">
                    <CardText className="">
                        <strong style={{marginRight:"20px"}}> 0{userData  && userData.phone ? userData.phone : null}</strong>
                    </CardText>
                    </div>
                    <CardText className="" style={{marginLeft:"20px"}}><strong>Contact#</strong></CardText>
                </CardText>
                : null}
                </CardBody>
                </Card>
            </Col>
            <Col></Col>

        
         <Col md={12}> <h1 className="text-center underline mb-5 mt-5 color-main-2">Your Ads</h1></Col>
         {userVehicles.length >= 1 && loader === "false" ? userVehicles.map((car, index) => 
            <Col md="4" className="mt-2">
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
                    <CardText className="FeaturedTitle">{car.isFeatured ? "Featured" : null}</CardText>
                    
                </CardBody>
                <Button
                onClick = {()=>handleViewAdd(car._id)}
                type="button"
                className="mb-2 mx-3"
                color="primary">
                  View
                </Button>
                <Button
                onClick = {()=>handleDeleteAdd(car._id)}
                type="button"
                className="mb-2 mx-3"
                color="danger">
                  Delete
                </Button>
              </Card>
            </Col>  
            )
            :userVehicles.length <= 0 && loader === "false"
            ?
            <div style={{margin: "5% auto", fontSize:"24px", fontWeight:"700", color:"#7a7a7a" }}>
                No Ads To Show!
            </div>
            :  <Spinner  color="primary" style={{margin: "20% auto", width: '7rem', height: '7rem' }} />}
         
        </Row>
        </Container>
        </React.Fragment>
)
}

export default withRouter(Profile)