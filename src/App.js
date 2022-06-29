import React from "react";
import './index.css';
import { useState } from "react";

function App() {
  const [ values, setValues ] = useState({
    firstName: "",
    lastName: "",
    email: ""
  });

  const [ submitted,setSubmitted ] = useState(false);
  const [ valid, setValid ] = useState(false); 

  const handleFirstNameInputChange = (event) => {
    setValues({...values, firstName: event.target.value})
  }
  const handleLastNameInputChange = (event) => {
    setValues({...values, lastName: event.target.value})
  }
  const handleEmailInputChange = (event) => {
    setValues({...values, email: event.target.value})
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if(values.firstName && values.lastName && values.email){
      setValid(true);
    }
    setSubmitted(true);
  }

  return (
    <div className="form-container">
      <form className="register-form" onSubmit={handleSubmit}>
        {submitted && valid ? <div className="success-message">Success! Thank you for register</div> : null}
        <input
          onChange={handleFirstNameInputChange}
          value={values.firstName}
          className="form-field"
          type="text"
          placeholder="First name"
          name="firstName" />
        {submitted && !values.firstName ? <span>Please enter your first name</span> : null}
        <input
          onChange={handleLastNameInputChange}
          value={values.lastName}
          className="form-field"
          type="text"
          placeholder="Last name"
          name="lastName" />
        {submitted && !values.lastName ? <span>Please enter your last name</span> : null}
        <input 
          onChange={handleEmailInputChange}
          value={values.email}
          className="form-field"
          type="text"
          placeholder="Email"
          name="email" />
          {submitted && !values.email ? <span>Please enter your email</span> : null}
          <button className="form-field" type="submit">
            Register
          </button>
      </form>
    </div>
  )
}

export default App;
