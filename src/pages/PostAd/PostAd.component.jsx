import React from 'react'
import {faCar,faUpload,faMoneyBill} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../PostAd/PostAd.style.css';
import Select from 'react-select';
import ImageUploader from 'react-images-upload';

import { InputGroup, InputGroupAddon, Input } from 'reactstrap';
import ButtonCustom from '../../components/ButtonCustom/ButtonCustom.component';
import YearPicker from "react-year-picker";

 


 const PostAd=()=> {
    const CityOptions = [
        { value: 'Lahore', label: 'Lahore' },
        { value: 'Islamabad', label: 'Islamabad' },
        { value: 'Karachi', label: 'Karachi' }
      ]
      const TypeOptions = [
        { value: 'Car', label: 'Car' },
        { value: 'MotorCycle', label: 'MotorCycle' },
        { value: 'Truck', label: 'Truck' },
        { value: 'Rickshaw', label: 'Rickshaw' },
        { value: 'Bicycle', label: 'Bicycle' }

      ]
    return (
       <div className="container-fluid  ">
           <div className="row bg-ad text-white" >
               <div className="col-md-12 text-center mt-5">
                   <h1>Sell yours Vehicle With 3 Easy & Simple Steps!</h1>
                   <div className="container mt-5">
                       <div className="row">
                           <div className="col-md-4">
                           <FontAwesomeIcon icon={faCar} />
                           <p>Enter your vehicle information</p>
                           </div>
                           <div className="col-md-4">
                           <FontAwesomeIcon icon={faUpload} />
                           <p>Upload Photos </p>

                           </div>
                           <div className="col-md-4">
                           <FontAwesomeIcon icon={faMoneyBill} />
                           <p>Upload Photos </p>
                           
                           </div>
                       </div>
                   </div>
               </div>
           </div>
           <div className="row mt-5 ">
               <div className="col"></div>
               <div className="col-6 bg-adsection">
               <p className='mt-3'>Select Vehicle Type<span style={{color:'red'}}>*</span></p>
               <Select options={TypeOptions} />
               <p className='mt-3'>Select City<span style={{color:'red'}}>*</span></p>
               <Select options={CityOptions} />
               <p className='mt-3'>Vehicle  Name <span style={{color:'red'}}>*</span></p>
               <input className='w-100 pt-1 pb-1 ad-input '/>
                <p className='mt-3'>Model</p>
                <YearPicker  />
                <p className='mt-3'>Milage <span style={{color:'red'}}>*</span></p>
                <InputGroup>
        <InputGroupAddon addonType="prepend">KM</InputGroupAddon>
        <Input type='number' className='w-100 pt-1 pb-1 ad-input ' />
      </InputGroup>
      <p className='mt-3'>Price <span style={{color:'red'}}>*</span></p>
                <InputGroup>
        <InputGroupAddon addonType="prepend">PKR</InputGroupAddon>
        <Input type='number' className='w-100 pt-1 pb-1 ad-input ' />
      </InputGroup>
      <p className='mt-3'>Describe your Vehicle </p>

        <Input className='ad-input' type="textarea" name="text" id="exampleText" />
        <p className='mt-3'>Upload Images </p>

        <ImageUploader
                withIcon={true}
                buttonText='Choose images'
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
            />
                    <div className="text-center mb-3">
                   <ButtonCustom >Submit</ButtonCustom>
                   </div>
               </div>
               <div className="col"></div>

           </div>
       </div>
         
    )
}

export default PostAd;