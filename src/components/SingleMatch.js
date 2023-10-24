import React from "react";
import "../styles/SingleMatch.css";

function SingleMatch({ detail }) {
  return (
    <>
      {detail.status === "Match not started" ? (
        <>
          <div
            className="card mb-3"
            style={{ width: "18rem", backgroundColor: "#e8d449" }}
          >
            <div className="card-body">
              <img
                src={detail.teamInfo[0].img}
                alt=""
                style={{ borderRadius: "10px" }}
              />
              <h5 className="card-title">{detail.teamInfo[0].name}</h5>
              <p>
                <b>{detail.teamInfo[0].shortname}</b>
              </p>
            </div>
          </div>
          <div className="container">
            <center>
              <p style={{ fontSize: "40px", marginTop: "10%" }}>
                {" "}
                <strong>
                  {" "}
                  <i> VS </i>
                </strong>
              </p>
              <p>
                <strong>{detail.venue}</strong>
              </p>
            </center>
          </div>

          <div
            className="card text-end mb-3"
            style={{ width: "18rem", backgroundColor: "#c848fa" }}
          >
            <div className="card-body">
              <img
                src={detail.teamInfo[1].img}
                alt=""
                style={{ borderRadius: "10px" }}
              />
              <h5 className="card-title">{detail.teamInfo[1].name}</h5>
              <p>
                <b>{detail.teamInfo[1].shortname}</b>
              </p>
          
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
