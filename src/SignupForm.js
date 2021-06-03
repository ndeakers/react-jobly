import React from "react";
import { useHistory } from "react-router-dom";
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
/**
 * /signUp
 * 
 * props: handleSave fn
 * state: formData
 * */


function SignupForm() {

  return (
    <div className="SignUpForm">
      <h2>Sign Up</h2>
      <Form className="justify-content-center">
        <Form.Group className="mb-3" controlId="formUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Enter username" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" placeholder="First Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" placeholder="Last Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Sign Up
        </Button>
      </Form>
    </div>)
}

export default SignupForm;