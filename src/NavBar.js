import { NavLink } from "react-router-dom";
import React, { useContext } from "react";
import UserContext from "./userContext";
import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"

/**
 * App--> NavBar
 * props: none
 * useContext: uses currentUser to determine whether to show anonymous Nav or Logged in Nav
 *  //TODO update docstroing
 * */
function NavBar({logout}) {
  const currentUser = useContext(UserContext);
  console.log("NavBar currentUser in Nav", currentUser);
  return (
    <Navbar bg="dark" variant="dark" className="navbar">
      {currentUser === null
        ? <Container className="Navbar-anon">
          <Nav className="me-auto">
            <NavLink exact to="/" id="jobly">Jobly</NavLink>
            <NavLink exact to="/signup">Sign Up</NavLink>
            <NavLink exact to="/login">Log In</NavLink>
          </Nav>
        </Container>
        : <Container className="Navbar-loggedin">
          <Nav className="me-auto">
            <NavLink exact to="/">Jobly</NavLink>
            <NavLink exact to="/companies">Companies</NavLink>
            <NavLink exact to="/jobs">Jobs</NavLink>
            <NavLink exact to="/profile">Profile</NavLink>
            <NavLink onClick={logout} exact to="/">Logout</NavLink>
          </Nav>
        </Container>}

    </Navbar>
  )
}

export default NavBar;