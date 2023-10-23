import React from "react";
import "../styles/UpcomingFixtures.css";
import SingleMatch from "./SingleMatch";
import FlipMove from "react-flip-move";

function UpcomingFixtures(props) {
  return (
    <div>
      <h1 className="text text-center">
        <u>Upcoming Matches</u>
      </h1>
      <FlipMove>
        {props.todayMatch.map((item) => (
          <div key={item.id} className="single">
            <SingleMatch detail={item} />
          </div>
        ))}
      </FlipMove>
    </div>
  );
}

export default UpcomingFixtures;
