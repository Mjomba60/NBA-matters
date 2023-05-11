import React, { useEffect, useState } from "react";

 export default function Games({selectObj, selectOrigin}){
    const [games, setGames] = useState([])
    
    //fetch data from server and store for later use
    useEffect(()=>{
        fetch("https://www.balldontlie.io/api/v1/games")
        .then(r => r.json())
        .then(resp => setGames(resp.data))
    }, [])


    //iterate through data from server displaying item from the data
    const game = games.map(snGame => {
        return <div className="matches" key={snGame.id} onClick = {() => {selectObj(snGame)
                selectOrigin("games")}}>
                <p>{snGame.home_team.name} vs {snGame.visitor_team.name}</p>
                <p className="time"><strong>date : </strong>{snGame.date}</p>
                </div>
    })

    return <div id="games">
            <h3>Matches</h3>
            {game}
            </div>
 } 