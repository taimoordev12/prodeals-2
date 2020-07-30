import React, { useState } from 'react';
import { withRouter } from 'react-router-dom'
import { useHistory } from 'react-router'
import '../SearchPage/SearchPage.style.css';
import {Button,Input, Card, CardImg, CardText, Row, Col} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationArrow, faPhone } from '@fortawesome/free-solid-svg-icons';
import { useMediaPredicate } from "react-media-hook";
import Pagination from "react-js-pagination";
import paginate from "../../components/paginate"
// import history from '../../history';
import Axios from '../../axios';
import { Spinner } from 'reactstrap';
import MainFilters from '../../components/MainFilters'

const SearchPage=(props)=> {
 
      // Default Constants

      // states
      const history = useHistory()
      const [formObject, setFormObject] = React.useState(localStorage.getItem("filters") ? JSON.parse(localStorage.getItem("filters")) : null)
      const [categoryFromFooter, setCategoryFromFooter] = React.useState(localStorage.getItem("categoryFooter") ? localStorage.getItem("categoryFooter") : null)
      const [searchCarData, setsearchCarData] = React.useState([])
      const [loader, setLoader] = React.useState("true")
      const [mediaWidth768, setMediaWidth768] = React.useState(false)
      // filters state values
      const [minPrice, setMinPrice] = React.useState("")
      const [maxPrice, setMaxPrice] = React.useState("")
      const [filterCity, setFilterCity] = React.useState("")
      const [filterCategory, setFilterCategory] = React.useState("")
      const [filterCompany, setFilterCompany] = React.useState("")
      const [filterCompanyModel, setFilterCompanyModel] = React.useState("")
      const [filterRegistrationCity, setFilterRegistrationCity] = React.useState("")
      const [filterModelYear, setFilterModelYear] = React.useState("")
      // DB Datas for filter

      const [activePage, setActivePage] = React.useState("1")
      const [pageSize, setPageSize] = React.useState("5")
      const [clearFilter, setClearFilter] = React.useState(false)
      const [LocationFilterData, setLocationFilterData] = React.useState([])

      // states

      // Functions
      const redirectToDescription = (vehicleID) => {
        history.push({
            pathname: `${process.env.PUBLIC_URL}/product/description`,
            state: { vehicleID: vehicleID }
          });
      }
      const  handleMinPriceChange = (selectedOption) => {
        setMinPrice(selectedOption.target.value)
      };
      const  handleMaxPriceChange = (selectedOption) => {
        setMaxPrice(selectedOption.target.value)
      };
      const  handleCityChange = (selectedOption) => {
        setFilterCity(selectedOption.target.value);
      };
      // const  handleRegistrationCityChange = (selectedOption) => {
      //   setFilterRegistrationCity(selectedOption.target.value);
      // };
      const  handleCategoryChange = (event) =>{
        setFilterCategory(event.target.value);
        setFilterCompany("")
        setFilterCompanyModel("")

      }
      const handleCompanyChange = (event) =>{
        setFilterCompany(event.target.value);
        setFilterCompanyModel("")
      }
      const handleCompanyModelChange = (event) =>{
        setFilterCompanyModel(event.target.value);
      }
      const handleModelYearChange = (event) =>{
        setFilterModelYear(event.target.value);
      }
      const handleFilterSubmit = (e) =>{
        const categoryFooter = localStorage.getItem("categoryFooter")
        const naturalFilters = JSON.parse(localStorage.getItem("filters"))
        e.preventDefault()
        if(filterCategory.length > 0 && filterModelYear.length <= 0 && filterCompanyModel.length <= 0 && filterCompany.length <= 0 && filterCity.length <= 0  && filterRegistrationCity.length <= 0 && minPrice.length <= 0 && maxPrice <=0 ) {
          const formObject = {
            
            category: filterCategory
          }
          Axios.get(`/show/${filterCategory}`)
          .then(res => {
              setLoader("true")
              setsearchCarData (res.data)
              setLoader("false")
          })
          localStorage.setItem("filters", JSON.stringify(formObject))
          if (categoryFooter !== naturalFilters.category){
            localStorage.removeItem("categoryFooter")
          }
        }
        else {
          const formObject = {
          isFromMainPage: "false",
          category: filterCategory,
          company: filterCompany,
          companyModel: filterCompanyModel,
          modelYear: filterModelYear,
          minPrice: minPrice,
          maxPrice: maxPrice,
          city: filterCity
          }
          console.log(formObject)
          localStorage.setItem("filters", JSON.stringify(formObject))
          Axios.post("/search/filters", {formObject})
         .then(res => {
              setLoader("true")
              setsearchCarData (res.data)
              setLoader("false")
          })
        }
        if (categoryFooter) {
          if (naturalFilters) {
            if (naturalFilters.category){
              if (categoryFooter !== naturalFilters.category){
                localStorage.removeItem("categoryFooter")
              }
            }
          }
        }
      }
      const handleClearFilters = async ()  => {
        // setClearFilter(true)
        window.location.reload()
        const formObject = {
          isFromMainPage: "all"
        }
        localStorage.setItem("filters",JSON.stringify(formObject) )
     
      }
      const handlePageChange = (pageNumber) => {
        console.log(`active page is ${pageNumber}`);
        setActivePage(pageNumber);
      }
      const handleMobileFilters = () =>{
        setMediaWidth768(!mediaWidth768)
      }

      // component mount states handlers
      React.useEffect(
        ()=>{
          if(categoryFromFooter) {
            Axios.get(`/show/${categoryFromFooter}`)
            .then(res => {
              setLoader("true")
              setsearchCarData (res.data)
              setLoader("false")
            })
          }
          else if(formObject && formObject.isFromMainPage === "true" ) {
            Axios.post( "/search/filters", {formObject})
            .then(res => {
              setLoader("true")
              setsearchCarData (res.data)
              setLoader("false")
            })
            .catch(err => {
              console.log(err)
            })
          }
          else if(formObject && formObject.isFromMainPage === "false" ) {
            Axios.post( "/search/filters", {formObject})
            .then(res => {
              setLoader("true")
              setsearchCarData (res.data)
              setLoader("false")
            })
            .catch(err => {
              console.log(err)
            })
          }
          else{
            Axios.get("/vehicles")
            .then(res => {
              setLoader("true")
              setsearchCarData (res.data)
              setLoader("false")
            })
            .catch(err => {
              console.log(err)
            })
          }
          Axios.get("/locations")
          .then(res=>{
            console.log(res)
            setLocationFilterData (res.data)
          })
          .catch(err=>{
            console.log(err)
          })
       },[categoryFromFooter])
       // Functions
       const searchCarDataPagination = paginate(searchCarData, activePage, pageSize)
       const biggerThan768 = useMediaPredicate("(min-width: 768px)");
       let autoFilters = null
       if (biggerThan768){
        autoFilters = (
          <div className="col-md-3 mt-2 ">
          <MainFilters
          handleFilterSubmit={handleFilterSubmit}
          handleClearFilters={handleClearFilters}
          handleMinPriceChange={handleMinPriceChange}
          handleMaxPriceChange={handleMaxPriceChange}
          handleCategoryChange={handleCategoryChange}
          handleCompanyChange={handleCompanyChange}
          handleCompanyModelChange={handleCompanyModelChange}
          handleModelYearChange={handleModelYearChange}
          handleCityChange={handleCityChange}
          filterCategory={filterCategory}
          filterCompany={filterCompany}
          LocationFilterData={LocationFilterData}
          filterCity={filterCity}
          minPrice={minPrice}
          maxPrice={maxPrice}
          filterCompanyModel={filterCompanyModel}
          filterModelYear={filterModelYear}
          
          />
        </div>
        )
       }
       else {
        autoFilters = (
          <div autoFocus className="col-md-3 mt-2">
            <Button onClick={handleMobileFilters}color="primary">
              Show Filters
            </Button>
            {mediaWidth768 ?
            <MainFilters
            handleFilterSubmit={handleFilterSubmit}
            handleClearFilters={handleClearFilters}
            handleMinPriceChange={handleMinPriceChange}
            handleMaxPriceChange={handleMaxPriceChange}
            handleCategoryChange={handleCategoryChange}
            handleCompanyChange={handleCompanyChange}
            handleCompanyModelChange={handleCompanyModelChange}
            handleModelYearChange={handleModelYearChange}
            handleCityChange={handleCityChange}
            filterCategory={filterCategory}
            filterCompany={filterCompany}
            LocationFilterData={LocationFilterData}
            filterCity={filterCity}
            minPrice={minPrice}
            maxPrice={maxPrice}
            filterCompanyModel={filterCompanyModel}
            filterModelYear={filterModelYear}
            />
            :
            null
          } 
          </div>
        )
       }
     console.log(mediaWidth768)
    return (
       <div className="custom-container margin-class">
           <div className="row">
              {autoFilters}
              
              <div className="col-md-9 mt-2">
                <Row>
                  {searchCarDataPagination.length >= 1 && loader === "false" ? searchCarDataPagination.map((cars,index)=>(
                    <Col index = {index} sm="12" className="mt-2">
                    <Card style={{zIndex:"1"}}className="ProdutCard" onClick={()=>redirectToDescription(cars._id)}>
                      <Row className="p-2">
                        <Col md="4">
                          <CardImg  width="100%" src={`http://localhost:4000/Routes/uploads/${cars.images[0] ? cars.images[0].filename : ""}`} alt="Card image cap" />
                        </Col>
                        <Col md="8" className="mt-2">
                          <div style={{marginTop:"10px"}}>
                              <div className="right">
                                <CardText className="ProductPrice">
                                    <strong style={{marginLeft:"10px"}}>PKR {cars.price}</strong>
                                </CardText>
                              </div>
                              <CardText className="ProductTitle">{cars.title}</CardText>
                          </div>
                          <CardText className="ProductLocation mt-2" style={{color:"#7a7a7a"}}>
                              <FontAwesomeIcon icon={faLocationArrow} />
                              <strong className="ml-1"> {cars.location} </strong>
                          </CardText>
                            <div>
                              <p className="ForLastSpan">
                                <span className="ProductShortDetails">{cars.modelYear}</span>
                                <span className="ProductShortDetails">{cars.mileage} KM</span>
                                <span className="ProductShortDetails">{cars.engine} cc</span>
                                <span>{cars.transmission}</span>
                              </p>
                            </div>
                          <div className="">
                              <div className="right">
                              <Button className=" ProductContact" color="primary" >
                                <FontAwesomeIcon icon={faPhone} /><strong className="ProductContact ml-2">03214569349</strong>
                              </Button>
                              </div>
                              {cars.isFeatured ?
                              <CardText style={{background:"green", cursor:"pointer", width:"30%", textAlign:"center", color:"white" }}>
                              <h4  >
                                Featured
                              </h4>
                              </CardText> 
                              : null }
                          </div>
                        </Col>
                      </Row>
                    </Card>
                  </Col>

                  ))
                  :
                  searchCarDataPagination.length <= 0 && loader === "false"
                  ?
                  <div style={{margin: "20% auto", fontSize:"24px", fontWeight:"700", color:"#7a7a7a" }}>
                    No Record Found!
                  </div>
                  :
                  <Spinner  color="primary" style={{margin: "20% auto", width: '7rem', height: '7rem' }} />}
                </Row>
                {searchCarData.length >= 1 ?
                 <div className="PaginationStyles col d-flex justify-content-center mt-3 ">
                 <Pagination
                   activePage={activePage}
                   itemsCountPerPage={pageSize}
                   totalItemsCount={searchCarData.length}
                   pageRangeDisplayed={5}
                   onChange={handlePageChange}
                   itemClass="page-item"
                   linkClass="page-link"
                 />
                </div>
                : null
                }
               
                  {/* <Pagination
                    itemsCount={searchCarData.length}
                    pageSize={pageSize}
                    onPageChange={handlePageChange}
                    currentPage={activePage}

                  /> */}
              </div>
            </div>
       </div>
    )
}

export default withRouter (SearchPage);