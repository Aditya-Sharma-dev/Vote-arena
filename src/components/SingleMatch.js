import React, { useEffect, useState } from "react";
// import apecricket from require("ape-cricket");
import Detail from "./Detail";
import '../styles/SingleMatch.css'

function SingleMatch({ detail }) {
  const [first, setFirst] = useState({});
  const [teamdetail, setTeamdetail] = useState({});
  //   var api_key = "TESTKEY0273"
  // // calling a endpoint to get response.
  // apecricket.schedule( api_key, function(response){
  //     // response will be json data of upcoming cricket matches
  //     console.log(response);
  // });

  // var items = {};
  // console.log(detail);
  // items=detail.json();
  // async function jsondetail(){
  //   await items=detail;
  //   console.log(items);

  // }

  // useEffect(()=>{
  //     // setFirst(detail);
  //     items=detail;
  //     console.log(items)
  //     // setTeamdetail({
  //     //     date: items.scheduleAdWrapper.date,
  //     //     teams: items.scheduleAdWrapper.matchScheduleList,
  //     //     longDate: items.scheduleAdWrapper.longDate,
  //     // })
  //     // if(items.scheduleAdWrapper)
  //       setTeamdetail(items)
  //     // else
  //     //   return
  //     // console.log(first)
  //     console.log(teamdetail)
  // },[])
  // console.log(detail)
  
  function flag(){
    

  }
  // flag();
  return (
    // <Detail date={detail.date}/>
    // <li className="container">
    /* {detail.map((item)=>{
      <li>{item.date}</li>  
    })} */
    <>
      {detail.status == "Match not started" ? (
        <>
        <div class="card mb-3" style={{width: "18rem"}}>
        <div class="card-body">
          <img src={detail.teamInfo[0].img} alt="" />
          <h5 class="card-title">{detail.teamInfo[0].name}</h5>
          <p>{detail.teamInfo[0].shortname}</p>
        </div>
      </div>
      <div className="container">
        VS
      </div>
      
      <div class="card text-end mb-3" style={{width: "18rem"}}>
        <div class="card-body">
        <img src={detail.teamInfo[1].img} alt="" />
          <h5 class="card-title">{detail.teamInfo[1].name}</h5>
          <p>{detail.teamInfo[1].shortname}</p>
        </div>
      </div>
      </>
      ) : (
        <p>{detail.name}</p>
      )}
    </>
  );
}

export default SingleMatch;
