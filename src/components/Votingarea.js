import React, { useState } from "react";
import "../styles/Votingarea.css";
import { useAuth0 } from "@auth0/auth0-react";
import Countdown from "react-countdown";

function Votingarea(props) {
  const { user } = useAuth0();
  const [selectedOption, setSelectedOption] = useState(null);

  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleVote = () => {
    if (selectedOption !== null) {
      const voteData = {
        user: user.name,
        option: selectedOption,
        timestamp: new Date().toISOString(),
      };

      fetch("http://localhost:3001/store-vote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(voteData),
      })
        .then((response) => {
          if (response.ok) {
            alert("Vote submitted successfully!");
          } else {
            alert("Failed to submit vote.");
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    } else {
      alert("Please select an option before voting.");
    }
  };

  const targetDate = new Date(props.details.dateTimeGMT);
  const newDate = new Date(targetDate.getTime() + (5.5*60*60*1000));

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

  const updateClass = () => {
    return `${"btn btn-dark"} ${timerValid ? "disabled" : ""}`;
  };

  return (
    <>
      <div
        className="container text-center border border-dark border-5"
        id="oko"
      >
        <div className="row align-items-start">
          <div className="col border border-dark border-2">
            <h4><strong>{props.details.teams[0]}</strong></h4>
          </div>
          <div className="col border border-dark border-2">
            Timer ends in <br />
            <Countdown date={newDate} renderer={renderer} />
          </div>
          <div className="col border border-dark border-2">
          <h4><strong>{props.details.teams[1]}</strong></h4>
          </div>
          <div className="row align-items-center p-3">
            <center>
              <button
                type="button"
                className={updateClass()}
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Click here to vote
              </button>
            </center>
          </div>
          <div
            className="modal fade"
            id="exampleModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">
                    Please Vote your team!
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="exampleRadios"
                      id="exampleRadios1"
                      value={props.details.teams[0]}
                      onChange={handleRadioChange}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="exampleRadios1"
                    >
                      <p>{props.details.teams[0]}</p>
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="exampleRadios"
                      id="exampleRadios2"
                      onChange={handleRadioChange}
                      value={props.details.teams[1]}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="exampleRadios2"
                    >
                      <p>{props.details.teams[1]}</p>
                    </label>
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    className="btn btn-success"
                    onClick={handleVote}
                  >
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Votingarea;
