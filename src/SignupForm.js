import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import DisplayError from './DisplayError';
/**
 * /signUp
 * 
 * props: handleSave fn
 * state: formData
 * */


function SignupForm({handleSignUp, errorMessages}) {

const initialFormData = {
  username:"",
  password:"",
  firstName:"",
  lastName:"",
  email:""
}

const [formData, setFormData] = useState(initialFormData);

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    handleSignUp(formData)
  }

 

  return (
   
    <div className="container col-md-6 offset-md-3 col-lg-4 offset-lg-4">
      <h2>Sign Up</h2>

      {errorMessages.length !== 0
      ? <DisplayError errors={errorMessages} />
      : <></> }
      <Form className="justify-content-center signupform" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Enter username" 
                  name="username"
                  value={formData.username}
                  onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" 
                            name="password"
                            value={formData.password}
                            onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" placeholder="First Name" 
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" placeholder="Last Name" 
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" 
                            name="email"
                            value={formData.email}
                            onChange={handleChange} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Sign Up
        </Button>
      </Form>
    </div>)
}

export default SignupForm;