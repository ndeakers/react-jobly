import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import NavBar from './NavBar';
import './App.css';

/**
 * state: 
 *  
 *  state- currentUser, token, applied jobs
    fn- handleCurrentUser(), updateToken(), applyForJob()
 *  App ---> NavBar, Routes
 */

function App() {
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
