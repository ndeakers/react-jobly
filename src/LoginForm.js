import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button"
import DisplayError from './DisplayError';
/**
 * /login
 * props: handleLogin fn
 * state: formData
 * */

function LoginForm({ handleLogin }) {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [errorMessages, setErrorMessages] = useState([]);
  const history = useHistory();

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  }

  // handles the login to set the token. redirects to home on success
  async function handleSubmit(evt) {
    evt.preventDefault();
    const response = await handleLogin(formData);
    if (response.success === true) {
      setFormData({ username: "", password: "" });
      history.push("/");
    } else {
      setErrorMessages(["Invald username or password"]);
    }
  }


  return (
    <div className="container col-md-6 offset-md-3 col-lg-4 offset-lg-4">

      {errorMessages.length !== 0
        ? <DisplayError errors={errorMessages} />
        : <></>}
      <Form className="justify-content-center" onSubmit={handleSubmit}>
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
      </Form>
    </div>)
}

export default LoginForm;