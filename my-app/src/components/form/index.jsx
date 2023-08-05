
import React , { useCallback,useState} from 'react';
 
import { useFormik,  } from 'formik';
import * as Yup from 'yup';


 import Input from './formGroup';

 import './form.css';
 
const Form = () =>{

   const validation = useFormik ({

 initialValues: {

    fistname: '',
    lastname: '',
    email: '',
    password: '',
    confirmPassword: '',

  },

 validationSchema:  Yup.object({

  fistname : Yup.string()
  .min(2,'Minimum 2 characters')
  .max(50,'Maximum 50 characters ')
  .required('Họ ít nhất 2 kí tự'),


  lastname : Yup.string()
  .min(2,'Minimum 2 characters')
  .max(50,'Maximum 50 characters ')
  .required('Tên ít nhất 2 kí tự!'),


   email: Yup.string()
   .email('Invalid email format')
   .required('Email sai định dạng!'),



   password: Yup.string()
   .min(6, 'Minimum 6 characters')
   .max(10,'Maximum 10 characters')
   .required(' Nhập lại mật khẩu!'),

   confirmPassword: Yup.string()
   .oneOf([Yup.ref('password')],"Nhập lại mật khẩu")
   .required(' Vui lòng nhập đúng lại mật khẩu!'),
 }),



 onSubmit: (values) => {
  console.log('««««« values »»»»»', values);

 },
   });

console.log('««««« validation.errors »»»»»', validation.errors);
  
console.log('««««« validation.touched »»»»»', validation.touched);




    return (
     <div  className=' form'>
       <nav class="navbar navbar-expand-lg navbar-light .bg-secondary.bg-gradient">
  <div class="container-fluid">
    <a class="navbar-brand $green-700" href="#">ANY WHERE APP</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Join</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
<div className='d-flex flex-column'  >
  <Input 
   label ="Fistname"
    placeholder="vui lòng điền tên"
    name = "fistname"
    validation={validation}
    classes="invalid"
    
 />
  <Input 
  label ="Lastname"
 placeholder='vui lòng điền tên'
  name ="lastname"
  validation={validation}
  classes="valid"
  
  /> 
  <Input 
   label="Email"
   placeholder='vui lòng nhập email'
   name = "email"
   validation={validation}
  //  classes="invalid"
  //  classes={isValidEmail() ? "valid" : "invalid"}
  />

  {/* {!isValidEmail && <p className='text-danger'>{validation.errors.email} </p>} */}
  <Input
   label ="Password"
   placeholder='vui lòng nhập mật khẩu'
   name = "password"
    validation={validation}
    />
    <Input 
    label ="ConfirmPassword"
    type="confirmPassword"
    placeholder='nhập lại mật khẩu'
    name = "confirmPassword"
    validation={validation}
    />
    <button type="button" 
    onClick={validation.handleSubmit}
    >Create Accouct</button>
 
</div>
     </div>
    );
}
export default Form ;

  



