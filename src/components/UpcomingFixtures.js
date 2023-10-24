import React from "react";
import "../styles/UpcomingFixtures.css";
import SingleMatch from "./SingleMatch";
import FlipMove from "react-flip-move";

function UpcomingFixtures(props) {
  return (
    <div>
      <h3 className="text text-center">
        <u>Upcoming Matches</u>
      </h3>
      <FlipMove>
        {props.todayMatch.map((item) => (
          <div key={item.id} className="single">
            <SingleMatch detail={item} />
            {/* <span
              className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
              style={{ zIndex: "1", left: "22% !important" }}
            >
              99+
              <span className="visually-hidden">unread messages</span>
            </span> */}
          </div>
        ))}
      </FlipMove>
    </div>
  );
}

export default UpcomingFixtures;
