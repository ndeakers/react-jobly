import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import NavBar from './NavBar';
import JoblyApi from "./Api";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import DisplayError from './DisplayError';

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
  const [errorMessages, setErrorMessages] = useState([]);
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
        console.log('tokenresinlogin--->>', tokenRes)
      } catch (err) {
        console.log('err in lon in', err)
        setErrorMessages(err);
      }
    }
    if(loginData){
       fetchToken();
    }
  }, [loginData]);


  useEffect(function fetchTokenOnSignUp() {
    async function fetchToken() {
      try {
        const tokenRes = await JoblyApi.register(signUpData);
        console.log('tokenresinSignup--->>', tokenRes)
        setToken(tokenRes);
      } catch (err) {
        console.log('err in sign up', err)
        setErrorMessages(err);
      }
    }
    console.log('signUpData---->>', signUpData)
    if(signUpData){
      fetchToken();
    }
    
  }, [signUpData]);


  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes handleLogin={handleLogin} handleSignUp={handleSignUp} errorMessages={errorMessages}/>
      </BrowserRouter>

    </div>
  )
}

export default App;
