import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import clonebnbLogo from '../../assets/clonebnbLogo.png'; 

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
      <div className='loginlogout'>
        <NavLink className="login" to="/login">Log In</NavLink>
        <NavLink className="logout" to="/signup">Sign Up</NavLink>
      </div>
    );
  }

  return (
    <div className='nav-bar'>
    <ul >
      
      <li className='nav-bar-buttons'>
      <div className='home-btn'>
    <NavLink exact to="/">
        <img className="navbar-logo" src={clonebnbLogo} alt="Clonebnb logo" />
        <p>clonebnb</p>
    </NavLink>
</div>
        {isLoaded && sessionLinks}
      </li>
    </ul>
    </div>
  );
}

export default Navigation;