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
  const [errorMessages, setErrorMessages] = useState([]);



  async function handleLogin(formData) { // await this in login. same in for signup
    try {
      const tokenRes = await JoblyApi.login(formData);
      setToken(tokenRes);
      return { success: true };
    } catch (err) {
      return { success: false, errors: err }
    }
  }


  async function handleSignUp(formData) {
    try {
      const tokenRes = await JoblyApi.register(formData);
      setToken(tokenRes);
      return { success: true };
    } catch (err) {
      return { success: false, errors: err }
    }
  }


  // useEffect(function fetchTokenOnLogin() {
  //   async function fetchToken() {
  //     try {
  //       const tokenRes = await JoblyApi.login(loginData);
  //       setToken(tokenRes);
  //       console.log('tokenresinlogin--->>', tokenRes)
  //     } catch (err) {
  //       console.log('err in lon in', err)
  //       setErrorMessages(err);
  //     }
  //   }
  //   if (loginData) {
  //     fetchToken();
  //   }
  // }, [loginData]);



  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes handleLogin={handleLogin} handleSignUp={handleSignUp} errorMessages={errorMessages} />
      </BrowserRouter>

    </div>
  )
}

export default App;




// const username = decodedToken.username;


