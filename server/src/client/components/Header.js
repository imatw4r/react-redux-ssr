import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Header = state => {
  const isAuthenticated = state.auth;
  const loginStatus = isAuthenticated ? "Logout" : "Login";
  const authButton = isAuthenticated ? (
    <a href="/api/logout">Logout</a>
  ) : (
    <a href="/api/auth/google">Login</a>
  );
  return (
    <div>
      <Link to="/">React SSR</Link>
      <div>
        <Link to="/users">Users</Link>
        <Link to="/admins">Admins</Link>
        {authButton}
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return { auth: state.auth };
}

export default connect(mapStateToProps)(Header);
