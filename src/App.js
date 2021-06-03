import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import NavBar from './NavBar';
import JoblyApi from "./Api";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import jwt_decode from "jwt-decode";





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
      console.log('tokenres', tokenRes)
      setToken(tokenRes.token);
      return { success: true };
    } catch (err) {
      return { success: false, errors: err }
    }
  }
  // console.log('token', token)

  async function handleSignUp(formData) {
    try {
      const tokenRes = await JoblyApi.register(formData);
      setToken(tokenRes.token);
      return { success: true };
    } catch (err) {
      return { success: false, errors: err }
    }
  }


  useEffect(function fetchCurrentUser() {
    async function fetchUser() {
      
      try {
        const decodedToken = jwt_decode(token);
        console.log('decodedToken', decodedToken)
        JoblyApi.token = token;
        const user = await JoblyApi.getUser(decodedToken.username);

        console.log('user', user)
        setCurrentUser(user);
        console.log('user--->>', user)

      } catch (err) {
        console.log('err in lon in', err)
        setErrorMessages(err);
      }
    }
    if (token) {
      fetchUser();
    }
  }, [token]);




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


