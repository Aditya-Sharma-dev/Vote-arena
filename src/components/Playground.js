import React, { useEffect, useState } from "react";
import "../styles/Playground.css";
import Votingarea from "./Votingarea";
import UpcomingFixtures from "./UpcomingFixtures";
import data from "../sample.json";
import { useAuth0 } from "@auth0/auth0-react";
import Leaderboard from "./Leaderboard";
import Navbar from "./Navbar";

function Playground() {
  const [todayMatchDetails, setTodayMatchDetails] = useState([]);
  const [fixtures, setFixtures] = useState([]);
  const { isAuthenticated } = useAuth0();

  useEffect(() => {
    function updateData() {
      setFixtures(data.data.matchList.filter((match) => match.teamInfo));
      console.log(fixtures);
    }
    updateData();

    function matchDate() {
      const today = new Date();

      const date = today.getDate();
      const month = today.getMonth() + 1;
      const year = today.getFullYear();

      var todayDate = `${year}-${month}-${date}`;

      setTodayMatchDetails(
        data.data.matchList.filter((ele) => ele.date === todayDate)
      );
      console.log(todayMatchDetails);
    }
    matchDate();
    // eslint-disable-next-line
  }, []);
  console.log("huehue");
  return (
    <>
      <div className="navbar">
        <Navbar />
      </div>
      <div className="wrapper">
        <center>
          <h2>
            <strong>Today's Matches</strong>
          </h2>
        </center>
      </div>
      {todayMatchDetails.map((item) => (
        <div key={item.id} className="container">
          <Votingarea details={item} />
        </div>
      ))}
      <UpcomingFixtures todayMatch={fixtures} />
      <Leaderboard />
    </>
  );
}

export default Playground;
