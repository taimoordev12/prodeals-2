import React, { useState } from 'react';
import { withRouter } from 'react-router-dom'
import '../ProductDescription/ProductDescription.style.css';
import {Button,
Card,
CardTitle,
CardText,
Row, Col} from 'reactstrap';
// import {Button,
//   Card,
//   CardTitle,
//   CardText,
//   Row, Col , Carousel,
//   CarouselItem,
//   CarouselControl,
//   CarouselIndicators,
//   CarouselCaption} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationArrow, faPhone, faCar, faUser, faCalendar, faGasPump, faCog} from '@fortawesome/free-solid-svg-icons';
import Axios from '../../axios';
import { Carousel } from 'react-responsive-carousel';


// import { faTachometer} from '@fortawesome/react-fontawesome'

const ProductDescripton=(props)=> {

      // states
      const [activeIndex, setActiveIndex] = useState(0);
      const [animating, setAnimating] = useState(false);
      const [searchedCarData, setsearchedCarData] = React.useState([])
      const [userData, setUserData] = React.useState({})
      const [count,setCount] = React.useState("")
      // states

      React.useEffect(
        ()=>{
          let stateUserData = JSON.parse(localStorage.getItem("user"))
          const queryString = window.location.search;
          const urlParams = new URLSearchParams(queryString);
          const vehicleID = urlParams.get('vehicleID')
          setUserData(stateUserData)
          window.scrollTo(0, 0)
          Axios.get(`/specific/ad/${vehicleID}`)
         .then(res => {
            setsearchedCarData (res.data[0])
        })
        .catch(err => {
          console.log(err)
        })
       },[count])
       const handleRequestFeature =(vehicleID) => {
         Axios.get(`/ads/${vehicleID}/request-feature`).then(res=>{
           alert("You Feature Request sent Successfully!")
           setCount(vehicleID)
         })
       }
      // functions
    return (
       <div className="custom-container margin-class">
                <Row>
                  <Col md="8" className="mt-3">
                    <Card className="DescriptionCard">
                        <div className="container">
                            <CardText className="DescriptionProductTitle">{searchedCarData && searchedCarData.title ? searchedCarData.title : null}</CardText>
                            {searchedCarData && searchedCarData.isFeatured ?
                              <CardText>
                              <Button className=" ProductContact" color="success" >
                                Featured
                              </Button>
                              </CardText> 
                              : null }
                            <CardText className="ProductLocation">
                                <FontAwesomeIcon icon={faLocationArrow} />
                                <strong className="ml-1"> {searchedCarData && searchedCarData.location ? searchedCarData.location : null} </strong>
                            </CardText>
                            <Carousel>
                              {searchedCarData && searchedCarData.images ? searchedCarData.images.map((image,index)=>(
                                <div>
                                  <img className="" src={`http://localhost:4000/Routes/uploads/${image.filename}`} />
                                </div>
                              )) : null}
                              </Carousel>
                              <Row className="mt-3">
                                <Col md="3" sm="6" style={{border:"0.5px solid Gray", backgroundColor:"#e0e0e0", paddingTop:"20px", paddingBottom:"20px" }}>
                                    <div style={{textAlign:"center",marginTop:"15px"}}>
                                        <FontAwesomeIcon icon={faCalendar} size="2x" />
                                        <h4>{searchedCarData && searchedCarData.modelYear ? searchedCarData.modelYear : null}</h4>
                                    </div>
                                </Col>
                                <Col md="3" sm="6" style={{border:"0.5px solid Gray" , backgroundColor:"#e0e0e0", paddingTop:"20px", paddingBottom:"20px" }}>
                                    <div style={{textAlign:"center",marginTop:"15px"}}>
                                        <FontAwesomeIcon icon={faCar} size="2x" />
                                        <h4>{searchedCarData && searchedCarData.mileage ? searchedCarData.mileage : null}KMs</h4>
                                    </div>
                                </Col>
                                <Col md="3" sm="6" style={{border:"0.5px solid Gray" , backgroundColor:"#e0e0e0", paddingTop:"20px", paddingBottom:"20px" }}>
                                    <div style={{textAlign:"center",marginTop:"15px"}}>
                                        <FontAwesomeIcon icon={faGasPump} size="2x" />
                                        <h4>{searchedCarData && searchedCarData.engine ? searchedCarData.engine : null}cc</h4>

                                    </div>
                                </Col>
                                <Col md="3" sm="6" style={{border:"0.5px solid Gray" , backgroundColor:"#e0e0e0", paddingTop:"20px", paddingBottom:"20px" }}>
                                    <div style={{textAlign:"center",marginTop:"15px"}}>
                                        <FontAwesomeIcon icon={faCog} size="2x" />
                                        <h4>{ searchedCarData && searchedCarData.transmission ? searchedCarData.transmission : null}</h4>
                                    </div>
                                </Col>
                                <div className=" container " style={{overflow:"auto"}}>
                                    <h4 className="DescriptionProductFeature my-4"> Features </h4>
                                    <Row >
                                        <Col md="12">
                                            <table className="TableStyles" style={{width:"100%"}}>
                                                <tr>
                                                    <th className="TableStyles">Registered City</th>
                                                    <td className="TableStyles" style={{textAlign:"right"}}>{searchedCarData && searchedCarData.registeration ? searchedCarData.registeration : null}</td>
                                                </tr>
                                                <tr>
                                                    <th className="TableStyles">Company</th>
                                                    <td className="TableStyles" style={{textAlign:"right"}}>{searchedCarData && searchedCarData.company ? searchedCarData.company : null}</td>
                                                </tr>
                                                <tr>
                                                    <th className="TableStyles">Color</th>
                                                    <td className="TableStyles" style={{textAlign:"right"}}>{searchedCarData && searchedCarData.color ? searchedCarData.color : null}</td>
                                                </tr>
                                                <tr>
                                                    <th className="TableStyles">Engine Capacity</th>
                                                    <td className="TableStyles" style={{textAlign:"right"}}>{searchedCarData && searchedCarData.mileage ? searchedCarData.mileage : null}cc</td>
                                                </tr>
                                                <tr>
                                                    <th className="TableStyles">Ad Ref #</th>
                                                    <td className="TableStyles" style={{textAlign:"right"}}>{searchedCarData && searchedCarData._id ? searchedCarData._id : null}</td>
                                                </tr>
                                            </table>
                                        </Col>
                                    </Row>
                                </div>
                                <div className="">
                                    <h4 className="DescriptionProductFeature container my-4"> Sellers Comments </h4>
                                    <div className="SellersComments">
                                    <p className="container">{searchedCarData && searchedCarData.description ? searchedCarData.description : null}</p>

                                      <p className="container">Mention Prodeals when calling Seller to get a good deal.</p>
                                    </div>
                                </div>
                            </Row>
                        </div>
                    </Card>
                  </Col>
                  <Col md="4" className="mt-3">
                    <Row>
                      <Col xs="12">
                        <Card body className="CardStyles text-center">
                          <h3 className="PriceCard"> PKR {searchedCarData && searchedCarData.price ? searchedCarData.price : null}</h3>
                          <hr className="hr-class"/>
                          <Button className="ProductContactButton" color="success" > <FontAwesomeIcon className="mr-1" icon={faPhone} /> 0{searchedCarData && searchedCarData.contact ? searchedCarData.contact : null} </Button>
                        </Card>
                      </Col>
                      {userData && userData._id && searchedCarData && searchedCarData.user && searchedCarData.user.id && userData._id == searchedCarData.user.id ? 
                      <Col xs="12" className="mt-3">
                        <Card body className="CardStyles text-center">
                          <h3 className="SimpleTitle">Ad status</h3>
                          <hr className="hr-class"/>
                          <CardText className="SellerInformation mt-3">
                                 {searchedCarData.isApproved ?<h4 style={{color:"blue"}}>ad is Approved</h4> : <h4 style={{color:"blue"}}>ad is Not Approved</h4> }
                                {
                                  searchedCarData.featureRequest &&  !searchedCarData.isFeatured?
                                <h4 style={{color:"green"}}>Featured Request In Proccess</h4>
                                :searchedCarData.isFeatured ? null :
                                <p style={{color:"green"}}><span onClick={()=>handleRequestFeature(searchedCarData._id)} style={{textDecoration:"underline", cursor:"pointer"}}>Click Here</span> to Request Feature</p>
                                }
                                {
                                  searchedCarData.isFeatured ?
                                <h4 style={{color:"green"}}>Ad Is Featured</h4>
                                  : null
                                }
                          </CardText>
                        </Card>
                      </Col>
                      :
                      null 
                      }
                      {/* <Col xs="12" className="mt-3">
                        <Card body className="CardStyles text-center">
                          <h3 className="SimpleTitle">Seller Information</h3>
                          <hr className="hr-class"/>
                          <CardText className="SellerInformation mt-3">
                                <FontAwesomeIcon icon={faUser} size="2x" />
                                 <h4>{searchedCarData && searchedCarData.user ? searchedCarData.user.username : null}</h4>
                                <p>Member since 19 sep 2019</p>
                          </CardText>
                        </Card>
                      </Col> */}
                      <Col xs="12" className="mt-3">
                        <Card body className="CardStyles">
                          <h3 className="SimpleTitle">Safety tips for transaction</h3>
                          <hr className="hr-class"/>
                          <CardText>
                            <li>Use a safe location to meet seller</li>
                            <li>Avoid cash transactions</li>
                            <li>Beware of unrealistic offers</li>
                          </CardText>
                        </Card>
                      </Col>
                    </Row>
                  </Col>
                </Row>
            </div>
    )
}
export default  withRouter (ProductDescripton);