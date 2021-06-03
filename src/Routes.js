import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Homepage from './Homepage';
import CompanyList from './CompanyList';
import CompanyDetail from './CompanyDetail';
import JobList from './JobList';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import ProfileForm from './ProfileForm';
/**
 *  Routes for Jobly App
 * 
 *  Redirects to Home
 * */


function Routes({ handleLogin, handleSignUp, errorMessages }) {
    return (
        <Switch>
            <Route exact path="/">
                <Homepage />
            </Route>
            <Route exact path="/companies">
                <CompanyList />
            </Route>
            <Route exact path="/companies/:handle">
                <CompanyDetail />
            </Route>
            <Route exact path="/jobs">
                <JobList />
            </Route>
            <Route exact path="/login">
                <LoginForm handleLogin={handleLogin} />
            </Route>
            <Route exact path="/signup">
                <SignupForm handleSignUp={handleSignUp} />
            </Route>
            <Route exact path="/profile">
                <ProfileForm />
            </Route>
            <Redirect to="/" />
        </Switch>
    )
}

export default Routes;