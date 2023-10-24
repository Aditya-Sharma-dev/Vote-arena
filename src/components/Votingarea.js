import React from "react";
import "../styles/Votingarea.css";

function Votingarea(props) {
  return (
    <>
      <div
        className="container text-center border border-dark border-5"
        id="oko"
      >
        <div class="row align-items-start">
          <div class="col border border-dark border-2">
            <strong>{props.details.teams[0]}</strong>
          </div>
          <div class="col border border-dark border-2">Timer ends in</div>
          <div class="col border border-dark border-2">
            <strong>{props.details.teams[1]}</strong>
          </div>
          <div class="row align-items-center p-3">
            <center>
              <button
                type="button"
                className="btn btn-dark"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Click here to vote
              </button>
            </center>
          </div>
          <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="exampleModalLabel">
                    Please Vote your team!
                  </h1>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="exampleRadios"
                      id="exampleRadios1"
                      value={props.details.teams[0]}
                      checked
                    />
                    <label class="form-check-label" for="exampleRadios1">
                      <p>
                      {props.details.teams[0]}
                      </p>
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="exampleRadios"
                      id="exampleRadios2"
                      value={props.details.teams[0]}
                    />
                    <label class="form-check-label" for="exampleRadios2">
                      <p>
                      {props.details.teams[1]}
                      </p>
                    </label>
                  </div>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" class="btn btn-success">
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container text-center text-bg-warning border border-dark"
        id="voting-top"
      >
        <div className="row border border-dark">
          <div className="col border border-dark">
            <button type="button" className="btn btn-dark">
              {props.details.teams[0]}
            </button>
          </div>
          <div className="col-6 border border-dark">Timer ends in</div>
          <div className="col border border-dark">
            <button type="button" className="btn btn-dark">
              {props.details.teams[1]}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Votingarea;
