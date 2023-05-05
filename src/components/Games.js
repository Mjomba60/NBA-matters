import React, { useEffect, useState } from "react";

 export default function Games(){
    const [games, setGames] = useState([])
    

    useEffect(()=>{
        fetch("https://www.balldontlie.io/api/v1/games")
        .then(r => r.json())
        .then(resp => setGames(resp.data))
    }, [])

    const game = games.map(g => {
        return <dl key={g.id}>
        <dt>
            <label>home team score : visitor team score </label>
            {g.home_team_score} : {g.visitor_team_score}
        </dt>
        <dd>
            <label>Name : </label>
            {g.home_team.full_name}  vs  {g.visitor_team.full_name}
        </dd>
        <dd>
            <label>period : </label>
            {g.period}</dd>
        <dd>
            <label>status : </label>
            {g.status}
        </dd>
        <dd>
        <label>postSeason : </label>
            {g.postSeason}
        </dd>
    </dl>
    })

    return <div>
            {game}
            </div>
 } 