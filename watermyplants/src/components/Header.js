import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

function Header(props) {
  return (
    <header>
      <h1>
        Wet My Plants{" "}
        <span role="img" aria-label="emoji">
          🌱
        </span>
      </h1>
      <nav>
        {!props.loggedIn && (
          <>
            <Link to="/signup" className="link">
              Sign Up
            </Link>
            <Link to="/login" className="link">
              Login
            </Link>
          </>
        )}
        {props.loggedIn && (
          <>
            <Link to="/plants" className="link">
              Plants
            </Link>
            <Link to="/account" className="link">
              Account
            </Link>
            <Link to="/logout" className="link">
              Log Out
            </Link>
          </>
        )}
      </nav>
    </header>
  );
}

const mapStateToProps = (state) => {
  return {
    loggedIn: state.accountReducer.loggedIn,
  };
};

export default connect(mapStateToProps, {})(Header);
