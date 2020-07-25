import React from 'react'
import {faCar,faUpload,faMoneyBill} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../PostAd/PostAd.style.css';
import ImageUploader from 'react-images-upload';
import Datetime from "react-datetime";
import { InputGroup, InputGroupAddon, Input } from 'reactstrap';
import ButtonCustom from '../../components/ButtonCustom/ButtonCustom.component';
import 'react-datetime/css/react-datetime.css';
import Axios from '../../axios';
import { useEffect } from 'react';
 


 const PostAd=()=> {
    const CityOptions = [
        { value: 'Lahore', label: 'Lahore' },
        { value: 'Islamabad', label: 'Islamabad' },
        { value: 'Karachi', label: 'Karachi' }
      ]
      const TypeOptions = [
        { value: 'car', label: 'Car' },
        { value: 'bike', label: 'MotorCycle' },
        { value: 'htv', label: 'HTV' },
        { value: 'tractor', label: 'Tractor' },
        { value: 'rickshaw', label: 'Rickshaw' },
        { value: 'bicycle', label: 'Bicycle' }

      ]
      const [modelyear, setModelYear] = React.useState('')
      const [adPhotos, setAdPhotos] = React.useState([])
      const [formsInputs, setFormsInputs] = React.useState({})

      const handleInputChange = (evt) => {
        const value = evt.target.value;
        setFormsInputs({
          ...formsInputs,
          [evt.target.name]: value
        });
      }
    const onDropImage = (event) => {
        if (event.target.files.length > 5) {
            alert("Only 5 files accepted.");
            event.preventDefault();
        }
        else {
        let files = event.target.files;
        console.log(event.target.files)
        setAdPhotos({
        ...adPhotos,
        [event.target.name]:event.target.files
        })
    }

        // const formData = new FormData();
        // files.map((files,index)=>{
        //     formData.append(`images[${index}]`, files[index])
        // })
        // setAdPhotos({
        //     formData
        // })
        // console.log(formData)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(adPhotos.images)
        const user = JSON.parse(localStorage.getItem("user"))
        let data=new FormData();
        data.append('category',formsInputs.vehicleType);
        data.append('modelName',formsInputs.modelName);
        data.append('company',formsInputs.companyName);
        data.append('mileage',formsInputs.mileage);
        data.append('engine',formsInputs.enginecapacity);
        data.append('description',formsInputs.description);
        data.append('color',formsInputs.color);
        data.append('modelYear',modelyear);
        data.append('contact',formsInputs.contactNumber);
        data.append('price',formsInputs.price);
        data.append('transmission',formsInputs.transmission);
        data.append('location',formsInputs.location);
        data.append('title',formsInputs.title);
        data.append("id",user._id)
        data.append('registeration',formsInputs.registeredCity);
        for (const file of adPhotos.images) {
            data.append('images',file);
           }
        // console.log(data)
        Axios.post("/create-ad",data,{
            headers: {
                'Content-Type': 'multiartp/form-data'
            }
        }
        ).then(res=>{
            alert(res.data.message)
            window.location.reload()
        })
    }
    //   console.log(adPhotos)
    //   console.log(adPhotos.length)

      console.log(modelyear)

    return (
       <div className="container-fluid  ">
           <div className="row bg-ad text-white" >
               <div className="col-md-12 text-center mt-5">
                   <h1 style={{color:"black"}}>Sell yours Vehicle With 3 Easy & Simple Steps!</h1>
                   <div className="container mt-5">
                       <div className="row">
                           <div className="col-md-4">
                           <FontAwesomeIcon style={{color:"black"}} icon={faCar} />
                           <p style={{color:"black"}}>Select vehicle Ttype</p>
                           </div>
                           <div className="col-md-4">
                           <FontAwesomeIcon style={{color:"black"}} icon={faCar} />
                           <p style={{color:"black"}}>Enter your vehicle information</p>
                           </div>
                           <div className="col-md-4">
                           <FontAwesomeIcon style={{color:"black"}} icon={faUpload} />
                           <p style={{color:"black"}}>Upload Photos </p>
                           
                           </div>
                       </div>
                   </div>
               </div>
           </div>
           <div className="row mt-5 ">
               <div className="col-md-1"></div>
               <div className="col-md-10 bg-adsection">
                   <form autocomplete="off" onSubmit={handleSubmit}>
                   <input autocomplete="off" name="hidden" type="text" style={{display:"none"}}/>
                        <p className='mt-3'>Select Vehicle Type<span style={{color:'red'}}>*</span></p>
                        <select onChange={handleInputChange} name="vehicleType" className="browser-default custom-select custom-select-lg mb-2" required={true}>
                            <option value="">Select Vehicle Type</option>
                            {TypeOptions.map((options,index)=>(
                            <option key={index} value={options.value}>{options.label}</option>
                            ))}
                        </select>

                        <p className='mt-3'>Company Name<span style={{color:'red'}}>*</span></p>
                        <input required={true} onChange={handleInputChange} name="companyName"  className='w-100 py-2'/>

                        <p className='mt-3'>Model Name<span style={{color:'red'}}>*</span></p>
                        <input required={true} onChange={handleInputChange} name="modelName"  className='w-100 py-2'/>

                        <p className='mt-3'>Location<span style={{color:'red'}}>*</span></p>
                        <select required={true} onChange={handleInputChange} name="location" class="browser-default custom-select custom-select-lg mb-2" required={true}>
                            <option value="">Select Location</option>
                            {CityOptions.map((options,index)=>(
                            <option key={index} value={options.value}>{options.label}</option>
                            ))}
                        </select>

                        <p className='mt-3'>Registered City<span style={{color:'red'}}>*</span></p>
                        <input required={true} onChange={handleInputChange} name="registeredCity"  type='text' className='w-100 py-2' />

                        <p className='mt-3'>Title<span style={{color:'red'}}>*</span></p>
                        <input required={true} onChange={handleInputChange} name="title"  className='w-100 py-2'/>

                        <p className='mt-3'>Model Year <span style={{color:'red'}}>*</span></p>
                        <Datetime required={true} closeOnSelect dateFormat="YYYY" onChange={(date) => setModelYear(date  && date.year ? date.year() : null)}/>

                        <p className='mt-3'>Color<span style={{color:'red'}}>*</span></p>
                        <input required={true} onChange={handleInputChange} name="color"  type='text' className='w-100 py-2' />
                        
                        <p className='mt-3'>Transmission<span style={{color:'red'}}>*</span></p>
                        <select onChange={handleInputChange} name="transmission" class="browser-default custom-select custom-select-lg mb-2" required={true}>
                            <option value=""> Select Transmission Type</option>
                            <option value="Manual">Manual</option>
                            <option value="Automatic">Automatic</option>
                        </select>

                        <p className='mt-3'>Mileage<span style={{color:'red'}}>*</span></p>
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">KM</InputGroupAddon>
                            <input required={true} onChange={handleInputChange} name="mileage"  type='number' className='w-100 py-2' />
                        </InputGroup>
                        
                        <p className='mt-3'>Engine Capacity<span style={{color:'red'}}>*</span></p>
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">cc</InputGroupAddon>
                            <input required={true} onChange={handleInputChange} name="enginecapacity"  type='number' className='w-100 py-2' />
                        </InputGroup>

                        <p className='mt-3'>Price <span style={{color:'red'}}>*</span></p>
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">PKR</InputGroupAddon>
                            <input required={true} onChange={handleInputChange} name="price"  type='number' className='w-100 py-2 ' />
                        </InputGroup>

                        <p className='mt-3'>Contact Number<span style={{color:'red'}}>*</span></p>
                        <input required={true} onChange={handleInputChange} name="contactNumber"  type='number' className='w-100 py-2' />
                        
                        <p className='mt-3'>Describe Features of your Vehicle </p><span style={{color:'red'}}>*</span>
                        <Input required={true} onChange={handleInputChange}  type="textarea" name="description" id="exampleText" />
                        
                        <p className='mt-3'>Upload Images <span style={{color:'red'}}>*</span></p>
                        <input  required = {true} type="file" id="iamges" name="images" multiple onChange={onDropImage}/>
                        {/* <ImageUploader
                            type="file"
                            name="images"
                            withIcon={true}
                            withPreview={true}
                            fileSizeError= {true}
                            fileTypeError= {true}
                            buttonText='Choose images'
                            imgExtension={['.jpg', '.gif', '.png', '.gif']}
                            maxFileSize={5242880}
                            
                            onChange={onDropImage}
                        /> */}
                        <div className="text-center mb-3">
                        <ButtonCustom type="submit">Submit</ButtonCustom>
                        </div>
                   </form>
               </div>
               <div className="col-md-1"></div>

           </div>
       </div>
         
    )
 
}

export default PostAd;