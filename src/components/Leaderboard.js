import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import "../styles/Leaderboard.css";
import FlipMove from "react-flip-move";

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
        data.sort((a, b) => {
          if (b.points - a.points !== 0) return b.points - a.points;
          return a.name.localeCompare(a.name, undefined, {
            numeric: true,
            sensitivity: "base",
          });
        });
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
      <div className="container2">
        <table className="table table-hover table-striped-columns">
          <thead className="border border-dark">
            <tr>
              <th>Name</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item._id}>
                <td>{item.name}</td>
                <td>{item.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Leaderboard;
