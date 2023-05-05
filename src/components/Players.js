import React, {useState, useEffect} from "react";


export default function Players(){

    const [players, setPlayers] = useState([])
    useEffect(() => {
    fetch("https://www.balldontlie.io/api/v1/players")
    .then(r => r.json())
    .then(resp => setPlayers(resp.data))
},[])
    const player = players.map(player => {
        return <dl key={player.id}>
        <dt>
            <label>Full Name : </label>
            {player.first_name} {player.last_name}
        </dt>
        <dd>
            <label>First Name : </label>
            {player.first_name}
        </dd>
        <dd>
            <label>Last Name : </label>
            {player.last_name}</dd>
        <dd>
            <label>position : </label>
            {player.position}
        </dd>
        <dd>
        <label>name : </label>
            {player.team.full_name}
        </dd>
    </dl>
    })
    return <div id="players">
            {player}
            </div>
}