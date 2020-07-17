import React from 'react'
import HomeBanner from '../components/HomeBanner/HomeBanner';
import CarsSection from '../components/CarsSection/CarsSection.component';
import ServiceSection from '../components/ServiceSection/ServiceSection.component';
import SearchTab from '../components/SearchTab/SearchTab.component';
import FeatureSection from '../components/FeatureSection/FeatureSection.component';

const HomePage =()=> {
    return (
        <div>
          <HomeBanner/>
          <ServiceSection/>
          <FeatureSection/>
          <CarsSection/>
          <SearchTab/>
        </div>
    )
}
export default HomePage;