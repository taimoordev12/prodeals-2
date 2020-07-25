import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col, Container } from 'reactstrap';
import classnames from 'classnames';
import { faCar, faMotorcycle, faBiking, faTractor, faTruck, faBus} from '@fortawesome/free-solid-svg-icons'
import TabItem from '../TabItem/TabItem.component';
import { useHistory } from 'react-router'
const SearchTab = (props) => {
    const [activeTab, setActiveTab] = useState('1');
    const history = useHistory()
    const handleFooterSearch = (type) => {
      if (window.location.href.includes("/prodeals/search")) {
          window.location.reload()
      }
      localStorage.setItem("categoryFooter", type)
      history.push({
          pathname: `${process.env.PUBLIC_URL}/search`,
          state: { type: type }
      });
  }

    const toggle = tab => {
      if(activeTab !== tab) setActiveTab(tab);
    }

    const CarData =[
      { id:1,
        icon:<FontAwesomeIcon style={{cursor:"pointer"}} onClick={()=>handleFooterSearch("car")}  icon={faCar} />,
        title:'Cars'

      },
      { id:2,
        icon:<FontAwesomeIcon style={{cursor:"pointer"}} onClick={()=>handleFooterSearch("car")} icon={faCar} />,
        title:'Cars'

      },
      { id:3,
        icon:<FontAwesomeIcon style={{cursor:"pointer"}} onClick={()=>handleFooterSearch("car")} icon={faCar} />,
        title:'Cars'

      },
      { id:4,
        icon:<FontAwesomeIcon style={{cursor:"pointer"}} onClick={()=>handleFooterSearch("car")} icon={faCar} />,
        title:'Cars'

      },
      { id:5,
        icon:<FontAwesomeIcon style={{cursor:"pointer"}} onClick={()=>handleFooterSearch("car")} icon={faCar} />,
        title:'Cars'

      },
      { id:6,
        icon:<FontAwesomeIcon style={{cursor:"pointer"}} onClick={()=>handleFooterSearch("car")} icon={faCar} />,
        title:'Cars'

      },
      { id:7,
        icon:<FontAwesomeIcon style={{cursor:"pointer"}} onClick={()=>handleFooterSearch("car")} icon={faCar} />,
        title:'Cars'

      },
      { id:8,
        icon:<FontAwesomeIcon style={{cursor:"pointer"}} onClick={()=>handleFooterSearch("car")} icon={faCar} />,
        title:'Cars'

      },
      { id:9,
        icon:<FontAwesomeIcon style={{cursor:"pointer"}} onClick={()=>handleFooterSearch("car")} icon={faCar} />,
        title:'Cars'

      }
    ];

    const BikeData =[
      {
        id:1,
        icon:<FontAwesomeIcon style={{cursor:"pointer"}} onClick={()=>handleFooterSearch("bike")} icon={faMotorcycle} />,
        title:'Bike'

      },
      {
        id:2,
        icon:<FontAwesomeIcon style={{cursor:"pointer"}} onClick={()=>handleFooterSearch("bike")} icon={faMotorcycle} />,
        title:'Bike'

      },
      {
        id:3,
        icon:<FontAwesomeIcon style={{cursor:"pointer"}} onClick={()=>handleFooterSearch("bike")} icon={faMotorcycle} />,
        title:'Bike'

      },
      {
        id:4,
        icon:<FontAwesomeIcon style={{cursor:"pointer"}} onClick={()=>handleFooterSearch("bike")} icon={faMotorcycle} />,
        title:'Bike'

      },
      {
        id:5,
        icon:<FontAwesomeIcon style={{cursor:"pointer"}} onClick={()=>handleFooterSearch("bike")} icon={faMotorcycle} />,
        title:'Bike'

      },
      {
        id:6,
        icon:<FontAwesomeIcon style={{cursor:"pointer"}} onClick={()=>handleFooterSearch("bike")} icon={faMotorcycle} />,
        title:'Bike'

      },
      {
        id:7,
        icon:<FontAwesomeIcon style={{cursor:"pointer"}} onClick={()=>handleFooterSearch("bike")} icon={faMotorcycle} />,
        title:'Bike'

      },
      {
        id:8,
        icon:<FontAwesomeIcon style={{cursor:"pointer"}} onClick={()=>handleFooterSearch("bike")} icon={faMotorcycle} />,
        title:'Bike'

      },
      {
        id:9,
        icon:<FontAwesomeIcon style={{cursor:"pointer"}} onClick={()=>handleFooterSearch("bike")} icon={faMotorcycle} />,
        title:'Bike'

      },

    ];

    const BicycleData =[
      {
        id:1,
        icon:<FontAwesomeIcon style={{cursor:"pointer"}} onClick={()=>handleFooterSearch("bicycle")} icon={faBiking} />,
        title:'Cycle'

      },
      {
        id:2,
        icon:<FontAwesomeIcon style={{cursor:"pointer"}} onClick={()=>handleFooterSearch("bicycle")} icon={faBiking} />,
        title:'Cycle'

      },
      {
        id:3,
        icon:<FontAwesomeIcon style={{cursor:"pointer"}} onClick={()=>handleFooterSearch("bicycle")} icon={faBiking} />,
        title:'Cycle'

      },
      {
        id:4,
        icon:<FontAwesomeIcon style={{cursor:"pointer"}} onClick={()=>handleFooterSearch("bicycle")} icon={faBiking} />,
        title:'Cycle'

      },
      {
        id:5,
        icon:<FontAwesomeIcon style={{cursor:"pointer"}} onClick={()=>handleFooterSearch("bicycle")} icon={faBiking} />,
        title:'Cycle'

      },
      {
        id:6,
        icon:<FontAwesomeIcon style={{cursor:"pointer"}} onClick={()=>handleFooterSearch("bicycle")} icon={faBiking} />,
        title:'Cycle'

      },
      {
        id:7,
        icon:<FontAwesomeIcon style={{cursor:"pointer"}} onClick={()=>handleFooterSearch("bicycle")} icon={faBiking} />,
        title:'Cycle'

      },
      {
        id:8,
        icon:<FontAwesomeIcon style={{cursor:"pointer"}} onClick={()=>handleFooterSearch("bicycle")} icon={faBiking} />,
        title:'Cycle'

      },
      {
        id:9,
        icon:<FontAwesomeIcon style={{cursor:"pointer"}} onClick={()=>handleFooterSearch("bicycle")} icon={faBiking} />,
        title:'Cycle'

      },
    ];

    const TractorData =[
      {
        id:1,
        icon:<FontAwesomeIcon style={{cursor:"pointer"}} onClick={()=>handleFooterSearch("tractor")} icon={faTractor} />,
        title:'Tractor'

      },
      {
        id:2,
        icon:<FontAwesomeIcon style={{cursor:"pointer"}} onClick={()=>handleFooterSearch("tractor")} icon={faTractor} />,
        title:'Tractor'

      },
      {
        id:3,
        icon:<FontAwesomeIcon style={{cursor:"pointer"}} onClick={()=>handleFooterSearch("tractor")} icon={faTractor} />,
        title:'Tractor'

      },
      {
        id:4,
        icon:<FontAwesomeIcon style={{cursor:"pointer"}} onClick={()=>handleFooterSearch("tractor")} icon={faTractor} />,
        title:'Tractor'

      },
      {
        id:5,
        icon:<FontAwesomeIcon style={{cursor:"pointer"}} onClick={()=>handleFooterSearch("tractor")} icon={faTractor} />,
        title:'Tractor'

      },
      {
        id:6,
        icon:<FontAwesomeIcon style={{cursor:"pointer"}} onClick={()=>handleFooterSearch("tractor")} icon={faTractor} />,
        title:'Tractor'

      },
      {
        id:7,
        icon:<FontAwesomeIcon style={{cursor:"pointer"}} onClick={()=>handleFooterSearch("tractor")} icon={faTractor} />,
        title:'Tractor'

      },
      {
        id:8,
        icon:<FontAwesomeIcon style={{cursor:"pointer"}} onClick={()=>handleFooterSearch("tractor")} icon={faTractor} />,
        title:'Tractor'

      },
      {
        id:9,
        icon:<FontAwesomeIcon style={{cursor:"pointer"}} onClick={()=>handleFooterSearch("tractor")} icon={faTractor} />,
        title:'Tractor'

      },

    ];

    const HTVData =[
      {
        id:1,
        icon:<FontAwesomeIcon style={{cursor:"pointer"}} onClick={()=>handleFooterSearch("htv")} icon={faTruck} />,
        title:'Truck'

      },
      {
        id:2,
        icon:<FontAwesomeIcon style={{cursor:"pointer"}} onClick={()=>handleFooterSearch("htv")} icon={faTruck} />,
        title:'Truck'

      },
      {
        id:3,
        icon:<FontAwesomeIcon style={{cursor:"pointer"}} onClick={()=>handleFooterSearch("htv")} icon={faTruck} />,
        title:'Truck'

      },
      {
        id:4,
        icon:<FontAwesomeIcon style={{cursor:"pointer"}} onClick={()=>handleFooterSearch("htv")} icon={faTruck} />,
        title:'Truck'

      },
      {
        id:5,
        icon:<FontAwesomeIcon style={{cursor:"pointer"}} onClick={()=>handleFooterSearch("htv")} icon={faTruck} />,
        title:'Truck'

      },
      {
        id:6,
        icon:<FontAwesomeIcon style={{cursor:"pointer"}} onClick={()=>handleFooterSearch("htv")} icon={faTruck} />,
        title:'Truck'

      },
      {
        id:7,
        icon:<FontAwesomeIcon style={{cursor:"pointer"}} onClick={()=>handleFooterSearch("htv")} icon={faTruck} />,
        title:'Truck'

      },
      {
        id:8,
        icon:<FontAwesomeIcon style={{cursor:"pointer"}} onClick={()=>handleFooterSearch("htv")} icon={faTruck} />,
        title:'Truck'

      },
      {
        id:9,
        icon:<FontAwesomeIcon style={{cursor:"pointer"}} onClick={()=>handleFooterSearch("htv")} icon={faTruck} />,
        title:'Truck'

      },

    ];

    const RickshawData =[
      {
        id:1,
        icon:<FontAwesomeIcon style={{cursor:"pointer"}} onClick={()=>handleFooterSearch("rickshaws")} icon={faBus} />,
        title:'Rickshaw'

      },
      {
        id:2,
        icon:<FontAwesomeIcon style={{cursor:"pointer"}} onClick={()=>handleFooterSearch("rickshaws")} icon={faBus} />,
        title:'Rickshaw'

      },
      {
        id:3,
        icon:<FontAwesomeIcon style={{cursor:"pointer"}} onClick={()=>handleFooterSearch("rickshaws")} icon={faBus} />,
        title:'Rickshaw'

      },
      {
        id:4,
        icon:<FontAwesomeIcon style={{cursor:"pointer"}} onClick={()=>handleFooterSearch("rickshaws")} icon={faBus} />,
        title:'Rickshaw'

      },
      {
        id:5,
        icon:<FontAwesomeIcon style={{cursor:"pointer"}} onClick={()=>handleFooterSearch("rickshaws")} icon={faBus} />,
        title:'Rickshaw'

      },
      {
        id:6,
        icon:<FontAwesomeIcon style={{cursor:"pointer"}} onClick={()=>handleFooterSearch("rickshaws")} icon={faBus} />,
        title:'Rickshaw'

      },
      {
        id:7,
        icon:<FontAwesomeIcon style={{cursor:"pointer"}} onClick={()=>handleFooterSearch("rickshaws")} icon={faBus} />,
        title:'Rickshaw'

      },
      {
        id:8,
        icon:<FontAwesomeIcon style={{cursor:"pointer"}} onClick={()=>handleFooterSearch("rickshaws")} icon={faBus} />,
        title:'Rickshaw'

      },
      {
        id:9,
        icon:<FontAwesomeIcon style={{cursor:"pointer"}} onClick={()=>handleFooterSearch("rickshaws")} icon={faBus} />,
        title:'Rickshaw'

      },

    ];
  
    return (
        
      <Container className="mt-5"> 
      <Row>
         <Col md={12}> <h1 className="text-center underline mb-5 color-main-2">Explore our all vehicles</h1></Col>
         </Row>
          <Row>
              <Col md={12}>  
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '1' })}
              onClick={() => { toggle('1'); }}
            >
              <h5>Cars</h5>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '2' })}
              onClick={() => { toggle('2'); }}
            >
              <h5>Bikes</h5>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '3' })}
              onClick={() => { toggle('3'); }}
            >
              <h5>Bicyles</h5>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '4' })}
              onClick={() => { toggle('4'); }}
            >
              <h5>Tractors</h5>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '5' })}
              onClick={() => { toggle('5'); }}
            >
              <h5>HTV</h5>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '6' })}
              onClick={() => { toggle('6'); }}
            >
              <h5>Rickshaw</h5>
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12" className="mt-3">
              <Container>
                <Row>
              {CarData.map(data=><TabItem key={data.id} {...data}/>)}
                </Row>
              </Container>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2" className="mt-3">
            <Row>
              <Col sm="12">
                <Container>
                  <Row>
                {BikeData.map(data=><TabItem key={data.id} {...data} />)}
                  </Row>
                </Container>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="3" className="mt-3">
            <Row>
              <Col sm="12">
                <Container>
                  <Row>
                {BicycleData.map(data=><TabItem key={data.id} {...data} />)}
                  </Row>
                </Container>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="4" className="mt-3">
            <Row>
              <Col sm="12">
                <Container>
                  <Row>
                {TractorData.map(data=><TabItem key={data.id} {...data} />)}
                  </Row>
                </Container>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="5" className="mt-3">
            <Row>
              <Col sm="12">
                <Container>
                  <Row>
                {HTVData.map(data=><TabItem key={data.id} {...data} />)}
                  </Row>
                </Container>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="6" className="mt-3">
            <Row>
              <Col sm="12">
                <Container>
                  <Row>
                {RickshawData.map(data=><TabItem key={data.id} {...data} />)}
                  </Row>
                </Container>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
        </Col>
          </Row>
        </Container>
    );
  }
  
  export default SearchTab;