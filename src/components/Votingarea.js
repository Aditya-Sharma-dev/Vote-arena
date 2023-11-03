import React, { useEffect, useState } from "react";
import "../styles/Votingarea.css";
import Countdown from "react-countdown";

function Votingarea(props) {
  const targetDate = new Date(props.details.dateTimeGMT);
  const newDate = new Date(targetDate.getTime() + 5.5 * 60 * 60 * 1000);
  const [newClass, setNewClass] = useState("");

  var timerValid;

  const renderer = ({ hours, minutes, seconds, completed }) => {
    timerValid = completed;
    if (completed) {
      return (
        <span>
          <b>You are Late!!</b>
        </span>
      );
    } else {
      return (
        <div>
          <strong>
            <span>{hours} hours </span>
            <span>{minutes} minutes </span>
            <span>{seconds} seconds </span>
          </strong>
        </div>
      );
    }
  };
  useEffect(() => {
    setNewClass(`${"btn btn-dark"} ${timerValid ? "disabled" : ""}`);
  }, []);

  return (
    <>
      <div
        className="container text-center border border-dark border-5"
        id="oko"
      >
        <div className="row align-items-start">
          <div className="col border border-dark border-2">
            <h4>
              <strong>{props.details.teams[0]}</strong>
            </h4>
          </div>
          <div className="col border border-dark border-2">
            Timer ends in <br />
            <Countdown date={newDate} renderer={renderer} />
          </div>
          <div className="col border border-dark border-2">
            <h4>
              <strong>{props.details.teams[1]}</strong>
            </h4>
          </div>
          <div className="row align-items-center p-3">
            <center>
              <button
                type="button"
                className={newClass}
                data-bs-toggle="modal"
                data-bs-target={`#${props.details.teams[1]}`}
              >
                Click here to vote
              </button>
            </center>
          </div>
        </div>
      </div>
    </>
  );
}

export default Votingarea;
