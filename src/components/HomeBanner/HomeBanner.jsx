import React,{Component} from 'react'
import {Container,Row,Col,Button} from 'reactstrap';
import '../HomeBanner/HomeBanner.style.css';
import Axios from '../../axios';
import { withRouter } from 'react-router-dom'
import { useHistory } from 'react-router'




const HomeBanner=()=> {
  const Categories = [
    { value: 'car', label: 'car' },
    { value: 'bike', label: 'bike' },
    { value: 'rickshaw', label: 'rickshaw' },
    { value: 'bicycle', label: 'bicycle' },
    { value: 'tractor', label: 'tractor' }
  ]
    const history = useHistory()
    const [category, setCategory] = React.useState("")
    const [filterCompany, setFilterCompany] = React.useState("")
    const [filterCompanyModel, setFilterCompanyModel] = React.useState("")
    const [filterModelYear, setFilterModelYear] = React.useState("")

    // DB DATA
    const [CompaniesDBData, setCompaniesDBData] = React.useState([])
    const [ModelsDBData, setModelsDBData] = React.useState([])

    const handleCategoryChange = (event) =>{
      setCategory(event.target.value);
    }
    const handleCompanyChange = (event) =>{
        setFilterCompany(event.target.value);
    }
    const handleCompanyModelChange = (event) =>{
        setFilterCompanyModel(event.target.value);
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
          if(category.length > 0){
            Axios.get(`/search/companies/${category}`)
            .then(res=>{
              setCompaniesDBData (res.data)
            })
            .catch(err=>{
              console.log(err)
            })
          }
          if(category.length > 0 && filterCompany.length > 0){
            Axios.get(`/search/models/${category}/${filterCompany}`)
            .then(res=>{
              console.log(res)
              setModelsDBData (res.data)
            })
            .catch(err=>{
              console.log(err)
            })
        }
        //   Axios.get("/companies")
        //  .then(res => {
        //     setCompaniesDBData (res.data)
        //     if(filterCompany.length > 0){
        //       Axios.get(`/models/${filterCompany}`)
        //       .then(res=>{
        //         console.log(res)
        //         setModelsDBData (res.data)
        //       })
        //       .catch(err=>{
        //         console.log(err)
        //       })
        //     }
        // })
        // .catch(err => {
        //   console.log(err)
        // })
       },[category, filterCompany])
    return (
        <Container fluid className="bg-img">
        <Row className="h-100">
            <Col md={12} className='text-white text-center align-self-end mb-5'>
                    <h1>Find Used Vehicles in Pakistan</h1>
                    <h4>With Vehicles of cars, we have just the right one for you</h4>
                    </Col>
                    <Col></Col>
            <Col md={3} className="mt-5 pt-5 ">
            <select class="browser-default custom-select custom-select-md mb-2" onChange={handleCategoryChange}>
                <option value="">Select Category</option>
                    {Categories.map((Categories,index)=>(
                    <option key={index} value={Categories.value}>{Categories.label}</option>
                    ))}
            </select>
            </Col>
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