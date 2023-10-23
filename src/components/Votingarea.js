import React from "react";
import "../styles/Votingarea.css";

function Votingarea(props) {
  return (
    <div className="container text-center text-bg-warning border border-dark">
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
  );
}

export default Votingarea;
