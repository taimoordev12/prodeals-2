import React from 'react';
import HomePage from './pages/HomePage.component';
import {Route,Switch,Redirect} from 'react-router-dom';
import Header from  '../src/components/Header/header.component';
import Footer from '../src/components/Footer/Footer.component'
import InspectionPage from '../src/pages/Inspection/InspectionPage.component';
import ComparisonPage from '../src/pages/Comparison/Comparisonpage.component';
import AccesoryInformationPage from '../src/pages/AccesoryInformationPage/AccesoryInformationPage.component';
import InspectionFormPage from '../src/pages/InspectionFormPage/InspectionFormPage.component';
import PostAd from '../src/pages/PostAd/PostAd.component';
import SearchPage from './pages/SearchPage/SearchPage.component';
import ProductDescriptionPage from './pages/ProductDescription/ProductDescription.component';
import Profile from './pages/Profile/profile'
import ResetPasswordModel from './components/ResetPassword'
import AdminPanel from '../src/components/AdminPanel/adminPanel.component'


const App=()=> {
  return (
    <React.Fragment>
      <Header/>
    <Switch>
    <Route exact path={`${process.env.PUBLIC_URL}/`} component={HomePage}/>
    <Route  path={`${process.env.PUBLIC_URL}/inspection`} component={InspectionPage}/>
    <Route path={`${process.env.PUBLIC_URL}/comparison`} component={ComparisonPage}/> 
    <Route path={`${process.env.PUBLIC_URL}/accessories`} component={AccesoryInformationPage}/> 
    <Route path={`${process.env.PUBLIC_URL}/inspectionform`} component={InspectionFormPage}/> 
    {/* protected routes */}

    {localStorage.getItem("token") && localStorage.getItem("token").length > 0 ?
    <Route path={`${process.env.PUBLIC_URL}/postad`} component={PostAd}/>
    :
    null
    }
    {localStorage.getItem("token") && localStorage.getItem("token").length > 0 ?
      <Route path={`${process.env.PUBLIC_URL}/profile`} component={Profile}/>
    :
    null
    }

    {/* protected routes */}
    <Route path={`${process.env.PUBLIC_URL}/search`} component={SearchPage}/> 
    <Route path={`${process.env.PUBLIC_URL}/product/description`} component={ProductDescriptionPage}/>
    <Route path ={`${process.env.PUBLIC_URL}/reset/:token`} component={ResetPasswordModel}/>
    <Redirect to={`${process.env.PUBLIC_URL}/`} />
    </Switch>
    <Footer/>
    </React.Fragment>
  )};
 
export default App;
