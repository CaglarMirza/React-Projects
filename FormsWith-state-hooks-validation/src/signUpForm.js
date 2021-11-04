import React from "react";

const SignUpForm = () => {

  const FIELDS = {
    email: {
      value:""

    }
  }

  const [fields, setFields] =  React.useState(FIELDS)
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  
  const handleChange = (event) => {
    const {name, value} = event.target;
    const updatedField = {...fields[name]};
    updatedField.value = value;

    setFields({
      ...fields,
      [name]: updatedField
    });
  }

  const handleSubmit = (event) =>{
    event.preventDefault();
    setIsSubmitting(true);
    setTimeout(() =>{
      console.log(fields);
      setIsSubmitting(false);
    },2000)
  }

  return ( 
    <>
      <h1>Sign Up</h1>

      <form noValidate onSubmit={handleSubmit} > 
        <div className="form-group">
          <label for="email" className="">
            Email address
          </label>
          <input
            aria-describedby="emailHelp"
            autoComplete="off"
            className="form-control"
            id="email"
            name="email"
            type="email"
            onChange = {handleChange}
            value={fields.email.value}
            placeholder="Enter email"
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
          <small id="emailErrors" className="form-text text-danger">
            Error
          </small>
        </div>
        <button className="btn btn-primary" type="submit" disabled={isSubmitting}>
          Submit
        </button>
      </form>
    </>
  );
};

export default SignUpForm;
