import React, { useEffect, useState } from "react";
import "../styles/Playground.css";
import Votingarea from "./Votingarea";
import UpcomingFixtures from "./UpcomingFixtures";
import result from "../sample.json";
import Navbar from "./Navbar";
import axios from "axios";
import Loading from "./Loading";
import Modal from "./Modal";

function Playground() {
  const [todayMatchDetails, setTodayMatchDetails] = useState([]);
  const [fixtures, setFixtures] = useState([]);
  // const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  var todayDate;

  // const apiURL =
  //   "https://api.cricapi.com/v1/series_info?apikey=92cf5746-3e34-4e72-ab3e-3809d971aa9d&offset=0&id=bd830e89-3420-4df5-854d-82cfab3e1e04";

  useEffect(() => { 
    setTimeout(() => {
      setFixtures(result.data.matchList.filter((match) => match.teamInfo));
    
    const today = new Date();

    const date = today.getDate();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();

    setFixtures(result.data.matchList.filter((match) => match.teamInfo));
    todayDate = `${year}-${month}-${date}`;

    setTodayMatchDetails(
      result.data.matchList.filter((ele) => ele.date === todayDate)
    );
    setLoading(false);
    }, 1500);
    // eslint-disable-next-line
  }, []);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="wrapper">
          <Navbar />
          <center>
            <h2>
              <strong>Today's Matches</strong>
            </h2>
          </center>
          { 
          todayMatchDetails.map((item) => (
            <div key={item.id} className="container">
              <Votingarea details={item} />
              <Modal key = {item.id} details={item} />
            </div>
          ))}
          <UpcomingFixtures todayMatch={fixtures} presentDay={todayDate} />
        </div>
      )}
    </>
  );
}

export default Playground;
