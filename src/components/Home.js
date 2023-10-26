import React from "react";
import "../styles/Home.css";
import imgb from "../assets/icc-flyer.png";
import { useAuth0 } from "@auth0/auth0-react";

function Home() {
  const { loginWithRedirect } = useAuth0();
  
  const handleLogin = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: "/home",
      },
    });
  };
  return (
    <div className="container">
      <div className="home">
        <h1>
          <center>
            <b>Vote Arena</b>
          </center>
        </h1>
        <div className="body-area">
          <div className="img-container">
            <img src={imgb} alt="okkk" height="100%" width="100%" />
          </div>
          <div className="sign-in-area">
            <h2>
              <strong> Why Vote Arena? </strong>
            </h2>
            <ul>
              <p>
                <li>
                  <strong>It's Fast: </strong>Voting takes just a few clicks.
                </li>
                <li>
                  <strong>It's Fun:</strong>Engage in friendly debates and
                  discussions.
                </li>
                <li>
                  <strong>It's Social:</strong> Connect with people worldwide
                  over shared interests.
                </li>
              </p>
            </ul>
            <h2>
              <strong>Get Started: </strong>
            </h2>
            <p>
              Join the fun and start voting today. Sign up now! Turn everyday
              decisions into exhilarating experiences with Vote Arena!
            </p>
            <button
              type="button"
              className="btn btn-dark"
              onClick={handleLogin}
            >
              Click here to begin your experience
            </button>
          </div>
        </div>
      </div>
      <footer style={{ marginTop: "15px" }}>
        <center> <strong>Made with ❤️ in INDIA by <a href="www.github.com/Aditya-sharma-dev/" target="_blank">Aditya</a></strong></center>
      </footer>
    </div>
  );
}

export default Home;
