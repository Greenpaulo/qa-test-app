import React, { Component, setState } from 'react';

class Login extends Component {
  state = {
    isLoggedIn: false
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  onSubmitHandler = e => {
    e.preventDefault()
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    console.log(email, password)

    if (email !== "test@test.com" || password !== "test1234") {
      document.getElementById("email").value = "";
      document.getElementById("password").value = "";
      return
    }
    this.setState({isLoggedIn: !this.state.isLoggedIn})
    this.props.history.push('/dispensary');
  }

  render() {
    return (
      <form className="container form" id="sign-up" onSubmit={e => this.onSubmitHandler(e)}>
        <h1 className="large text-primary">Login</h1>
        <div className="form-group">
          <label htmlFor="email">Email</label><br />
          <input type="text" name="email" placeholder="Enter email..." id="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label><br />
          <input type="text" name="password" placeholder="Enter password..." id="password" required />
        </div>
        <button type="submit" className="btn btn-primary shadow" id="sign-up-btn" href="#" >Login</button>
        <p className="lead-small my-1">Forgot Password? <a className="text-primary animated-link" href="#" id="login-link">Reset</a></p>
      </form>
    )
  }
}

export default Login;