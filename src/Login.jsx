import React, { useState } from "react";
//import ReactDOM from 'react-dom';
import Users from './users.json';
import { BrowserRouter as Router, Switch, Route, Link, Redirect, useHistory } from 'react-router-dom';

function Login() {
  let history = useHistory();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [pass, setPass] = useState('')
  const [confirmpassword, setConfirmPassword] = useState('')
  const [loggedIn, setLoggedIn] = useState(false)


  function EmailInput(event) {
    setEmail(event.target.value)

  }
  function PasswordInput(event) {
    setPassword(event.target.value)

  }

  function NameInput(event) {
    setName(event.target.value)

  }
  function UsernameInput(event) {
    setUsername(event.target.value)

  }
  function PassInput(event) {
    setPass(event.target.value)

  }


  function ConfirmPasswordInput(event) {
    setConfirmPassword(event.target.value)

  }


  function handleSignup(event) {
    event.preventDefault();
  }

  function handleLogin(event) {
    event.preventDefault();

    let checker = Users.some((arrVal) => {
      return email === arrVal.email && password === arrVal.password;
    });

    if (checker === true) {
      setLoggedIn(true)
      history.push('/Main')
    } else {
      alert('Email or Password incorrect')
    }


  }


  return (
    <div className="log">
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" defaultValue={email} onChange={EmailInput} className="form-control" id="exampleInputEmail1" placeholder="Email" />
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" defaultValue={password} onChange={PasswordInput} className="form-control" id="exampleInputPassword1" placeholder="Password" />
        </div>
        <p>Forgot password?...<a> Click here</a></p>
        <button type="submit" className="btn btn-block btn-success">Login</button>

        <br />
        <p>Don't have an account? Please Sign up here</p>
      </form>
      <a type="button" className="btn btn-primary btn-lg" style={{ width: '100%' }} data-toggle="modal" data-target="#myModal">
        Sign Up
</a>
      <div className="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">

              <h4 className="modal-title" id="myModalLabel">Modal title</h4>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSignup}>
                <div className="form-group">
                  <label for="exampleInputName">Full Name</label>
                  <input type="name" defaultValue={name} onChange={NameInput} className="form-control" id="exampleInputEmail1" placeholder="Username" />
                </div>
                <div className="form-group">
                  <label for="exampleInputEmail1">Email address</label>
                  <input type="email" defaultValue={username} onChange={UsernameInput} className="form-control" id="exampleInputEmail1" placeholder="Email" />
                </div>
                <div className="form-group">
                  <label for="exampleInputPassword1">Password</label>
                  <input type="password" defaultValue={pass} onChange={PassInput} className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <div className="form-group">
                  <label for="exampleInputPassword1">Confirm Password</label>
                  <input type="password" defaultValue={confirmpassword} onChange={ConfirmPasswordInput} className="form-control" id="exampleInputPassword1" placeholder="Confirm Password" />
                </div>

                <button type="submit" className="btn btn-block btn-success">Sign up</button>

              </form>
            </div>
            <div className="modal-footer">
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
