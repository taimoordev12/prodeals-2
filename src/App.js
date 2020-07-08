import React from 'react';
import HomePage from './pages/HomePage.component';
import {Route,Switch} from 'react-router-dom';
import Header from  '../src/components/Header/header.component';
import Footer from '../src/components/Footer/Footer.component'
import InspectionPage from '../src/pages/Inspection/InspectionPage.component';
import ComparisonPage from '../src/pages/Comparison/Comparisonpage.component';
import AccesoryInformationPage from '../src/pages/AccesoryInformationPage/AccesoryInformationPage.component';
import InspectionFormPage from '../src/pages/InspectionFormPage/InspectionFormPage.component';
import PostAd from '../src/pages/PostAd/PostAd.component';
import SearchPage from './pages/SearchPage/SearchPage.component';
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
    <Route path={`${process.env.PUBLIC_URL}/postad`} component={PostAd}/> 
    <Route path={`${process.env.PUBLIC_URL}/search`} component={SearchPage}/> 



    
    </Switch>
    <Footer/>
    </React.Fragment>
  )};
 
export default App;
