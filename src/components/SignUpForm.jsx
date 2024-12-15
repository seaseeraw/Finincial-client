// import React from 'react'
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import { CustomInput } from './CustomInput';
// import { useState } from 'react';
// import { toast } from 'react-toastify';
// import { postNewUser } from '../../helper/axioshelper';

// export const SignUpForm = () => {
// const[form, setForm]= useState({});
//     const fields = [
//         {
//             label:"Name",
//             placeholder:"John Doe",
//             required:true,
//             type:"text",
//             name:"name"

//         },
//         {
//             label:"Email",
//             placeholder:"John@email.com",
//             required:true,
//             type:"email",
//             name:"email"

//         },
//         {
//             label:"Password",
//             placeholder:"J*****",
//             required:true,
//             type:"password",
//             name:"password"

//         },
//         {
//             label:"Confirm Password",
//             placeholder:"J*****",
//             required:true,
//             type:"password",
//             name:"confirmPassword"

//         },
//     ];
// const handleOnChange = (e)=>{
//     const {name, value}=e.target;
  
//     setForm({
//         ...form,[name]:value,
//     })
// };




// const handleOnSubmit = async(e) =>{
// e.preventDefault();
// const {confirmPassword, ...rest } = form;
// if(confirmPassword !== rest.password){
//     return toast.error("Password donot match");
// }
// const {status, message} = await postNewUser(rest)
// toast[status](message);
// console.log(form);
// };
//   return (
//     <div className='border rounded p-4'>
//         <h4 className='mb-5'>Sign up now</h4>
//         <Form onSubmit={handleOnSubmit}>
//             {
//                 fields.map((input)=>(<CustomInput key={input.name}{...input} onChange={handleOnChange}/>))
//             }
//       {/* <CustomInput/> */}

     
      
      
//       <div className="d-grid">
//       <Button variant="primary" type="submit">
//         Submit
//       </Button>
//       </div>
//     </Form>
//     </div>
//   )
// }



import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { CustomInput } from './CustomInput';
import { toast } from 'react-toastify';
import { postNewUser } from '../../helper/axioshelper';

export const SignUpForm = () => {
    const [form, setForm] = useState({});

    const fields = [
        {
            label: "Name",
            placeholder: "John Doe",
            required: true,
            type: "text",
            name: "name",
        },
        {
            label: "Email",
            placeholder: "John@email.com",
            required: true,
            type: "email",
            name: "email",
        },
        {
            label: "Password",
            placeholder: "J*****",
            required: true,
            type: "password",
            name: "password",
        },
        {
            label: "Confirm Password",
            placeholder: "J*****",
            required: true,
            type: "password",
            name: "confirmPassword", // Fixed the name to match expected state key
        },
    ];

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value,
        });
    };

    const handleOnSubmit = async (e) => {
        e.preventDefault();

        const { confirmPassword, password, ...rest } = form;

        // Validate if passwords match
        if (confirmPassword !== password) {
            return toast.error("Passwords do not match");
        }

        // Check for empty required fields
        if (Object.values(rest).some((field) => !field.trim()) || !password.trim()) {
            return toast.error("All fields are required");
        }

        // Call API to register user
        const { status, message } = await postNewUser(rest);
        toast[status](message);
        console.log("Form submitted:", form);
    };

    return (
        <div className="border rounded p-4">
            <h4 className="mb-5">Sign up now</h4>
            <Form onSubmit={handleOnSubmit}>
                {fields.map((input) => (
                    <CustomInput key={input.name} {...input} onChange={handleOnChange} />
                ))}

                <div className="d-grid">
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </div>
            </Form>
        </div>
    );
};
