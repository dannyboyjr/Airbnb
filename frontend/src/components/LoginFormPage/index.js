// frontend/src/components/LoginFormPage/index.js
import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './LoginForm.css';

function LoginFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [credential, setCredential] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  if (sessionUser.id) return (
    <Redirect to="/" />
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password }))
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
  }

  const loginSeeder = (e)=>{
    setErrors([]);
    setCredential("user1@user.io")
    setPassword('password1')
    return dispatch(sessionActions.login({credential, password }))
  }

  return (
    <div className="page-layout-for-footer">
    <div className="login-form-container">
    <div className='login-form-wrapper'>
      <div className='login-form'>
      <h2>Login</h2>
    <form onSubmit={handleSubmit}>
      <ul>
        {errors.map((error, idx) => <li key={idx}>{error}</li>)}
      </ul>
      <label>
        Email
        <input
          type="text"
          value={credential}
          onChange={(e) => setCredential(e.target.value)}
          required
        />
      </label>
      <label>
        Password
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
      <button className='blue-login-bnt' type="submit">Log In</button>
      <button onClick={loginSeeder}>demo login</button>
    </form>
    </div>
    </div>
    </div>
    </div>
  );
}

export default LoginFormPage;