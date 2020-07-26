import React, { useState } from 'react';
import ButtonCustom from './ButtonCustom/ButtonCustom.component';
import { useHistory } from 'react-router'


import {
    Button, Modal, ModalHeader, ModalBody, ModalFooter
  } from 'reactstrap';
import Axios from '../axios';
import { useEffect } from 'react';


const ResetPasswordModel = (props) => {
const history = useHistory()
const [passwordObj ,setPasswordObj]=useState({})
const [resetPasswordResponse, setResetPasswordResponse]=useState("")


const handlePasswordChange = (event) => {
    setPasswordObj({
        ...passwordObj,
        [event.target.name]:event.target.value
      })
}
const handleResetSubmit = (event) => {
    event.preventDefault()
    const { match: { params } } = props;
    Axios.post(`/reset/${params.token}`,passwordObj).then(res=>{
        setResetPasswordResponse(res.data.message)
        console.log(res)
    })
}
const homePageHandler = () => {
    history.push("/prodeals")
}
useEffect (
    ()=>{
        const { match: { params } } = props;
        Axios.get(`/reset/${params.token}`).then(res=>{
            if (res.data.message === "Invalid Token"){
                history.push("/prodeals")
            }
        })
    }
)
console.log(resetPasswordResponse)
return (
    <Modal backdrop={true} isOpen={true}>
    <ModalHeader >Reset Password</ModalHeader>
    <ModalBody>
    <div className="row">
           <div className="col-md-1"></div>
           <div className="col-md-10 bg-adsection">
               <form autocomplete="off" id="resetEmailForm" onSubmit={handleResetSubmit}>
               <input autocomplete="off" name="hidden" type="text" style={{display:"none"}}/>
                    <p className='mt-3'>New Password</p>
                    <input onChange={handlePasswordChange} name="password" type='password' className='w-100 py-2' />

                    <p className='mt-3'>Confirm Password</p>
                    <input onChange={handlePasswordChange} name="confirm" type='password' className='w-100 py-2' />
                    
                    <div className="text-center  mb-2 mt-2">
                      {resetPasswordResponse ? 
                      <p className="mt-1 mb-1" style={resetPasswordResponse.includes("Passwords Do Not Match") ? { color:"red"} : null}>
                        <strong>{resetPasswordResponse}</strong>
                      </p>
                      : null}
                      
                      <Button color="primary" disabled ={resetPasswordResponse.includes("Password Changed Successfully!") ?  true : false} type="submit">Submit</Button>
                    </div>
               </form>
           </div>
           <div className="col-md-1"></div>

       </div>
    </ModalBody>
    <ModalFooter>
      <p style={{color: "blue", textDecoration:"underline", cursor:"pointer"}} onClick={homePageHandler}>Homepage</p>
    </ModalFooter>
  </Modal>
)}
export default ResetPasswordModel