import React, { useState } from 'react';
import '../ProductDescription/ProductDescription.style.css';
import {Button,
Card,
CardTitle,
CardText,
Row, Col , Carousel,
CarouselItem,
CarouselControl,
CarouselIndicators,
CarouselCaption} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationArrow, faPhone, faCar, faUser, faCalendar, faGasPump, faCog} from '@fortawesome/free-solid-svg-icons';
// import { faTachometer} from '@fortawesome/react-fontawesome'

const SearchPage=()=> {
    const items = [
        {
          src: "https://images.unsplash.com/photo-1542362567-b07e54358753?ixlib=rb-1.2.1&w=1000&q=80"
        },
        {
          src: "https://www.extremetech.com/wp-content/uploads/2019/12/SONATA-hero-option1-764A5360-edit.jpg"
        },
        {
          src: "https://www.autocar.co.uk/sites/autocar.co.uk/files/images/car-reviews/first-drives/legacy/large-2479-s-classsaloon.jpg"
        }
      ];
      const [activeIndex, setActiveIndex] = useState(0);
      const [animating, setAnimating] = useState(false);
    
      const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
      }
    
      const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
      }
    
      const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
      }
    
      const slides = items.map((item) => {
        return (
          <CarouselItem
            onExiting={() => setAnimating(true)}
            onExited={() => setAnimating(false)}
            key={item.src}
          >
            <img className="SliderImages" src={item.src} alt={item.altText}/>
            <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
          </CarouselItem>
        );
      });
    return (
       <div className="custom-container margin-class">
                <Row>
                  <Col md="8" className="mt-3">
                    <Card className="DescriptionCard">
                        <div className="container">
                            <CardText className="DescriptionProductTitle">With supporting text below as a natural</CardText>
                            <CardText className="ProductLocation">
                                <FontAwesomeIcon icon={faLocationArrow} />
                                <strong className="ml-1"> LAHORE </strong></CardText>
                                <Carousel
                                activeIndex={activeIndex}
                                next={next}
                                previous={previous}
                                >
                                    <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
                                    {slides}
                                    <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                                    <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
                                </Carousel>
                                <Row className="mt-3">
                                <Col md="3" sm="6" style={{border:"0.5px solid Gray", backgroundColor:"#e0e0e0", paddingTop:"20px", paddingBottom:"20px" }}>
                                    <div style={{textAlign:"center",marginTop:"15px"}}>
                                        <FontAwesomeIcon icon={faCalendar} size="2x" />
                                        <h4>2014</h4>
                                    </div>
                                </Col>
                                <Col md="3" sm="6" style={{border:"0.5px solid Gray" , backgroundColor:"#e0e0e0", paddingTop:"20px", paddingBottom:"20px" }}>
                                    <div style={{textAlign:"center",marginTop:"15px"}}>
                                        <FontAwesomeIcon icon={faCar} size="2x" />
                                        <h4>75000 KMs</h4>
                                    </div>
                                </Col>
                                <Col md="3" sm="6" style={{border:"0.5px solid Gray" , backgroundColor:"#e0e0e0", paddingTop:"20px", paddingBottom:"20px" }}>
                                    <div style={{textAlign:"center",marginTop:"15px"}}>
                                        <FontAwesomeIcon icon={faGasPump} size="2x" />
                                        <h4>Petrol</h4>

                                    </div>
                                </Col>
                                <Col md="3" sm="6" style={{border:"0.5px solid Gray" , backgroundColor:"#e0e0e0", paddingTop:"20px", paddingBottom:"20px" }}>
                                    <div style={{textAlign:"center",marginTop:"15px"}}>
                                        <FontAwesomeIcon icon={faCog} size="2x" />
                                        <h4>Manual</h4>
                                    </div>
                                </Col>
                                <div className=" container ">
                                    <h4 className="DescriptionProductFeature my-4"> Features </h4>
                                    <Row >
                                        <Col md="12">
                                            <table className="TableStyles" style={{width:"100%"}}>
                                                <tr>
                                                    <th className="TableStyles">Registered City</th>
                                                    <td className="TableStyles" style={{textAlign:"right"}}>Lahore</td>
                                                </tr>
                                                <tr>
                                                    <th className="TableStyles">Assembly</th>
                                                    <td className="TableStyles" style={{textAlign:"right"}}>Imported</td>
                                                </tr>
                                                <tr>
                                                    <th className="TableStyles">Body Type</th>
                                                    <td className="TableStyles" style={{textAlign:"right"}}>N/A</td>
                                                </tr>

                                                <tr>
                                                    <th className="TableStyles">Color</th>
                                                    <td className="TableStyles" style={{textAlign:"right"}}>white</td>
                                                </tr>
                                                <tr>
                                                    <th className="TableStyles">Engine Capacity</th>
                                                    <td className="TableStyles" style={{textAlign:"right"}}>1600cc</td>
                                                </tr>
                                                <tr>
                                                    <th className="TableStyles">Last Updated</th>
                                                    <td className="TableStyles" style={{textAlign:"right"}}>Jul 06, 2020</td>
                                                </tr>
                                                <tr>
                                                    <th className="TableStyles">Ad Ref #</th>
                                                    <td className="TableStyles" style={{textAlign:"right"}}>4153927</td>
                                                </tr>
                                            </table>
                                        </Col>
                                    </Row>
                                </div>
                                <div className="">
                                    <h4 className="DescriptionProductFeature container my-4"> Sellers Comments </h4>
                                    <div className="SellersComments">
                                      <ul>
                                        <li>Fog Lights</li>
                                        <li>Lifetime token tax paid</li>
                                        <li>Company Fitted Alloy Wheels</li>
                                        <li>1st Owner</li>
                                      </ul>

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
                          <h3 className="PriceCard"> PKR 4.5 lacs</h3>
                          <hr className="hr-class"/>
                          <Button className="ProductContactButton" color="success" > <FontAwesomeIcon className="mr-1" icon={faPhone} /> +923214569349 </Button>
                        </Card>
                      </Col>
                      <Col xs="12" className="mt-3">
                        <Card body className="CardStyles text-center">
                          <h3 className="SimpleTitle">Seller Information</h3>
                          <hr className="hr-class"/>
                          <CardText className="SellerInformation mt-3">
                                <FontAwesomeIcon icon={faUser} size="2x" />
                                <h4>Muhammza Hamza Tufail</h4>
                                <p>Member since 19 sep 2019</p>
                          </CardText>
                        </Card>
                      </Col>
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

export default SearchPage;