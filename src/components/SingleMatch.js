import React from "react";
import "../styles/SingleMatch.css";

function SingleMatch({ detail }) {
  return (
    <>
      {detail.status == "Match not started" ? (
        <>
          <div class="card mb-3" style={{ width: "18rem" }}>
            <div class="card-body">
              <img src={detail.teamInfo[0].img} alt="" />
              <h5 class="card-title">{detail.teamInfo[0].name}</h5>
              <p>{detail.teamInfo[0].shortname}</p>
            </div>
          </div>
          <div className="container">VS</div>

          <div class="card text-end mb-3" style={{ width: "18rem" }}>
            <div class="card-body">
              <img src={detail.teamInfo[1].img} alt="" />
              <h5 class="card-title">{detail.teamInfo[1].name}</h5>
              <p>{detail.teamInfo[1].shortname}</p>
            </div>
          </div>
        </>
      ) : (
        <p>{detail.name}</p>
      )}
    </>
  );
}

export default SingleMatch;
