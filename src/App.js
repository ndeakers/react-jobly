import React, { useState, useEffect } from 'react';
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
 * state: isLoading: Boolean dependent on token. If true, fetchUser is called.
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
  const [isLoading, setisLoading] = useState(Boolean(token));

  console.log("App", currentUser, token, errorMessages, isLoading);


  // gets token on login
  async function handleLogin(formData) {
    try {
      const tokenRes = await JoblyApi.login(formData);
      console.log('tokenres', tokenRes)
      localStorage.setItem('token', tokenRes.token)
      setToken(tokenRes.token);
      setisLoading(true)
      return { success: true };
    } catch (err) {
      return { success: false, errors: err } // throw here handle in login
    }
  }

  // gets token on register
  async function handleSignUp(formData) {
    console.log("App, signup, formdata", formData)
    try {
      const tokenRes = await JoblyApi.register(formData);
      localStorage.setItem('token in SignUp', tokenRes.token)
      setToken(tokenRes.token);
      setisLoading(true)
      return { success: true };
    } catch (err) {
      return { success: false, errors: err } // throw here and handle in sign up
    }
  }

  /** Log out a user -- setcurrent user and token to null */
  function logout() {
    setToken("");
    setCurrentUser(null)
    localStorage.removeItem('token');
  };


  // decodes the token and puts payload on currentUser
  useEffect(function fetchCurrentUser() {
    async function fetchUser() {
      console.log('APP fetch User')
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
      setisLoading(false)
    }
    console.log('App fetch currnet User', 'isLoading--->>', isLoading, 'token--->>', token)
    if (isLoading) fetchUser();
  }, [token, isLoading]);


  if (isLoading) {
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
          <NavBar logout={logout} />
          <Routes handleLogin={handleLogin} handleSignUp={handleSignUp} errorMessages={errorMessages} />
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  )
}


export default App;

// updates user profile
// make update function is api.
// make aysnc handleupdate in app that will take formdata as parameter 
  // call update function from api and set response to variable . try/catch
  // set current user from old user to new user....


// in profile form
  // pass handleupdate as prop, 
    // current usre as a prop or context
// state
  // formdata . initial data with be from current user
  // errormessages
  // history
  // maybe isupdated to display message if updated Successfully 


//handle change -- boilerplate
// handle submit
  //evt default
  // ?set isupdated
  // call handleupdate 
  // if reseponse success
  // set formdata
  // history push
  // otherwise set errors



// we haven't worked on apply feature
  // add apply func in api
  // in job card
    // add a piece of start to check if current user applied for this job or not
    // add apply button
    // add handle click
        // calls api apply func
        // add job id to user

    // if user applied show applied button, otherwise show apply button. 
      // maybe use diable feature or a new button.

