import React from 'react'
import '../ButtonCustom/ButtonCustom.style.css';

const  ButtonCustom=({children,longbtn,onClick1})=> {
    return (
      <button onClick={onClick1}  className={` mainButton shadow-lg ${longbtn ?'longbtn' : ''}`}>
        {children}
      </button> 
    )
}
export default  ButtonCustom;
