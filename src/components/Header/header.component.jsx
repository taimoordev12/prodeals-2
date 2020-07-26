import React, { useState } from 'react';
import logo from '../../logo.png';
import ButtonCustom from '../ButtonCustom/ButtonCustom.component';
import '../Header/header.style.css';
import {Link} from 'react-router-dom';
import Axios from '../../axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGoogle} from '@fortawesome/free-brands-svg-icons';
import { connect } from 'react-redux';
import * as actions from '../../Store/Actions/index';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  NavbarText,
  Button, Modal, ModalHeader, ModalBody, ModalFooter,
  Dropdown, DropdownMenu, DropdownItem
} from 'reactstrap';
import { useEffect } from 'react';

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [loginPop, setloginPop] = useState(false);
  const [registerPop, setRegiterPop] = useState(false);
  const [loginObject, setLoginObject]=useState({})
  const [registerObject, setRegisterObject]=useState({})
  const [registerResponse, setRegisterResponse]=useState("")
  const [loginResponse, setLoginResponse]=useState(false)
  const [token, setToken] = useState("")
  const [userData, setUserData]= useState({})
  const [menuDropDownOpen ,setMenuDropDownOpen]=useState(false)
  const [resetPassword, setResetPassword] = useState(false)
  const [resetPasswordObjet ,setResetPasswordObjet] = useState({})
  const [emailVerifyResponse ,setEmailVerifyResponse] = useState("")

  const toggle = () => setIsOpen(!isOpen);
  const loginHandler = () => {
    setRegiterPop(false)
    setloginPop(true)
    setResetPassword(false)
  }
  const registerPopHandler = () => {
    setloginPop(false)
    setRegiterPop(true)
    setResetPassword(false)
  }
  const loginPopHandler = () => {
    setloginPop(true)
    setRegiterPop(false)
    setResetPassword(false)
    setEmailVerifyResponse("")

  }
  const CloseModels = () => {
    setloginPop(false)
    setRegiterPop(false)
    setResetPassword(false)

  }
  const resetPasswordHandler = () => {
    setResetPassword(true)
    setloginPop(false)
    setRegiterPop(false)
    
  }
  const dropDownToggler = () => {
    setMenuDropDownOpen(!menuDropDownOpen)
  }

  const handleInputChange = (event) => {
    setLoginObject({
      ...loginObject,
      [event.target.name]:event.target.value
    })
  }
  const handleRegisterInpustChange = (event) => {
    setRegisterObject({
      ...registerObject,
      [event.target.name]:event.target.value
    })
  }
  const handleResetInputChange = (event) => {
    setResetPasswordObjet({
      ...resetPasswordObjet,
      [event.target.name]:event.target.value
    })
  }

  const handleLoginSubmit= async (event)=>{
    event.preventDefault()
    await props.onLogin(loginObject)
    // const responseToken = localStorage.getItem("token")
    setTimeout(() => {
      if (localStorage.getItem("token") && localStorage.getItem("token").length > 0 ){
        window.location.reload()
      }
      else {
        setLoginResponse(true)
      }
    }, 1000);
   
  }
  const hanldeFBLogin = () => {
    Axios.get('/auth/google')
    .then(res=>{
      console.log(res)
    })
    .catch(err=>{
      console.log(err)
    })
  }
  const handleRegistrationSubmit = (event)=> {
    event.preventDefault()
    Axios.post("/register",registerObject).then(res=>{
      console.log(res)
      setRegisterResponse(res.data)
    })
    .catch(err=>{
      console.log(err)
    })
  }
  const handleEmailVerfySubmit = (event) => {
    event.preventDefault()
    Axios.post("/forgot", resetPasswordObjet).then(res=>{
      setEmailVerifyResponse(res.data.message)
    })
    .catch(err=>{
      console.log(err)
    })
  }

  const loginOutHandler = () => {
    const URL = window.location.href
    props.onErrorRefresh()
    if(URL.includes("/prodeals/postad")){
      window.location.replace(`${process.env.PUBLIC_URL}/prodeals`);
    }
    else{
      window.location.replace(`${process.env.PUBLIC_URL}/prodeals`);
    }
  }
  
  useEffect(
    ()=>{
      let userData = localStorage.getItem("user")
      setToken(localStorage.getItem("token"))
      userData = userData && userData.length > 0 ? JSON.parse(userData) : null
      setUserData(userData)
    },[token])
    console.log(emailVerifyResponse)
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href={`${process.env.PUBLIC_URL}/`}  ><img alt="logo" className="img-fluid" src={logo}/></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/comparison/">Vehicles</NavLink>
            </NavItem>
            <NavItem >
            <NavLink href={`${process.env.PUBLIC_URL}/comparison`}>Comparison</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret href={`${process.env.PUBLIC_URL}/accessories`}>
                Auto Parts
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem href={`${process.env.PUBLIC_URL}/accessories`}>
                 Sell Auto Parts
                </DropdownItem>
                <DropdownItem>
                 Buy Auto Parts
                </DropdownItem>
                <DropdownItem divider />
              
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink>Auction</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>Modification</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href={`${process.env.PUBLIC_URL}/inspection`}> Inspection</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>Blog</NavLink>
            </NavItem>
            <NavItem>
            {token && token.length > 0 ? <NavLink href={`${process.env.PUBLIC_URL}/postad`}><Button color="warning">Post Ad</Button></NavLink>
              :
              <NavLink><Button color="primary" onClick={loginHandler}>Post Ad</Button></NavLink>
              }
            </NavItem>
            <NavItem>
            {token && token.length > 0 ?
              <NavItem>
              <Dropdown isOpen={menuDropDownOpen} toggle={dropDownToggler}>
                <DropdownToggle caret  color="success">
                {userData && userData.firstName ? userData.firstName : null }
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem  onClick={()=>{
                    window.location.replace(`${process.env.PUBLIC_URL}/profile`)
                  }} style={{cursor:"pointer",textAlign:"center"}}><strong>Profile</strong></DropdownItem>
                  <DropdownItem divider style={{textAlign:"center"}} onClick={loginOutHandler} style={{cursor:"pointer"}}><strong>Logout</strong></DropdownItem>
                  <DropdownItem  onClick={loginOutHandler} style={{cursor:"pointer",textAlign:"center"}}><strong>Logout</strong></DropdownItem>
                </DropdownMenu>
              </Dropdown>
              </NavItem>
              // {/* <Button color="success" onClick={loginOutHandler}>{userData && userData.firstName ? userData.firstName : null }</Button> */}
              :
              <NavLink><Button color="danger" onClick={loginHandler}>Login</Button></NavLink>
              }
            </NavItem>
          </Nav>
        </Collapse>
        
   
      </Navbar>
        { loginPop ?
        <Modal toggle={CloseModels} backdrop={true} isOpen={loginPop}>
        <ModalHeader >Login</ModalHeader>
        <ModalBody>
        <div className="row">
               <div className="col-md-1"></div>
               <div className="col-md-10 bg-adsection">
                  <div className="pt-2">
                    <Button onClick={hanldeFBLogin} color="danger" outline size="lg" block>
                    <FontAwesomeIcon icon={faGoogle} />
                    <a ><strong className="ml-1"> Login With Google </strong></a>
                    </Button>
                  </div>
                  <hr/>
                   <form autocomplete="off" id="loginForm" onSubmit={handleLoginSubmit}>
                   <input autocomplete="off" name="hidden" type="text" style={{display:"none"}}/>
                        <p className='mt-3'>Email</p>
                        <input onChange={handleInputChange} name="email" value={loginObject && loginObject.email ? loginObject.email : "" } placeholder="something@some.com"  type='email' className='w-100 py-2' />

                        <p className='mt-3'>Password</p>
                        <input onChange={handleInputChange} value={loginObject && loginObject.password ? loginObject.password : null } name="password" type="password" placeholder="password" className='w-100 py-2'/>
                        <div className="text-center  mb-2 mt-2">
                        {loginResponse ? <p style={{color:"red"}}className="mt-1 mb-1"><strong>Email or Password is Incorrect</strong></p> : null}
                        <ButtonCustom type="submit">Login</ButtonCustom>
                    <p className={"mt-2 pt-2"} style={{color: "blue", textDecoration:"underline", cursor:"pointer" }} onClick={resetPasswordHandler}>Forget Password!</p>

                        </div>
                   </form>
               </div>
               <div className="col-md-1"></div>

           </div>
        </ModalBody>
        <ModalFooter>
          <p style={{color: "blue", textDecoration:"underline", cursor:"pointer"}} onClick={registerPopHandler}>Register</p>
        </ModalFooter>
      </Modal>
      : null 
      }

      { resetPassword ?
        <Modal toggle={CloseModels} backdrop={true} isOpen={resetPassword}>
        <ModalHeader >Email Verification</ModalHeader>
        <ModalBody>
        <div className="row">
               <div className="col-md-1"></div>
               <div className="col-md-10 bg-adsection">
                   <form autocomplete="off" id="resetEmailForm" onSubmit={handleEmailVerfySubmit}>
                   <input autocomplete="off" name="hidden" type="text" style={{display:"none"}}/>
                        <p className='mt-3'>Email</p>
                        <input onChange={handleResetInputChange} name="email" value={resetPasswordObjet && resetPasswordObjet.email ? resetPasswordObjet.email : "" } placeholder="something@some.com"  type='email' className='w-100 py-2' />
                        
                        <div className="text-center  mb-2 mt-2">
                          {emailVerifyResponse ? 
                          <p className="mt-1 mb-1" style={emailVerifyResponse.includes("No account") ? { color:"red"} : null}>
                            <strong>{emailVerifyResponse}</strong>
                          </p>
                          : null}
                          <ButtonCustom type="submit">Submit</ButtonCustom>
                        </div>
                   </form>
               </div>
               <div className="col-md-1"></div>

           </div>
        </ModalBody>
        <ModalFooter>
          <p style={{color: "blue", textDecoration:"underline", cursor:"pointer"}} onClick={loginPopHandler}>Login</p>
        </ModalFooter>
      </Modal>
      : null 
      }

      {registerPop ?
        <Modal toggle={CloseModels} backdrop={true} isOpen={registerPop}>
          <ModalHeader >Register</ModalHeader>
        <ModalBody>

        <div className="row">
               <div className="col-md-1"></div>
               <div className="col-md-10 bg-adsection">
                  <div className="pt-2">
                    <Button color="danger" outline size="lg" block>
                    <FontAwesomeIcon icon={faGoogle} />
                    <strong className="ml-1"> Login With Google </strong>
                    </Button>
                  </div>
                  <hr/>
                  <form autocomplete="off" id="registerForm" onSubmit={handleRegistrationSubmit}>
                    <input autocomplete="off" name="hidden" type="text" style={{display:"none"}}/>

                    <p className='mt-3'>First Name</p>
                    <input onChange={handleRegisterInpustChange} name="firstName" value={registerObject && registerObject.firstName ? registerObject.firstName : null } placeholder="First Name"  type='text' className='w-100 py-2' />

                    <p className='mt-3'>Last Name</p>
                    <input onChange={handleRegisterInpustChange} name="lastName" value={registerObject && registerObject.lastName ? registerObject.lastName : null }  type='text' placeholder="Last Name" className='w-100 py-2'/>
                    
                    <p className='mt-3'>Contact Number</p>
                    <input type="number" onChange={handleRegisterInpustChange} value={registerObject && registerObject.phoneNumber ? registerObject.phoneNumber : null } name="phoneNumber" placeholder="Contact Number" className='w-100 py-2'/>

                    <p className='mt-3'>Email</p>
                    <input onChange={handleRegisterInpustChange} name="email" value={registerObject && registerObject.email ? registerObject.email : null } placeholder="something@some.com"  type='email' className='w-100 py-2' />

                    <p className='mt-3'> Choose Password</p>
                    <input onChange={handleRegisterInpustChange} type="password" name="password" value={registerObject && registerObject.password ? registerObject.password : null } placeholder="password" className='w-100 py-2'/>
                    <div className="text-center  mb-2 mt-2">
                    {registerResponse.length > 0 ? <p className="mt-1 mb-1">  <strong>{registerResponse}</strong></p> : null}
                    <Button color="primary" type="submit">Register</Button>
                    </div>
                  </form>
               </div>
               <div className="col-md-1"></div>

           </div>
        </ModalBody>
        <ModalFooter>
          <p style={{color: "blue", textDecoration:"underline", cursor:"pointer"}} onClick={loginPopHandler}>Login</p>
        </ModalFooter>
      </Modal>
      :
      null}
    </div>

  );
}
const mapStateToProps = state => {
  return {
    //Login
    login: state.Login.login,
    error: state.Login.error,
    loading: state.Login.loading
}
}

const mapDispatchToProps = dispatch => {
  return {
    onLogin: (data) => dispatch(actions.Login(data)),
    onErrorRefresh:() => dispatch(actions.ErrRefresh()),
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(Header);