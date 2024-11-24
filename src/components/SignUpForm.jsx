import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { CustomInput } from './CustomInput';
import { useState } from 'react';
import { toast } from 'react-toastify';

export const SignUpForm = () => {
const[form, setForm]= useState({});
    const fields = [
        {
            label:"Name",
            placeholder:"John Doe",
            required:true,
            type:"text",
            name:"name"

        },
        {
            label:"Email",
            placeholder:"John@email.com",
            required:true,
            type:"email",
            name:"email"

        },
        {
            label:"Password",
            placeholder:"J*****",
            required:true,
            type:"password",
            name:"password"

        },
        {
            label:"Confirm Password",
            placeholder:"J*****",
            required:true,
            type:"password",
            name:"Confirm password"

        },
    ];
const handleOnChange = (e)=>{
    const {name, value}=e.target;
  
    setForm({
        ...form,[name]:value,
    })
};

const handleOnSubmit = e =>{
e.preventDefault();
const {confirmPassword, ...rest}=form;
if(confirmPassword !== rest.password){
    return toast.error("Password donot match");
}

console.log(form);
};
  return (
    <div className='border rounded p-4'>
        <h4 className='mb-5'>Sign up now</h4>
        <Form onSubmit={handleOnSubmit}>
            {
                fields.map((input)=>(<CustomInput key={input.name}{...input} onChange={handleOnChange}/>))
            }
      {/* <CustomInput/> */}

     
      
      
      <div className="d-grid">
      <Button variant="primary" type="submit">
        Submit
      </Button>
      </div>
    </Form>
    </div>
  )
}
