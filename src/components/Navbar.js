import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

function Navbar() {
  const { loginWithRedirect } = useAuth0();
  return (
    <nav
      className="navbar bg-primary navbar-expand-lg border-bottom border-body fixed-top"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
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
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
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
            <li>
              <button onClick={() => loginWithRedirect()}>Login</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
