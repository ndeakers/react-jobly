import React, { useState, useEffect, useContext } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import NavBar from './NavBar';
import JoblyApi from "./Api";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import jwt_decode from "jwt-decode";
import UserContext from "./userContext";




/**
 * state: currentUser - { id, title, companyHandle, companyName, state }
 * state: token: a token string
 * state: errorMessages: array of error messages
 * 
    fn- handleLogin: makes call to get token and sets token
    fn- handleSignUp: makes call to get token and sets token
    useEffect: get currentUser and set to state.
 *  App ---> NavBar, Routes
 */

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [errorMessages, setErrorMessages] = useState([]);
  const [isLoaded, setIsLoaded] = useState(true);

  console.log("App currentUser", currentUser);


  // gets token on login
  async function handleLogin(formData) {
    try {
      const tokenRes = await JoblyApi.login(formData);
      console.log('tokenres', tokenRes)
      localStorage.setItem('token', tokenRes.token)
      setToken(tokenRes.token);
      return { success: true };
    } catch (err) {
      return { success: false, errors: err } // throw here handle in login
    }
  }

  // gets token on register
  async function handleSignUp(formData) {
    try {
      const tokenRes = await JoblyApi.register(formData);
      localStorage.setItem('token', tokenRes.token)
      setToken(tokenRes.token);
      return { success: true };
    } catch (err) {
      return { success: false, errors: err } // throw here and handle in sign up
    }
  }

/** Log out a user -- setcurrent user and token to null */
  function logout(){
    setToken("");
    setCurrentUser(null)
    localStorage.removeItem('token');
  };


  // decodes the token and puts payload on currentUser
  useEffect(function fetchCurrentUser() {
    async function fetchUser() {
      if(token) {
      try {
        const { username } = jwt_decode(token);
        JoblyApi.token = token;
        const user = await JoblyApi.getUser(username);

        console.log('user', user)
        setCurrentUser(user);
        console.log('user--->>', user)

      } catch (err) {
        console.log('err in lon in', err)
        setErrorMessages(err);
      } 
    }
    setIsLoaded(false)
    }
    fetchUser();
  }, [token]);


if (isLoaded) {
  return (
    <div>
      <i className="fas fa-spinner fa-pulse"></i>
      <h2>Loading...</h2>
    </div>
  )
}
return (
    <div className="App">
      <BrowserRouter>
        <UserContext.Provider value={currentUser}>
          <NavBar logout={logout}/>
          <Routes handleLogin={handleLogin} handleSignUp={handleSignUp} errorMessages={errorMessages} />
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  )
}


export default App;




// const username = decodedToken.username;


