import React, { useState } from 'react';
import { withRouter } from 'react-router-dom'
import { useHistory } from 'react-router'
import '../SearchPage/SearchPage.style.css';
import {Button,Input, Card, CardImg, CardText, Row, Col} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationArrow, faPhone } from '@fortawesome/free-solid-svg-icons';
import Pagination from "react-js-pagination";
import paginate from "../../components/paginate"
// import history from '../../history';
import Axios from '../../axios';
import { Spinner } from 'reactstrap';

const SearchPage=(props)=> {
 
      // Default Constants
      const MinPrice = [
        { value: '5000', label: '5000' },
        { value: '100000', label: '100000' },
        { value: '200000', label: '300000' },
        { value: '300000', label: '300000' },
        { value: '400000', label: '400000' },
        { value: '500000', label: '500000' },
        { value: '600000', label: '600000' },
        { value: '700000', label: '700000' },
        { value: '800000', label: '800000' },
        { value: '900000', label: '600000' },
        {value:"1000000" , label: "1000000"}

      ];
      const MaxPrice = [
        {value:"1500000" , label: "1500000"},
        {value:"2000000" , label: "2000000"},
        {value:"2500000" , label: "2500000"},
        {value:"3000000" , label: "3000000"},
        {value:"3500000" , label: "3500000"},
        {value:"4000000" , label: "4000000"},
        {value:"4500000" , label: "4500000"},
        {value:"5000000" , label: "5000000"},
        {value:"6000000" , label: "6000000"},
        {value:"7000000" , label: "7000000"},
        {value:"8000000" , label: "8000000"},
      ]
      const ModelYear = [
        {value:"1990" , label: "1990"},
        {value:"1995" , label: "1995"},
        {value:"2000" , label: "2000"},
        {value:"2001" , label: "2001"},
        {value:"2002" , label: "2002"},
        {value:"2002" , label: "2002"},
        {value:"2003" , label: "2003"},
        {value:"2004" , label: "2004"},
        {value:"2005" , label: "2005"},
        {value:"2006" , label: "2006"},
        {value:"2008" , label: "2008"},
        {value:"2009" , label: "2009"},
        {value:"2010" , label: "2010"},
        {value:"2011" , label: "2011"},
        {value:"2012" , label: "2012"},
        {value:"2013" , label: "2013"},
        {value:"2014" , label: "2014"},
        {value:"2015" , label: "2015"},
        {value:"2016" , label: "2016"},
        {value:"2017" , label: "2017"},
        {value:"2018" , label: "2018"},
        {value:"2019" , label: "2019"},
        {value:"2020" , label: "2020"},
        {value:"2021" , label: "2021"},
        {value:"2022" , label: "2022"},
      ]
      const Categories = [
        { value: 'car', label: 'car' },
        { value: 'bike', label: 'bike' },
        { value: 'rickshaw', label: 'rickshaw' },
        { value: 'bicycle', label: 'bicycle' },
        { value: 'tractor', label: 'tractor' }
      ]
      // states
      const history = useHistory()
      const [formObject, setFormObject] = React.useState(props &&props.location && props.location.state && props.location.state.searchedData ? props.location.state.searchedData: "")
      const [categoryFromFooter, setCategoryFromFooter] = React.useState(props &&props.location && props.location.state && props.location.state.type ? props.location.state.type: "")
      const [searchCarData, setsearchCarData] = React.useState([])
      const [loader, setLoader] = React.useState("true")
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
      const [LocationFilterData, setLocationFilterData] = React.useState([])
      const [RegistrationFilterData, setRegistrationFilterData] = React.useState([])
      const [CompaniesDBData, setCompaniesDBData] = React.useState([])
      const [ModelsDBData, setModelsDBData] = React.useState([])
      const [activePage, setActivePage] = React.useState("1")
      const [pageSize, setPageSize] = React.useState("5")
      const [clearFilter, setClearFilter] = React.useState(false)

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
      const  handleRegistrationCityChange = (selectedOption) => {
        setFilterRegistrationCity(selectedOption.target.value);
      };
      const  handleCategoryChange = async (event) =>{
        await setFilterCategory(event.target.value);

      }
      const handleCompanyChange = (event) =>{
        setFilterCompany(event.target.value);
      }
      const handleCompanyModelChange = (event) =>{
        setFilterCompanyModel(event.target.value);
      }
      const handleModelYearChange = (event) =>{
        setFilterModelYear(event.target.value);
      }
      const handleFilterSubmit = (e) =>{
        e.preventDefault()
        if(filterCategory.length > 0 && filterModelYear.length <= 0 && filterCompanyModel.length <= 0 && filterCompany.length <= 0 && filterCity.length <= 0  && filterRegistrationCity.length <= 0 && minPrice.length <= 0 && maxPrice <=0 ) {
          Axios.get(`/show/${filterCategory}`)
         .then(res => {
              setLoader("true")
              setsearchCarData (res.data)
              setLoader("false")

        })
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
            city: filterCity,
            registrationCity: filterRegistrationCity
          }
          Axios.post("/search/filters", {formObject})
         .then(res => {
              setLoader("true")
              setsearchCarData (res.data)
              setLoader("false")

        })
        }
      //   Axios.get(`/ads/search/${filterName}/${filterCity}/${filterRegistrationCity}/${minPrice}`)
      //   .then(res => {
      //        setLoader("true")
      //        setsearchCarData (res.data)
      //        setLoader("false")
      //  })
      }
      const handleClearFilters = async ()  => {
        setClearFilter(true)
        // window.location.reload()
     
      }
      const filterhandler = () =>{
        setFormObject("")
        setCategoryFromFooter("")
        localStorage.setItem("clickedFilter", "true")
      }
      const handlePageChange = (pageNumber) => {
        console.log(`active page is ${pageNumber}`);
        setActivePage(pageNumber);
      }
      // component mount states handlers
      React.useEffect(
        ()=>{
        if(categoryFromFooter && !clearFilter && !localStorage.getItem("clickedFilter")) {
          console.log("in category")

            Axios.get(`/show/${categoryFromFooter}`)
            .then(res => {
              setLoader("true")
              setsearchCarData (res.data)
              setLoader("false")
            })
        }
        else if(formObject.isFromMainPage === "true"  && !clearFilter && !localStorage.getItem("clickedFilter")) {
          console.log("in form main page")

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
          console.log("in normal page")

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
        if(filterCategory.length > 0){
            Axios.get(`/search/companies/${filterCategory}`)
            .then(res=>{
              setCompaniesDBData (res.data)
            })
            .catch(err=>{
              console.log(err)
            })
        }
        if(filterCategory.length > 0 && filterCompany.length > 0){
          Axios.get(`/search/models/${filterCategory}/${filterCompany}`)
          .then(res=>{
            console.log(res)
            setModelsDBData (res.data)
          })
          .catch(err=>{
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
        Axios.get("/registerations")
        .then(res=>{
          setRegistrationFilterData (res.data)
        })
        .catch(err=>{
            console.log(err)
        })

       },[clearFilter ,filterCategory, filterCompany, categoryFromFooter])
       // Functions
       const searchCarDataPagination = paginate(searchCarData, activePage, pageSize)

    return (
       <div className="custom-container margin-class">
           <div className="row">
              <div className="col-md-3 mt-2 " onClick={filterhandler}>
                <form onSubmit={handleFilterSubmit}>
                  <div className="border p-2 bg-main text-white">
                  <h6>Filters</h6>
                  </div>

                  <div className=" border px-2 p-2 ">
                    <h6>Category:</h6>
                    <select class="browser-default custom-select custom-select-md mb-2" onClick={filterhandler} onChange={handleCategoryChange}>
                      <option value="">Select Category</option>
                      {Categories.map((category,index)=>(
                      <option key={index} value={category.value}>{category.label}</option>
                      ))}
                    </select>
                  </div>

                  <div className=" border px-2 p-2 ">
                    <h6>Company:</h6>
                    <select class="browser-default custom-select custom-select-md mb-2" onChange={handleCompanyChange}>
                      <option value=""> {filterCategory.length <= 0  ? "Select Category First": "Select Company"}</option>
                      {CompaniesDBData.map((companies,index)=>(
                      <option key={index} value={companies}>{companies}</option>
                      ))}
                    </select>
                  </div>

                  <div className=" border px-2 p-2 ">
                    <h6>Company Model:</h6>
                    <select class="browser-default custom-select custom-select-md mb-2" onChange={handleCompanyModelChange}>
                      <option value=""> {filterCategory.length <= 0 && filterCompany.length <= 0 ? "Select Company First": "Select Company Model "} </option>
                      {ModelsDBData.map((models,index)=>(
                      <option key={index} value={models}>{models}</option>
                      ))}
                    </select>
                  </div>

                  <div className=" border px-2 p-2 ">
                    <h6>Model Year:</h6>
                    <select class="browser-default custom-select custom-select-md mb-2" onChange={handleModelYearChange}>
                      <option value="">Select Model Year </option>
                      {ModelYear.map((year,index)=>(
                      <option key={index} value={year.value}>{year.label}</option>
                      ))}
                    </select>
                  </div>

                  <div className=" border px-2 p-2 ">
                    <h6>Min Price:</h6>
                    <select class="browser-default custom-select custom-select-md mb-2" onChange={handleMinPriceChange}>
                      <option value="">Select Min Price</option>
                      {MinPrice.map((price,index)=>(
                      <option key={index} value={price.value}>{price.label}</option>
                      ))}
                    </select>
                  </div>
                  <div className=" border px-2 p-2 ">
                    <h6>Max Price:</h6>
                    <select class="browser-default custom-select custom-select-md mb-2" onChange={handleMaxPriceChange}>
                      <option value="">Select Max Price</option>
                      {MaxPrice.map((price,index)=>(
                      <option key={index} value={price.value}>{price.label}</option>
                      ))}
                    </select>
                  </div>
                  <div className=" border px-2 p-2 ">
                    <h6>City</h6>
                    <select class="browser-default custom-select custom-select-md mb-2" onChange={handleCityChange}>
                      <option value="">Select City</option>
                        {LocationFilterData.map((locations,index)=>(
                        <option key={index} value={locations}>{locations}</option>
                        ))}
                    </select>
                  </div>
                  <div className=" border px-2 p-2 ">
                    <h6 >Registraion City:</h6>
                    <select class="browser-default custom-select custom-select-md mb-2" onChange={handleRegistrationCityChange}>
                      <option value="">Select Registered City</option>
                      {RegistrationFilterData.map((locations,index)=>(
                      <option key={index} value={locations}>{locations}</option>
                      ))}
                    </select>
                  </div>
                  <div className=" border px-2 p-2  d-flex ">
                    <Button
                    disabled={filterCity.length <= 0  && filterRegistrationCity.length <= 0 && minPrice.length <= 0 && maxPrice.length <= 0  && filterCategory.length <= 0 && filterCompany.length <= 0 && filterCompanyModel.length <= 0 && filterModelYear.length <= 0  ? true : false }
                    type="submit"
                    className="mx-auto d-block"
                    color="primary">
                      Apply Filters
                    </Button>
                    <Button
                    disabled={filterCity.length <= 0  && filterRegistrationCity.length <= 0 && minPrice.length <= 0 && maxPrice.length <= 0  && filterCategory.length <= 0 && filterCompany.length <= 0 && filterCompanyModel.length <= 0 && filterModelYear.length <= 0  ? true : false }
                    onClick={handleClearFilters}
                    className="mx-auto d-block"
                    color="danger">
                      Clear Filters
                    </Button>
                  </div>
                </form>
              </div>
              <div className="col-md-9 mt-2">
                <Row>
                  {searchCarDataPagination.length >= 1 && loader === "false" ? searchCarDataPagination.map((cars,index)=>(
                    <Col index = {index} sm="12" className="mt-2">
                    <Card style={{zIndex:"1"}}className="ProdutCard" onClick={()=>redirectToDescription(cars._id)}>
                      <Row className="p-2">
                        <Col md="4">
                          <CardImg  width="100%" src={`http://localhost:4000/Routes/uploads/${cars.images[0].filename}`} alt="Card image cap" />
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
                              <CardText>
                              <Button className=" ProductContact" color="success" >
                                Featured
                              </Button>
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