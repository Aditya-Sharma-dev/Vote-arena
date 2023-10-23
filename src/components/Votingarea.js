import React from "react";
import "../styles/Votingarea.css";
import data2 from '../sample.json'

function Votingarea(props) {
    var filterData;
    var newData={}
    function matchDate(){
      const today= new Date();
  
      const date=today.getDate();
      const month = today.getMonth()+1;
      const year = today.getFullYear();
  
      var todayDate = `${year}-${month}-${date}`;
  
      filterData = data2.data.matchList.filter((ele)=>ele.date === todayDate);
      newData = filterData[0].json()

      console.log(newData)    
    }
  return (
    <div className="container text-center text-bg-warning border border-dark">
      <div className="row border border-dark">
        <div className="col border border-dark">
          <button type="button" className="btn btn-dark">
             {props.details.teams[0]}
          </button>
        </div>
        <div className="col-6 border border-dark">
          Timer ends in 
        </div>
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
