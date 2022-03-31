import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Navbar extends Component {
  state = {
    dropdownActive: false
  }

  // Helper method to show authenticated content
  renderLogin() {
    switch (this.props.auth.user) {
      // If we don't know yet, show nothing.
      case null:
        return;
      // If the user isn't logged in - show the Login button
      case false:
        return (
          <li className="login"><Link to="/login">Login</Link></li>
          // <li className="login"><a href="/auth/google" onClick={this.handleClick}>Login with Google</a></li>
        );
      // Default is that they are logged in - show the Logout button
      default:
        return <li className="login"><Link href="/login">Login</Link></li>
        // return <li className="login"><a href="/api/logout" onClick={this.handleClick}>Logout</a></li>
    }
  }

  toggleDropdown = () => {
    
    // If not already showing and then open
    // Note: check the browser width to stop dropdown opening when the login button is clicked on wider screens
    if (this.state.dropdownActive === false && window.innerWidth < 1131) {

      const dropdown = document.querySelector("#dropdown-nav");
      dropdown.classList.toggle('animated');
      dropdown.classList.toggle('fadeInDown');
      dropdown.style.zIndex = "2";
      dropdown.style.display = "block"

      // Set variable opacity dependent on width of display
      if (window.innerWidth < 500) {
        dropdown.style.opacity = "1";
      } else {
        dropdown.style.opacity = "0";
      };
      this.setState({ dropdownActive: true });

    } else {
      // Its open, so close
      const dropdown = document.querySelector("#dropdown-nav");
      dropdown.classList.toggle('animated');
      dropdown.classList.toggle('fadeInDown');
      dropdown.style.opacity = "0";
      dropdown.style.display = "none";
      dropdown.style.zIndex = "0";
      this.setState({ dropdownActive: false });
    }
  }

  handleClick = (link) => {
    this.toggleDropdown();
  }


  render() {
    return (
      <div>
        <nav className="navbar bg-dark">
          <Link to="/" className="logo">The Herbalist</Link>
          <ul className="nav-links">
            <li><Link to="/how_to_use">How To Use</Link></li>
            <li><Link to="/herb_finder">Herb Finder</Link></li>
            <li><Link to="/materia_medica">Materia Medica</Link></li>
            <li><Link to="/dispensary">Dispensary</Link></li>
            {/* <li><Link to="/cabinet">Medicine Cabinet</Link></li> */}
            <li><Link to="/about">About Us</Link></li>
            {this.renderLogin()}
          </ul>
          <div id="open-slide">
            <i className="fa fa-bars fa-3x" onClick={this.toggleDropdown}></i>
          </div>
        </nav>

        <div id="dropdown-nav" className="dropdown-nav bg-dark">
          <li><Link to="/how_to_use" onClick={this.handleClick}>How To Use</Link></li>
          <li><Link to="/herb_finder" onClick={this.handleClick}>Herb Finder</Link></li>
          <li><Link to="/materia_medica" onClick={this.handleClick}>Materia Medica</Link></li>
          <li><Link to="/dispensary" onClick={this.handleClick}>Dispensary</Link></li>
          {/* <li><Link to="/cabinet" onClick={this.handleClick}>Medicine Cabinet</Link></li> */}
          <li><Link to="/about" onClick={this.handleClick}>About Us</Link></li>
          {this.renderLogin()}
        </div>

      </div>

    )
  }
}

const mapStateToProps = (state) => {
  return { auth: state.auth };
}

export default connect(mapStateToProps)(Navbar);