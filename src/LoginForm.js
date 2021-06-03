import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button"
/**
 * /login
 * props: handleLogin fn
 * state: formData
 * */

function LoginForm({ handleLogin }) {
  const [formData, setFormData] = useState({ username: "", password: "" });


  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    handleLogin(formData)
  }


  return (<Form className="justify-content-center" onSubmit={handleSubmit}>
    <Form.Group className="mb-3" controlId="formUsername">
      <Form.Label>Username</Form.Label>
      <Form.Control type="text" placeholder="Username"
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
    <Button variant="primary" type="submit">
      Login
    </Button>
  </Form>)
}

export default LoginForm;