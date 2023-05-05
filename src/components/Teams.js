import React, {useEffect, useState} from "react";
import Details from "./Details";

export default function Teams(){
    const [teams, setTeams] = useState([])

    useEffect(() => {
        fetch("https://www.balldontlie.io/api/v1/teams")
        .then(r => r.json())
        .then(resp => setTeams(resp.data))
    },[])

    const team = teams.map(t => {
        return <p key={t.id}>{t.full_name}</p>
    })

    return <div id="teams">
            {team}
            </div>
}