import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions'

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

    if (email !== "test@test.com" || password !== "test1234") {
      document.getElementById("email").value = "";
      document.getElementById("password").value = "";
      return
    }
    this.props.loginUser();
    this.props.history.push('/dispensary');
  }

  render() {
    return (
      <form className="container form" id="sign-up" onSubmit={e => this.onSubmitHandler(e)}>
        <h1 className="large text-primary animated fadeInDown">Login</h1>
        <div className="form-group animated fadeIn delay-custom1">
          <label htmlFor="email">Email</label><br />
          <input type="text" name="email" placeholder="Enter email..." id="email" required />
        </div>
        <div className="form-group animated fadeIn delay-custom1">
          <label htmlFor="password">Password</label><br />
          <input type="text" name="password" placeholder="Enter password..." id="password" required />
        </div>

        {/* <div class="card"> */}
          {/* <div class="checkbox-container"> */}
            {/* <label class="checkbox-label">
                <input type="checkbox" />
                <span class="checkbox-custom rectangular"></span>
            </label> */}
          {/* </div> */}
        {/* </div> */}


        <div className="animated fadeIn delay-custom1">
          <label htmlFor="cookies" id="cookies-label">Accept Cookies? (Required)</label>
          {/* <input type="checkbox" name="cookies" id="cookies" /> */}
          <label class="checkbox-label">
              <input type="checkbox" />
              <span class="checkbox-custom rectangular"></span>
          </label>
        </div>
        <button type="submit" className="btn btn-primary shadow animated fadeIn delay-custom1" id="sign-up-btn" href="#" >Login</button>
        <p className="lead-small my-1 animated fadeIn delay-custom1">Forgot Password? <a className="text-primary animated-link" href="#" id="login-link">Reset</a></p>
      </form>
    )
  }
}

const mapStateToProps = (state) => {
  return {}
}

export default connect(mapStateToProps, actions)(Login);
