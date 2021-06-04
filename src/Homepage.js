import React, { useContext } from "react";
import UserContext from "./userContext";
import { Link } from "react-router-dom";

/**
 * /
 * Routes ---> HomePage
 * props: none
 *  State: none
 * context : current user
 * */

function Homepage() {
  const currentUser = useContext(UserContext);

  console.log('Homepage user---->', currentUser)
  return (
    <div className="homePage container text-center" >
      <h1>Jobly!</h1>
      <h4>All the jobs in one, convenient place.</h4>
      {currentUser?
      <h4>Welcome back, {currentUser.user.username}</h4>
      :<>
      <Link to="/signup" className="btn btn-primary font-weight-bold mr-3">Sign Up</Link>
      <Link to="/login" className="btn btn-primary font-weight-bold mr-3">Log In</Link>
      </>
      }
    </div>)
}

export default Homepage;


  
