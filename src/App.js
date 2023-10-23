import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import UpcomingFixtures from "./components/UpcomingFixtures";
import Votingarea from "./components/Votingarea";
import data from "../src/sample.json";

function App() {
  const [todayMatchDetails, setTodayMatchDetails] = useState([]);
  const [fixtures, setFixtures] = useState([]);
  const recieveToday = (data) => {
    setTodayMatchDetails(data);
    console.log(todayMatchDetails);
  };

  // var filterData;

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
  }, []);

  return (
    <div className="app">
      <Navbar />
      {todayMatchDetails.map((item) => (
        <div key={item.id} className="container">
          <Votingarea details={item} />
        </div>
      ))}
      <UpcomingFixtures todayMatch={fixtures} />
    </div>
  );
}

export default App;
