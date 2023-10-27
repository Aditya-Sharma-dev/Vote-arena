import React from "react";
import "../styles/SingleMatch.css";

function SingleMatch({ detail }) {
  function formatDate(inputDate) {
    const parts = inputDate.split("-");

    const formattedDate = `${parts[2]}-${parts[1]}-${parts[0]}`;

    return formattedDate;
  }
  return (
    <>
      {detail.status === "Match not started" ? (
        <>
          <div
            className="card mb-3"
            style={{
              width: "18rem",
              backgroundColor: "#e8d449",
              height: "10rem",
            }}
          >
            <div className="card-body">
              <img
                src={detail.teamInfo[0].img}
                alt=""
                style={{ borderRadius: "10px" }}
              />
              <h5 className="card-title mt-2">{detail.teamInfo[0].name}</h5>
              <p>
                <b>{detail.teamInfo[0].shortname}</b>
              </p>
            </div>
          </div>
          <div className="container">
            <center>
              <p>
                <b>{formatDate(detail.date)}</b>
              </p>
              <p style={{ fontSize: "40px", marginTop: "5%" }}>
                {" "}
                <strong>
                  {" "}
                  <i> VS </i>
                </strong>
              </p>
              {detail.matchEnded ? (
                <p>{detail.status}</p>
              ) : (
                <p>
                  <strong>{detail.venue}</strong>
                </p>
              )}
            </center>
          </div>

          <div
            className="card text-end mb-3"
            style={{
              width: "18rem",
              backgroundColor: "#c848fa",
              height: "10rem",
            }}
          >
            <div className="card-body">
              <img
                src={detail.teamInfo[1].img}
                alt=""
                style={{ borderRadius: "10px" }}
              />
              <h5 className="card-title mt-2">{detail.teamInfo[1].name}</h5>
              <p>
                <b>{detail.teamInfo[1].shortname}</b>
              </p>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}

export default SingleMatch;
