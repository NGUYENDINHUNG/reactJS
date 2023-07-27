
import React , {useState} from 'react';
 import Input from './formGroup';

const Form = () =>{

  
      
    // const [fistname,setFistname] = useState('');
    // const [lastname,setLastname] = useState('');
    // const [email,setEmail] = useState('');
    // const [password,setPassword] = useState('');
    // const [confirmpassword,setConfirmpassword] = useState('');

     const [user, setUser] = useState({
        fistname: '',
        lastname: '',
        password: '',
        email: '',
        password:'',
        confirmpassword: '',
     })


  
    const onSubmitForm = (e) => {
        e.preventDefault();
    
     }
  console.log('««««« user »»»»»', user);
  const onChangeInput = (value,Name ) => {
      setUser ((prevState)  => ({
        ...prevState,
        [Name]: value,
      })) ;
  }





// const OnchangFistname = (e) => {

//  setUser((prevState)=> ({

//   ...prevState,

//   fistname: e.target.value,

// })); 
// };

// const OnchangLastname = (e) => {

//   setUser((prevState)=> ({

//     ...prevState,
  
//     lastname: e.target.value,
  
// })); 
// };


// const OnchangEmail = (e) => {
//   setUser((prevState)=> ({
//     ...prevState,
//    email: e.target.value,
// })); 
// };

// const OnchangPassword = (e) => {
//   setUser((prevState)=> ({
//     ...prevState,
//   password : e.target.value,
// })); 
// };

// const OnchangConfirm = (e) => {
//   setUser((prevState)=> ({
//     ...prevState,
//     confirmpassword: e.target.value,
// })); 
// };



    return (
     <div >
       {/* <nav class="navbar navbar-expand-lg navbar-light .bg-secondary.bg-gradient">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">ANY WHERE APP</a>
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
</nav> */}
<form className='d-flex flex-column' onSubmit={onSubmitForm} >
  <input 
   label = "Fisname"
    type = "text"
    placeholder="fistname"
    name = "fistname"
    value={ user.fistname}
    onChange = {onChangeInput}
    // onChange={(e)=> onChange(e.target.value ,name)}
 />
  <input 
  label = " Lastname"
  type='text'
  placeholder='Lastname'
  name = "lastname"
  value={user.lastname}
  onChange={onChangeInput}
  /> 
  <input 
   label="Email"
   type='email'
   placeholder='email'
   name = "Email"
   value={ user.email}
   onChange={onChangeInput}
  />
  <input
   label = "Password"
   type='password'
   placeholder='password'
   name = "Password"
   value={ user.password}
   onChange={onChangeInput}
  />
    <input 
    label = " ConfirmPassword"
    type='password'
    placeholder='confirmpassword'
    name = "password"
    value={ user.password}
   onChange={onChangeInput}
    />
 <input type="submit" name='submit' />
</form>
     </div>
    );
}
export default Form ;

  



<Input/>