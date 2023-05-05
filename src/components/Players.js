import React, {useState, useEffect} from "react";


export default function Players(){

    const [players, setPlayers] = useState([])
    useEffect(() => {
    fetch("https://www.balldontlie.io/api/v1/players")
    .then(r => r.json())
    .then(resp => setPlayers(resp.data))
},[])

    const player = players.map(player => {
        return <p key = {player.id}>{player.first_name} {player.last_name}</p>
    })
    return <div id="players">
            {player}
            </div>
}