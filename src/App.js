import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import NavBar from './NavBar';
import JoblyApi from "./Api";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
/**
 * state: 
 *  TODO : Still working on app state
 *  state- currentUser, token, applied jobs ?
    fn- handleCurrentUser(), updateToken(), applyForJob() ?
 *  App ---> NavBar, Routes
 */

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useState("");
  const [errorMessages, setErrorMessages] = useState(null);
  const [signUpData, setSignUpData] = useState(null);
  const [loginData, setloginUpData] = useState(null);



  function handleLogin(formData) {
    setloginUpData(formData);
  }

  function handleSignUp(formData) {
    setSignUpData(formData);
  }


  useEffect(function fetchTokenOnLogin() {
    async function fetchToken() {
      try {
        const tokenRes = await JoblyApi.login(loginData);
        setToken(tokenRes);
      } catch (err) {
        setErrorMessages(err);
      }
    }
    fetchToken();
  }, [loginData]);


  useEffect(function fetchTokenOnSignUp() {
    async function fetchToken() {
      try {
        const tokenRes = await JoblyApi.register(signUpData);
        setToken(tokenRes);
      } catch (err) {
        setErrorMessages(err);
      }
    }
    fetchToken();
  }, [signUpData]);


  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes />
      </BrowserRouter>

    </div>
  )
}

export default App;
