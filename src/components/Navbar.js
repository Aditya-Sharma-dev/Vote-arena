import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "../styles/Navbar.css";

function Navbar() {
  const { user, logout } = useAuth0();
  return (
    <nav
      className="navbar bg-dark navbar-expand-lg border-bottom border-body fixed-top"
      data-bs-theme="dark"
    >
      <div className="container-fluid" id="okok">
        <a className="navbar-brand" href="/">
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
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Leaderboard
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Fixtures
              </a>
            </li>
          </ul>
          <div className="right">
            <form className="d-flex" role="search">
              <p style={{ color: "white" }}>Welcome, {user.name}</p>
              <button
                className="btn btn-outline-danger"
                type="submit"
                onClick={() =>
                  logout({ logoutParams: { returnTo: window.location.origin } })
                }
              >
                Log Out
              </button>
            </form>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
