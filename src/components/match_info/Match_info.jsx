import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import {Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Paper} from '@mui/material';
import "./match_info.css";


function getTable(rows,team) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 400}} size="small" aria-label="a dense table" className="csgo__table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ borderBottom: "none",color:"#D4D4DC",fontSize:"1.25rem",fontFamily:"Russo One"}} width="350" align="center">{team}</TableCell>
            <TableCell sx={{ borderBottom: "none",color:"#D4D4DC",fontSize:"1.25rem",fontFamily:"Russo One"}} align="right">rating</TableCell>
            <TableCell sx={{ borderBottom: "none",color:"#D4D4DC",fontSize:"1.25rem",fontFamily:"Russo One"}} align="right">impact</TableCell>
            <TableCell sx={{ borderBottom: "none",color:"#D4D4DC",fontSize:"1.25rem",fontFamily:"Russo One"}} align="right">kdr</TableCell>
            <TableCell sx={{ borderBottom: "none",color:"#D4D4DC",fontSize:"1.25rem",fontFamily:"Russo One"}} align="right">dmr</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.number}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell sx={{ borderBottom: "none",color:"#D4D4DC",fontSize:"1.25rem",fontFamily:"Russo One"}} component="th" scope="row">
                {row.number}
              </TableCell>
              <TableCell sx={{ borderBottom: "none",color:"#D4D4DC",fontSize:"1.25rem",fontFamily:"Russo One"}} align="right">{row.rating}</TableCell>
              <TableCell sx={{ borderBottom: "none",color:"#D4D4DC",fontSize:"1.25rem",fontFamily:"Russo One"}} align="right">{row.impact}</TableCell>
              <TableCell sx={{ borderBottom: "none",color:"#D4D4DC",fontSize:"1.25rem",fontFamily:"Russo One"}} align="right">{row.kdr}</TableCell>
              <TableCell sx={{ borderBottom: "none",color:"#D4D4DC",fontSize:"1.25rem",fontFamily:"Russo One"}} align="right">{row.dmr}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

function getRow(number,rating,impact, kdr, dmr) {
  return {number,rating,impact, kdr, dmr };
}


const Match_info = () => {
  const {id} = useParams();
  const [match,setMatch] = useState(null);
  const [rows_1,setRows1] = useState([]);
  const [rows_2,setRows2] = useState([]);
  const [t1_class,setT1Class] = useState("csgo__match_winner");
  const [t2_class,setT2Class] = useState("csgo__match_loser");
  console.log(`http://127.0.0.1:8000/getMatch/${id}`);
  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      headers: { 
        'Content-Type': 'text/plain'}
    };
    fetch(`http://127.0.0.1:8000/getMatch/${id}`,requestOptions)
    .then(res => res.json())
    .then(data => {
      if(data['status'] === 'ok'){
        for(var k = 1;k<3;k++){
          var rows_t = [];
          for(var i = 1;i<6;i++){
            const m = data['match'];
            rows_t.push(getRow(`player_${i}`,m[`t${k}_player${i}_rating`].toFixed(2),m[`t${k}_player${i}_impact`].toFixed(2),m[`t${k}_player${i}_kdr`].toFixed(2),m[`t${k}_player${i}_dmr`].toFixed(2)));
          }
          if(k === 1){
            setRows1(rows_t);
          }
          if(k === 2){
            setRows2(rows_t);
          }
        }
        if(data['winner']==="t2"){
          setT1Class("csgo__match_loser");
          setT2Class("csgo__match_winner");
        }
        if(data['winner']==="draw"){
          setT1Class("csgo__match_draw");
          setT2Class("csgo__match_draw");
        }
        setMatch(data['match']);
      }else{
        console.error('Error:', data['description']);
      }
    })
  }, [id]);
  
  

  return (
    <div className="csgo__match_info_block">
      {match && (
        <>
          <h1 align="center">
            <span className="csgo__match_info_t1">
              <text>{match.team_1}</text>
            </span>
            <span className="line-align csgo__match_info_score">
              <text className={t1_class}>{match.t1_points}</text>
            </span>
            <span align="center" className="csgo__match_del">:</span>
            <span className="csgo__match_info_score">
              <text className={t2_class}>{match.t2_points}</text>
            </span>
            <span className="line-align csgo__match_info_t2">
              <text>{match.team_2}</text>
            </span>
          </h1>
          <div className="csgo__match_info_table">
            {getTable(rows_1,match.team_1)}
          </div>
          <div className="csgo__match_info_table">
            {getTable(rows_2,match.team_2)}
          </div>
        </>
      )}
    </div> 
  )
}


export default Match_info;
