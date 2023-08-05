import React ,{memo, useMemo}from "react";

const Input = ({
  label,
  type = "text",
  name,
  placeholder,
  validation,
  // classes
}) => {
  const isValid = useMemo(() => {
    if (validation.errors[name] && validation.touched[name]) {
      return false;
    }

    return true;
  }, [name, validation.errors, validation.touched]);


  return (
  <div  className="">
  <label htmlFor="exampleFormControlInput1" className="form-label">
      {label}
      </label>
      <input 
   
      id="exampleFormControlInput1"
        type={type}
        name={name}
        placeholder={placeholder}
        value={validation.values[name]}
        onChange={validation.handleChange}
        onBlur={validation.handleBlur}
        className={`form-control ${isValid ? '' : 'is-invalid'}`}
      />
     
      {!isValid &&(
         <div className="invalid-feedback">
         {validation.errors[name]} 
         </div>
   )}
   
  </div>
  );
};
  export default  memo (Input) ;
