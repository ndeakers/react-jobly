import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
/**
 * /
 * Routes ---> HomePage
 * props: TODO currentUser?
 *  State: none
 * */

function Homepage() {

  return (<h1>Homepage!</h1>)
}

export default Homepage;

// pass current user as a prop from app -->> roures >> home page or user it from context
// Add h1 with jobly name
// h4 with All the jobs in one, convenient place.
// after title add ternary
  // if we have a currnet user
    //? h4 welcome back, username
    // : show a div with button links to login and sign up. 


  
