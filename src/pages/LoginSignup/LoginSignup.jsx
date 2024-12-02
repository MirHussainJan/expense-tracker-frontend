import { useState } from 'react';
import Login from '../../components/LoginSignup/Login';
import Signup from '../../components/LoginSignup/Signup';
import style from './LoginSignup.module.css'; // Importing the CSS module

function LoginSignup() {
  const [isSignUpMode, setIsSignUpMode] = useState(false);

  const handleSignInClick = () => {
    setIsSignUpMode(false);
  };

  const handleSignUpClick = () => {
    setIsSignUpMode(true);
  };

  return (
    <div
      className={`${style.containerr} font-poppins ${
        isSignUpMode ? style['sign-up-mode'] : ''
      }`}
    >
      <div className={style['forms-containerr']}>
        <div className={style['signin-signup']}>
          <Login />
          <Signup />
        </div>
      </div>
      <div className={style['panels-containerr']}>
        <div className={`${style.panel} ${style['left-panel']}`}>
          <div className={style.content}>
            <h3>New here?</h3>
            <h1>Welcome to Expense Tracker Login page</h1>
            <button
              className={`${style.btn} ${style.transparent}`}
              id="sign-up-btn"
              onClick={handleSignUpClick}
            >
              Sign Up
            </button>
          </div>
        </div>
        <div className={`${style.panel} ${style['right-panel']}`}>
          <div className={style.content}>
            <h3>One of us?</h3>
            <p>Welcome to Expense Tracker Signup page</p>
            <button
              className={`${style.btn} ${style.transparent}`}
              id="sign-in-btn"
              onClick={handleSignInClick}
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginSignup;
