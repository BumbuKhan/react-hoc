import React, {Component} from 'react';
import {Link} from 'react-router';
import * as actions from '../actions';
import {connect} from 'react-redux';

class Header extends Component {
  authButton() {
    if (this.props.authenticated) {
      return (
        <button className="btn btn-primary" onClick={() => this.props.authenticate(false)}>Sign out</button>
      );
    }

    return (
      <button className="btn btn-primary" onClick={() => this.props.authenticate(true)}>Sign in</button>
    );
  }

  render() {
    return (
      <nav className="navbar navbar-light">
        <ul className="nav navbar-nav">
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/resources">Resources</Link>
          </li>
          <li className="nav-item">
            {this.authButton()}
          </li>
        </ul>
      </nav>
    );
  }
}

function mapStateToProps({authenticated}) {
  return {authenticated};
}

export default connect(mapStateToProps, actions)(Header);
