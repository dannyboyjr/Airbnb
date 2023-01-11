// frontend/src/App.js
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch, useParams } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Home from './pages/Home'
import Profile from "./pages/Profile";
import CreateSpotPage from "./pages/CreateSpotPage";
import EditSpotPage from "./pages/EditSpotPage";
import SpotPage from "./pages/SpotPage";
import EditReviewPage from "./pages/EditReviewPage";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);


  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/create">
            <CreateSpotPage />
          </Route>
          <Route exact path="/spots/:id">
            <SpotPage />
          </Route>
          <Route exact path="/spots/:id/edit">
            <EditSpotPage />
          </Route>
          <Route exact path="/reviews/:id/">
            <EditReviewPage />
          </Route>
          <Route  path="/">
            <Home />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
