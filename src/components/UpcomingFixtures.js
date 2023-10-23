import React, { useEffect, useState } from "react";
import "../styles/UpcomingFixtures.css";
import axios from "axios";
import SingleMatch from "./SingleMatch";
import data from "../sample.json";
import FlipMove from "react-flip-move";

var response;
function UpcomingFixtures(props) {
  //   // useEffect(() => {
  //   const options = {
  //     method: "GET",
  //     url: "https://cricbuzz-cricket.p.rapidapi.com/schedule/v1/international",
  //     headers: {
  //       "X-RapidAPI-Key": "9d6fe76b3fmshaca263dc44257d0p1eddf6jsne798e5ce0f84",
  //       "X-RapidAPI-Host": "cricbuzz-cricket.p.rapidapi.com",
  //     },
  //   };

  //   try {
  //     response = axios.request(options);
  //     console.log(response.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }, []);

  const [schedule, setSchedule] = useState([]);
  const [loading, setLoading] = useState(false);
  const config = {
    headers: {
      "X-RapidAPI-Key": "2794da4de9msh8fb37f6bc082d2ep1c9f34jsn0ca1861b18a5",
      "X-RapidAPI-Host": "cricbuzz-cricket.p.rapidapi.com",
    },
  };
  const headers = new Headers();
  headers.append(
    "X-RapidAPI-Key",
    "9d6fe76b3fmshaca263dc44257d0p1eddf6jsne798e5ce0f84"
  );
  headers.append("X-RapidAPI-Host", "cricket-live-data.p.rapidapi.com");
  // async function ok(){
  //   let data = await fetch("https://cricbuzz-cricket.p.radpidapi.com/schedule/v1/international", {
  //     method: "GET",
  //     headers: config.headers,
  // });
  //}
  // let obj={};
  // useEffect(() => {
  //   axios
  //     .get(
  //       "https://cricbuzz-cricket.p.radpidapi.com/schedule/v1/international",
  //       config
  //     )
  //     .then((res) => {
  //       // console.log(res)
  //       // console.log(res.data)
  //       obj=res.json();
  //       console.log(obj.data.matchScheduleMap);
  //       // setSchedule({
  //       //   date: res.data.matchScheduleMap.date
  //       // })
  //       setSchedule(obj.data.matchScheduleMap);
  //       setLoading(false);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);
  const url =
    "https://cricket-liiive-data.p.radpidapi.com/fixtures-by-sersies/1841";
  var result;
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(url, {
          method: "GET",
          headers: headers,
        });
        result = await response.json();
        console.log(result);
        setSchedule(result.results);
        setLoading(false);
      } catch (error) {
        console.error("Error:", error);
      }
    }
    fetchData();
    // checkResult();
  }, []);

  var updatedResult = [];
  function checkResult() {
    for (var i = 0; i < result.matchScheduleMap.length; i++) {
      if (result[i].scheduleAdWrapper) updatedResult.push(result[i]);
    }
    console.log(updatedResult);
  }

  // var data2;
  // function updateData(){
  //   data2 = data.data.matchList.filter((match)=> match.teamInfo);
  //   console.log(data2);
  // }
  // updateData();

  // matchDate();
  // useEffect(()=>{
  //   var res;
  //   function matchDate(){
  //     const today= new Date();

  //     const date=today.getDate();
  //     const month = today.getMonth()+1;
  //     const year = today.getFullYear();

  //     var todayDate = `${year}-${month}-${date}`;

  //     data2.map((ele)=>{
  //       if(ele.date==todayDate)
  //         res.push(ele)
  //     })
  //     console.log(res)
  //     // props.todayMatch(res);
  //     props.todayMatch(res);
  //   }
  //   matchDate();
  // },[props])

  // function filterJsonArray(jsonArray, keyword) {
  //   if (!Array.isArray(jsonArray)) {
  //     // Ensure the input is an array
  //     throw new Error("Input is not an array.");
  //   }

  //   if (jsonArray.length === 0) {
  //     // Return an empty array if the input array is empty
  //     return [];
  //   }

  return (
    <div>
      <h1 className="text text-center"><u>Upcoming Matches</u></h1>
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
