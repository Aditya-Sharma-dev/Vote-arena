import React from "react";
import "../styles/UpcomingFixtures.css";
import SingleMatch from "./SingleMatch";
import FlipMove from "react-flip-move";

function UpcomingFixtures(props) {
  const today = new Date();

  const date = today.getDate();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();

  var todayDate = `${year}-${month}-${date}`;

  const futureFixtures = props.todayMatch.filter((item) => {
    return !item.matchEnded && item.date !== todayDate;
  });
  return (
    <div>
      <h3 className="text text-center">
        <u>
          <strong>Upcoming Matches</strong>
        </u>
      </h3>
      <FlipMove>
        {futureFixtures.map((item) => (
          <div key={item.id} className="single">
            <SingleMatch detail={item} />
          </div>
        ))}
      </FlipMove>
    </div>
  );
}

export default UpcomingFixtures;
