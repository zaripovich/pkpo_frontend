import React from "react";
import { Link } from "react-router-dom";
import './match_block.css';

const Match_block = (data) => {
  console.info(`data = ${data}`);
  let t1_class = "csgo__match_winner";
  let t2_class = "csgo__match_loser";
  if(data.winner==="t2"){
    t1_class = "csgo__match_loser";
    t2_class = "csgo__match_winner";
  }
  if(data.winner==="draw"){
    t1_class = "csgo__match_draw";
    t2_class = "csgo__match_draw";
  }

  let date = new Date(data.match_date);
  let day = date.getDate().toString();
  if(date.getDate()<10){
    day="0"+day;
  }
  let month = (date.getMonth()+1).toString();
  if(date.getMonth()+1<10){
    month="0"+month;
  }
  return(
    <Link to={`/match/${data.id}`}>
      <div className="csgo__match_block">
        <text className="csgo__match_date">{day}.{month}.{date.getFullYear()}</text>
        <span className="csgo__match_result">
          <span className="csgo__match_teams_name">
            <text>{data.team_1}</text>
          </span>
          <span className="csgo__match_score">
            <b className={t1_class}>{data.t1_points}</b>
          </span>
          <text>:</text>
          <span className="csgo__match_score">
            <b className={t2_class}>{data.t2_points}</b>
          </span>
          <span className="csgo__match_teams_name">
            <text>{data.team_2}</text>
          </span>
        </span>
      </div>
    </Link>
  )
}





export default Match_block;