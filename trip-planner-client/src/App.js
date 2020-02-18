import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div id="appWrapper">
      <div className="logIn">
        <h2>Log in</h2>
        <div>
          <span>Email:</span>
          <input type="email" name="logInEmail" />
        </div>
        <div>
          <span>Password:</span>
          <input type="password" name="logInPassword" />
        </div>
      </div>

      <div className="register">
        <h2>Register</h2>
        <div>
          <span>Email:</span>
          <input type="email" name="registerInEmail" />
        </div>
        <div>
          <span>Password:</span>{" "}
          <input type="password" name="registerInPassword" />
        </div>
      </div>
    </div>
  );
}

export default App;