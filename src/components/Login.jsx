import { ChangeEventHandler, FormEventHandler, useRef, useState } from "react";

function App() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [password, setPassworđ] = useState("");

  const showSignIn = () => {
    setIsSignUp(false);
  };

  const showSignUp = () => {
    setIsSignUp(true);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (isSignUp) {
      alert("Sign up !");
    } else {
      alert("Login !");
    }
  };

  const onChangeConfirmPass = (e) => {
    if (e.target.value === password || e.target.value.length < 6) {
      e.target.setCustomValidity("");
    } else {
      e.target.setCustomValidity("Passwords do not match");
    }
  };

  return (
    <Wrapper>
      <div className={`container ${isSignUp ? "signup-active" : ""}`} id="container">
        <div className="form-container sign-up-container">
          <form onSubmit={onSubmit}>
            <h1>Create Account</h1>
            <label htmlFor="email">Email</label>
            <input type="email" placeholder="pigeon@nestcoop.com" required />

            <label htmlFor="password">Password</label>
            <input
              type="password"
              minLength={6}
              placeholder="******"
              required
              value={password}
              onChange={(e) => setPassworđ(e.target.value)}
            />

            <label htmlFor="confirmPassword">Confirm Password</label>
            <input type="password" minLength={6} placeholder="******" required onChange={onChangeConfirmPass} />

            <button type="submit">Create</button>

            <span className="link" onClick={showSignIn}>
              Already have an account?
            </span>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form onSubmit={onSubmit}>
            <h1>Sign in</h1>
            <label htmlFor="email">Email</label>
            <input type="email" placeholder="pigeon@nestcoop.com" required />

            <label htmlFor="password">Password</label>
            <input type="password" minLength={6} placeholder="******" required />

            <button type="submit">Login</button>

            <span className="link" onClick={showSignUp}>
              Create account
            </span>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <div className="title">Lets get you started</div>
              <p>Be part of out awesome team and have fun with us</p>
            </div>
            <div className="overlay-panel overlay-right">
              <div className="title">Hello There</div>
              <p>Don't have an account?</p>
              <p>Sign up with us today!</p>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default App;