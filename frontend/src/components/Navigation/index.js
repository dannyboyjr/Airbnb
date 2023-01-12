import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser.id) {
    sessionLinks = (
      <div className='sessionButtons'>
        <div className='navButtons'>
          <div>
        <NavLink exact to="/create">Create Listings</NavLink>
        </div>
        <div>
        <NavLink exact to="/profile">profile</NavLink>
        </div>
        <div>
      <ProfileButton user={sessionUser} />
      </div>
      </div>
      </div>
    );
  } else {
    sessionLinks = (
      <>
        <NavLink to="/login">Log In</NavLink>
        <NavLink to="/signup">Sign Up</NavLink>
      </>
    );
  }

  return (
    <div className='nav-bar'>
    <ul >
      <li className='nav-bar-buttons'>
        <NavLink className="navbar-logo" exact to="/"></NavLink>
        {isLoaded && sessionLinks}
      </li>
    </ul>
    </div>
  );
}

export default Navigation;