import React, { useState } from 'react';
import {Button} from 'reactstrap';
import Axios from "../axios"

const Filters = (props) => {
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
      const [CompaniesDBData, setCompaniesDBData] = React.useState([])
      const [ModelsDBData, setModelsDBData] = React.useState([])
      React.useEffect(
        ()=>{
          if(props.filterCategory.length > 0){
            Axios.get(`/search/companies/${props.filterCategory}`)
            .then(res=>{
              setCompaniesDBData (res.data)
            })
            .catch(err=>{
              console.log(err)
            })
          }
          if(props.filterCategory.length > 0 && props.filterCompany.length > 0){
            Axios.get(`/search/models/${props.filterCategory}/${props.filterCompany}`)
            .then(res=>{
              console.log(res)
              setModelsDBData (res.data)
            })
            .catch(err=>{
              console.log(err)
            })
        }
       },[props.filterCategory, props.filterCompany, props.filterCompanyModel])


      return(
        <form onSubmit={props.handleFilterSubmit}>
        <div className="border p-2 bg-main text-white">
        <h6>Filters</h6>
        </div>

        <div className=" border px-2 p-2 ">
          <h6>Category:</h6>
          <select class="browser-default custom-select custom-select-md mb-2" onChange={props.handleCategoryChange}>
            <option value="">Select Category</option>
            {Categories.map((category,index)=>(
            <option key={index} value={category.value}>{category.label}</option>
            ))}
          </select>
        </div>

        <div className=" border px-2 p-2 ">
          <h6>Company:</h6>
          <select class="browser-default custom-select custom-select-md mb-2" onChange={props.handleCompanyChange}>
            <option value=""> {props.filterCategory.length <= 0  ? "Select Category First": "Select Company"}</option>
            {CompaniesDBData.map((companies,index)=>(
            <option key={index} value={companies}>{companies}</option>
            ))}
          </select>
        </div>

        <div className=" border px-2 p-2 ">
          <h6>Company Model:</h6>
          <select class="browser-default custom-select custom-select-md mb-2" onChange={props.handleCompanyModelChange}>
            <option value=""> {props.filterCategory.length <= 0 && props.filterCompany.length <= 0 ? "Select Company First": "Select Company Model "} </option>
            {ModelsDBData.map((models,index)=>(
            <option key={index} value={models}>{models}</option>
            ))}
          </select>
        </div>

        <div className=" border px-2 p-2 ">
          <h6>Model Year:</h6>
          <select class="browser-default custom-select custom-select-md mb-2" onChange={props.handleModelYearChange}>
            <option value="">Select Model Year </option>
            {ModelYear.map((year,index)=>(
            <option key={index} value={year.value}>{year.label}</option>
            ))}
          </select>
        </div>

        <div className=" border px-2 p-2 ">
          <h6>Min Price:</h6>
          <select class="browser-default custom-select custom-select-md mb-2" onChange={props.handleMinPriceChange}>
            <option value="">Select Min Price</option>
            {MinPrice.map((price,index)=>(
            <option key={index} value={price.value}>{price.label}</option>
            ))}
          </select>
        </div>
        <div className=" border px-2 p-2 ">
          <h6>Max Price:</h6>
          <select class="browser-default custom-select custom-select-md mb-2" onChange={props.handleMaxPriceChange}>
            <option value="">Select Max Price</option>
            {MaxPrice.map((price,index)=>(
            <option key={index} value={price.value}>{price.label}</option>
            ))}
          </select>
        </div>
        <div className=" border px-2 p-2 ">
          <h6>Locations</h6>
          <select class="browser-default custom-select custom-select-md mb-2" onChange={props.handleCityChange}>
            <option value="">Select City</option>
              {props.LocationFilterData.map((locations,index)=>(
              <option key={index} value={locations}>{locations}</option>
              ))}
          </select>
        </div>
        {/* <div className=" border px-2 p-2 ">
          <h6 >Registraion City:</h6>
          <select class="browser-default custom-select custom-select-md mb-2" onChange={handleRegistrationCityChange}>
            <option value="">Select Registered City</option>
            {RegistrationFilterData.map((locations,index)=>(
            <option key={index} value={locations}>{locations}</option>
            ))}
          </select>
        </div> */}
        <div className=" border px-2 p-2  d-flex ">
          <Button
          disabled={props.filterCity.length <= 0  && props.minPrice.length <= 0 && props.maxPrice.length <= 0  && props.filterCategory.length <= 0 && props.filterCompany.length <= 0 && props.filterCompanyModel.length <= 0 && props.filterModelYear.length <= 0  ? true : false }
          type="submit"
          className="mx-auto d-block"
          color="primary">
            Apply Filters
          </Button>
          <Button
          // disabled={filterCity.length <= 0  && filterRegistrationCity.length <= 0 && minPrice.length <= 0 && maxPrice.length <= 0  && filterCategory.length <= 0 && filterCompany.length <= 0 && filterCompanyModel.length <= 0 && filterModelYear.length <= 0  ? true : false }
          onClick={props.handleClearFilters}
          className="mx-auto d-block"
          color="danger">
            Clear Filters
          </Button>
        </div>
      </form>
   
      )
}
export default Filters