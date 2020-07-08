import React, { useState } from 'react';
import '../SearchPage/SearchPage.style.css';
import {Button,Input} from 'reactstrap';
import Select from 'react-select';

const SearchPage=()=> {
    const MinPrice = [
        { value: '100000', label: '200000' },
        { value: '200000', label: '300000' },
        { value: '300000', label: '400000' }
      ];
      const MaxPrice = [
        { value: '100000', label: '200000' },
        { value: '200000', label: '300000' },
        { value: '300000', label: '400000' }
      ]
      const CityOptions = [
        { value: 'Lahore', label: 'Lahore' },
        { value: 'Islamabad', label: 'Islamabad' },
        { value: 'Karachi', label: 'Karachi' }
      ]
      const CarOptions = [
        { value: 'Audi', label: 'Audi' },
        { value: 'Suzuki', label: 'Suzuki' },
        { value: 'Cultus', label: 'Cultus' }
      ]

    return (
       <div className="container margin-class">
           <div className="row">
               <div className="col-md-3 ">
                   <div className="border p-2 bg-main text-white ">
                 <h6>Show results by :</h6>
                 </div>
                 <div className="border p-2  ">
                 <h6>By Price:</h6>
               
                 </div>
                 <div className="d-flex">


<Select options={MinPrice} className='w-100'/>
<Select options={MaxPrice} className='w-100'/>


   
   </div>
   <div className="border p-2   ">
                 <h6 >By City:</h6>
                 <Select options={CityOptions} className='w-100' />

               
                 </div>

                 <div className="border p-2  ">
                 <h6>By City:</h6>
                 <Select options={CityOptions} className='w-100' />

               
                 </div>

                 <div className="border p-2  ">
                 <h6>By Keyword:</h6>
                 <Select options={CarOptions} className='w-100' />

               
                 </div>

               </div>
               <div className="col-md-9"></div>
              

           </div>
       </div>
    )
}

export default SearchPage;