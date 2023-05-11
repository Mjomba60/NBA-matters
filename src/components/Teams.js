import React, {useEffect, useState} from "react";

export default function Teams({selectObj, selectOrigin}){
    const [teams, setTeams] = useState([])

    useEffect(() => {
        fetch("https://www.balldontlie.io/api/v1/teams")
        .then(r => r.json())
        .then(resp => setTeams(resp.data))
    },[])

    const team = teams.map(t => {
        return <div className="mteams" key={t.id} onClick = {() => {selectObj(t)
            selectOrigin("teams")}}>
            <p>{t.full_name}</p>
            <p className="time"><strong>city : </strong>{t.city}</p>
            </div>
        
    })

    return <div id="teams">
        <h3>Teams</h3>
            {team}
            </div>
}