import React from 'react';


const Input = ( {
   label,
   type = "text",
   name,
   placeholder,
   onChange,
   value 
  }) =>{
 
  return (
 
    <label>
   {label};
    <input
     type={type}
     name={name}
     placeholder={placeholder}
      value={value}
      onChange={(e)=> onChange(e.target.value ,name)} />
   </label>
  )
}
export default Input ;

