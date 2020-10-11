import React from "react";
import './Login.css';

function Login (){
    return(
<div className="log">

<form className="login-form" action="www.google.com">
  <h1 >Login</h1>
  <div className="form-input-material">
    <input type="text" name="username" id="username" placeholder=" " autocomplete="off" className="form-control-material" required />
    <label for="username">Username</label>
  </div>
  <div className="form-input-material">
    <input type="password" name="password" id="password" placeholder=" " autocomplete="off" className="form-control-material" required />
    <label for="password">Password</label>
    <br/>
    <br/>
    <a href="www.google.com">Forgot Password?</a>
  </div>
  <button type="submit" className="btn btn-primary btn-ghost">Login</button>
  <p>Don't have an account?....</p><a href="www.google.com">Sign up </a>
</form>

</div>
    );
    
}
export default Login;