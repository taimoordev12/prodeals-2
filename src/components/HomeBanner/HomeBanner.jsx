import React,{Component} from 'react'
import {Container,Row,Col,Button} from 'reactstrap';
import '../HomeBanner/HomeBanner.style.css';
import Axios from '../../axios';
import { withRouter } from 'react-router-dom'
import { useHistory } from 'react-router'




const HomeBanner=()=> {
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
    const history = useHistory()
    const [filterCompany, setFilterCompany] = React.useState("")
    const [filterCompanyModel, setFilterCompanyModel] = React.useState("")
    const [filterModelYear, setFilterModelYear] = React.useState("")

    // DB DATA
    const [CompaniesDBData, setCompaniesDBData] = React.useState([])
    const [ModelsDBData, setModelsDBData] = React.useState([])

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
          const formObject = {
            isFromMainPage: filterCompany.length <= 0 && filterCompanyModel.length <= 0 && filterModelYear.length <= 0  ?"all" : "true",
            company: filterCompany,
            companyModel: filterCompanyModel,
            modelYear: filterModelYear,
            category: '',
            minPrice: '',
            maxPrice: '',
            city: ''
          }
          // if (company.length <= 0 )
          localStorage.removeItem("categoryFooter")
          localStorage.setItem("filters", JSON.stringify(formObject))
            history.push({
                pathname: `${process.env.PUBLIC_URL}/search`,
                state: { searchedData: formObject }
              });
    }
    // component mount states handlers
    React.useEffect(
        ()=>{
          Axios.get("/companies")
         .then(res => {
            setCompaniesDBData (res.data)
            if(filterCompany.length > 0){
              Axios.get(`/models/${filterCompany}`)
              .then(res=>{
                console.log(res)
                setModelsDBData (res.data)
              })
              .catch(err=>{
                console.log(err)
              })
            }
        })
        .catch(err => {
          console.log(err)
        })
       },[filterCompany])
    return (
        <Container fluid className="bg-img">
        <Row className="h-100">
            <Col md={12} className='text-white text-center align-self-end mb-5'>
                    <h1>Find Used Cars in Pakistan</h1>
                    <h4>With thousands of cars, we have just the right one for you</h4>
                    </Col>
                    <Col></Col>

            <Col md={3} className="mt-5 pt-5">
                <select class="browser-default custom-select custom-select-md mb-2" onChange={handleCompanyChange}>
                <option value="">Select Company</option>
                    {CompaniesDBData.map((companies,index)=>(
                    <option key={index} value={companies}>{companies}</option>
                    ))}
                </select>
            </Col>
            <Col md={3} className="mt-5 pt-5 "> 
                <select class="browser-default custom-select custom-select-md mb-2" onChange={handleCompanyModelChange}>
                    <option value=""> {filterCompany.length <= 0 ? "Select Company First": "Select Company Model "} </option>
                    {ModelsDBData.map((models,index)=>(
                    <option key={index} value={models}>{models}</option>
                    ))}
                </select>
            </Col>
            <Col md={3} className="mt-5 pt-5 ">
                <select class="browser-default custom-select custom-select-md mb-2" onChange={handleModelYearChange}>
                    <option value="">Select Model Year </option>
                    {ModelYear.map((year,index)=>(
                    <option key={index} value={year.value}>{year.label}</option>
                    ))}
                </select>

            </Col>
            <Col md={2} className="mt-5 pt-5">
                <Button
                    // disabled={filterCity.length <= 0  && filterRegistrationCity.length <= 0 && minPrice.length <= 0 && maxPrice.length <= 0  && filterCategory.length <= 0 && filterCompany.length <= 0 && filterCompanyModel.length <= 0 && filterModelYear.length <= 0  ? true : false }
                    className="mx-auto d-block"
                    color="primary"
                    onClick={handleFilterSubmit}>
                      Search Vehicle
                </Button>
            </Col>
            <Col></Col>
        </Row>
      </Container>
    )
}

export default withRouter(HomeBanner);