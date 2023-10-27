import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import "../styles/Leaderboard.css";

function Leaderboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from the backend API route
    fetch("https://vote-arena-backend.vercel.app/api/fetch-data")
      .then((response) => {
        console.log(response.status);
        return response.json();
      })
      .then((data) => {
        setData(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <div className="container" style={{ height: "100vh" }}>
      <div className="navbar">
        <Navbar />
      </div>
      <h2 className="mt-5">
        <strong>
          <center>Leaderboard</center>
        </strong>
      </h2>
      <div>
        <table className="table table-striped">
          <tr>
            <th>UserName</th>
            <th>Points</th>
          </tr>
          {data.map((item) => (
            <tr>
              <td>{item.name}</td>
              <td>{item.points}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}

export default Leaderboard;
