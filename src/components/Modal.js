import { useAuth0 } from "@auth0/auth0-react";
import React, { useState } from "react";

function Modal(props) {
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

      fetch("https://vote-arena-backend.vercel.app/store-vote", {
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
  return (
    <div
      className="modal fade"
      id={props.details.teams[0]}
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
          <div className="modal-body d-flex flex-column align-items-center">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="exampleRadios"
                id={props.details.teams[0]}
                onChange={handleRadioChange}
                value={props.details.teams[0]}
              />
              <label
                className="form-check-label"
                htmlFor={props.details.teams[0]}
              >
                <p>{props.details.teams[0]}</p>
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="exampleRadios"
                id={props.details.teams[1]}
                onChange={handleRadioChange}
                value={props.details.teams[1]}
              />
              <label
                className="form-check-label"
                htmlFor={props.details.teams[1]}
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
  );
}

export default Modal;
