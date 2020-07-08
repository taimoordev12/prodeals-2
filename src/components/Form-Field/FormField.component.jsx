import React from 'react'
import {Label, Input,  } from 'reactstrap';
import '../Form-Field/FormField.css';


 const FormField=({PlaceHolder,label,Type,OptionData})=> {
    return( 
        <React.Fragment>

            <Label className="text-white">
                <h4>{label}</h4>
                </Label>

        <Input className="field-height " type={Type}   placeholder={PlaceHolder} >

         {OptionData.map((option)=><option key={option}>{option}</option>)}
        
        </Input>
        </React.Fragment>
          )
}

export default FormField;