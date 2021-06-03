import { NavLink, Link } from "react-router-dom";
import React, { useContext } from "react";
import UserContext from "./userContext";
import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"

/**
 * App--> NavBar
 * props: none
 * useContext: uses currentUser to determine whether to show anonymous Nav or Logged in Nav
 *  
 * */
function NavBar() {
  const currentUser = useContext(UserContext);
  console.log("currentUser in Nav", currentUser);
  return (
    <Navbar bg="dark" variant="dark" className="navbar">
      {currentUser === null
        ? <Container className="Navbar-anon">
          <Nav className="me-auto">
            <NavLink to="/">Jobly</NavLink>
            <NavLink to="/signup">Sign Up</NavLink>
            <NavLink to="/login">Log In</NavLink>
          </Nav>
        </Container>
        : <Container className="Navbar-loggedin">
          <Nav className="me-auto">
            <NavLink to="/">Jobly</NavLink>
            <NavLink to="/companies">Companies</NavLink>
            <NavLink to="/jobs">Jobs</NavLink>
            <NavLink to="/profile">Profile</NavLink>
          </Nav>
        </Container>}

    </Navbar>
  )
}

export default NavBar;