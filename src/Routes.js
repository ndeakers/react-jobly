import React, { useContext } from "react";
import UserContext from "./userContext";
import { Route, Switch, Redirect } from 'react-router-dom';
import Homepage from './Homepage';
import CompanyList from './CompanyList';
import CompanyDetail from './CompanyDetail';
import JobList from './JobList';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import ProfileForm from './ProfileForm';
/**
 * Routes for Jobly App
 * props: handleLogin fn- passed from App to loginForm
 * props: handleSignUp fn- passed from App to SignUpForm
 *  useContext()- currentUser information. Used to protect routes
 *  Redirects to home if bad url or not authorized
 * */
function Routes({ handleLogin, handleSignUp }) {
    const currentUser = useContext(UserContext);

    console.log('Routes currentUser--->>', currentUser)
    return (
        <Switch>
            <Route exact path="/">
                <Homepage />
            </Route>
            {currentUser ?
                <Switch>
                    <Route exact path="/companies">
                        <CompanyList />
                    </Route>
                    <Route exact path="/companies/:handle">
                        <CompanyDetail />
                    </Route>
                    <Route exact path="/jobs">
                        <JobList />
                    </Route>
                    <Route exact path="/profile">
                        <ProfileForm />
                    </Route>
                    <Redirect to="/" />
                </Switch>
                :
                <Switch>
                    <Route exact path="/login">
                        <LoginForm handleLogin={handleLogin} />
                    </Route>
                    <Route exact path="/signup">
                        <SignupForm handleSignUp={handleSignUp} />
                    </Route>
                    <Redirect to="/" />
                </Switch>}
        </Switch>
    )
}

export default Routes;