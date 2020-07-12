import React, { useState } from 'react';
import { withRouter } from 'react-router-dom'
import { useHistory } from 'react-router'
import '../SearchPage/SearchPage.style.css';
import {Button,Input, Card, CardTitle,CardImg, CardText, Row, Col, UncontrolledTooltip } from 'reactstrap';
import Select, { components } from 'react-select';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationArrow, faPhone } from '@fortawesome/free-solid-svg-icons';
// import history from '../../history';
import Axios from '../../axios';
import { Spinner } from 'reactstrap';

const SearchPage=()=> {
  // Default Constants
    const MinPrice = [
        { value: '100000', label: '200000' },
        { value: '200000', label: '300000' },
        { value: '300000', label: '400000' }
      ];
      const MaxPrice = [
        { value: '100000', label: '200000' },
        { value: '200000', label: '300000' },
        { value: '300000', label: '400000' }
      ]
      const CityOptions = [
        { value: 'Lahore', label: 'Lahore' },
        { value: 'Islamabad', label: 'Islamabad' },
        { value: 'Karachi', label: 'Karachi' }
      ]
      const CarOptions = [
        { value: 'Audi', label: 'Audi' },
        { value: 'Suzuki', label: 'Suzuki' },
        { value: 'Cultus', label: 'Cultus' }
      ]
      // Default Constants

      // states
      const history = useHistory()
      const [searchCarData, setsearchCarData] = React.useState([])
      const [loader, setLoader] = React.useState("true")
      // states

      // constants
      const TooltipContent = ({ scheduleUpdate }) => {
        React.useEffect(() => {
          const intervalId = setInterval(() => {
            scheduleUpdate();
          }, 2000);
          return () => clearInterval(intervalId);
        });
        return (
          <div>
            <h6>Saqib</h6>
            <h6><FontAwesomeIcon icon={faPhone}/> <strong className="ml-1">033214569349</strong></h6>
          </div>
        );
      }
      // constants

      // Functions
      const redirectToDescription = (vehicleID) => {
        history.push({
            pathname: `${process.env.PUBLIC_URL}/product/description`,
            state: { vehicleID: vehicleID }
          });
          // window.location.reload();
        // window.location.pathname= `${process.env.PUBLIC_URL}/product/description`
      }

      React.useEffect(
        ()=>{
          Axios.get("/vehi")
         .then(res => {
              setLoader("true")
              setsearchCarData (res.data)
              setLoader("false")

        })
        .catch(err => {
          console.log(err)
        })
       },[])
       // Functions
    return (
       <div className="custom-container margin-class">
           <div className="row">
              <div className="col-md-3 mt-2 ">
                <div className="border p-2 bg-main text-white ">
                 <h6>Filters</h6>
                </div>
                <div className=" border px-2 p-2 ">
                  <h6>Min Price:</h6>
                  <Select options={MinPrice} className='w-100'/>
                </div>
                <div className=" border px-2 p-2 ">
                  <h6>Max Price:</h6>
                  <Select options={MinPrice} className='w-100'/>
                </div>
                <div className=" border px-2 p-2 ">
                  <h6 >City:</h6>
                  <Select options={CityOptions} className='w-100' />
                </div>
                <div className=" border px-2 p-2 ">
                  <h6 >Car Model:</h6>
                  <Select options={CityOptions} className='w-100' />
                </div>

                <div className=" border px-2 p-2 ">
                  <h6 >Mileage:</h6>
                  <Select options={CityOptions} className='w-100' />
                </div>
                <div className=" border px-2 p-2 ">
                  <h6 >Transmission:</h6>
                  <Select options={CityOptions} className='w-100' />
                </div>
              </div>
              <div className="col-md-9 mt-2">
                <Row>
                  {searchCarData && loader === "false" ? searchCarData.map((cars,index)=>(
                    <Col index = {index} sm="12" className="mt-2">
                    <Card style={{zIndex:"1"}}className="ProdutCard" onClick={()=>redirectToDescription(cars._id)}>
                      <Row className="p-2">
                        <Col md="4">
                          <CardImg  width="100%" src="data:image/jpeg;base64,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" alt="Card image cap" />
                        </Col>
                        <Col md="8" className="mt-2">
                          <div style={{marginTop:"10px"}}>
                              <div className="right">
                                <CardText className="ProductPrice">
                                    <strong style={{marginLeft:"10px"}}>PKR {cars.price}</strong>
                                </CardText>
                              </div>
                              <CardText className="ProductTitle">{cars.name}</CardText>
                          </div>
                          <CardText className="ProductLocation mt-2" style={{color:"#7a7a7a"}}>
                              <FontAwesomeIcon icon={faLocationArrow} />
                              <strong className="ml-1"> {cars.location} </strong>
                          </CardText>
                            <div>
                              <p className="ForLastSpan">
                                <span className="ProductShortDetails">{cars.model}</span>
                                <span className="ProductShortDetails">{cars.mileage} KM</span>
                                <span className="ProductShortDetails">{cars.engine} cc</span>
                                <span>{cars.transmission}</span>
                              </p>
                            </div>
                          <div className="">
                              {/* <div className="right">
                              <Button className=" ProductContact" id="ScheduleUpdateTooltip" outline  color="primary" >
                              <strong className="ProductContact">Show Phone No</strong> <FontAwesomeIcon icon={faPhone} />
                              <UncontrolledTooltip placement="bottom" target="ScheduleUpdateTooltip" trigger="click">
                                {({ scheduleUpdate }) => (
                                  <TooltipContent scheduleUpdate={scheduleUpdate} />
                                )}
                              </UncontrolledTooltip>
                              </Button>
                              </div> */}
                              <div className="right">
                              <Button className=" ProductContact" color="primary" >
                                <FontAwesomeIcon icon={faPhone} /><strong className="ProductContact ml-2">03214569349</strong>
                              </Button>
                              </div>
                              <CardText className="ProductUpdateInfo">updated 2 days ago.</CardText>
                          </div>
                        </Col>
                      </Row>
                    </Card>
                  </Col>

                  )) : <Spinner  color="primary" style={{margin: "20% auto", width: '7rem', height: '7rem' }} />}
                </Row>
              </div>
            </div>
       </div>
    )
}

export default withRouter (SearchPage);