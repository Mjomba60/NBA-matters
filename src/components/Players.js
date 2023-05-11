import React, {useState, useEffect} from "react";


export default function Players({selectObj, selectOrigin}){

    const [players, setPlayers] = useState([])

    //fetch data from server to display
    useEffect(() => {
    fetch("https://www.balldontlie.io/api/v1/players")
    .then(r => r.json())
    .then(resp => setPlayers(resp.data))
},[])

    // iterate through received array and display data
    const player = players.map(player => {
        return <div className="mplayers" key={player.id} onClick = {() => {selectObj(player)
            selectOrigin("players")}}>
            <p>{player.first_name} {player.last_name}</p>
            <p className="time"><strong>team :</strong>{player.team.name}</p>
            </div>
    })
    return <div id="players">
        <h3>Players</h3>
            {player}
            </div>
}