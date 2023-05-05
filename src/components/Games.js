import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import Details from "./Details";

 export default function Games(){
    const [games, setGames] = useState([])
    

    useEffect(()=>{
        fetch("https://www.balldontlie.io/api/v1/games")
        .then(r => r.json())
        .then(resp => setGames(resp.data))
    }, [])

    const game = games.map(g => {
        return <p key={g.id}> {g.home_team.full_name} vs {g.visitor_team.full_name}</p>
    })

    return <div>
            {game}
            </div>
 } 