import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import logo from "../assets/icc-logo.png";

function Navbar() {
  const { user, logout, isAuthenticated } = useAuth0();
  // const url= window.location.origin;
  const handleLogout = () => {
    logout({
      // logoutParams: {
      //   returnTo: window.location.origin,
      // },
      openUrl(url) {
        window.location.replace(url);
      },
    });
  };

  return (
    <nav
      className="navbar bg-dark navbar-expand-lg border-bottom border-body fixed-top"
      data-bs-theme="dark"
    >
      <div className="container-fluid" id="okok">
        <a className="navbar-brand" href="/">
          <img src={logo} alt="" height="40px" width="40px" />
          World Cup 2023
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse"
          id="navbarNavDropdown"
          style={{ justifyContent: "space-between" }}
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/leaderboard">
                Leaderboard
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/fixtures">
                Fixtures
              </Link>
            </li>
          </ul>
          <div className="right">
            <form
              className="d-flex"
              role="search"
              style={{ alignItems: "center" }}
            >
              {isAuthenticated && (
                <>
                  <p style={{ color: "white" }}>Welcome, {user.name}</p>
                  <button
                    className="btn btn-outline-danger"
                    type="submit"
                    onClick={handleLogout}
                  >
                    Log Out
                  </button>
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
