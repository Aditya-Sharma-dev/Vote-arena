import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";

function Leaderboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from the backend API route
    fetch("/api/fetch-data")
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
    <div className="container">
       <div className="navbar">
        <Navbar />
      </div>
      <h2>
        <center>leaderboard</center>
      </h2>
      <div>
        {/* <h2>Data from MongoDB Collection</h2> */}
        <ul>
          {data.map((item) => (
            <li key={item._id}>
              Field 1: {item.name}, Field 2: {item.points}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Leaderboard;
