import React, {useEffect, useState} from "react";

export default function Teams(){
    const [teams, setTeams] = useState([])

    useEffect(() => {
        fetch("https://www.balldontlie.io/api/v1/teams")
        .then(r => r.json())
        .then(resp => setTeams(resp.data))
    },[])

    const team = teams.map(t => {
        return <dl>
                <dt>
                    <label>Team Name : </label>
                    {t.full_name}
                </dt>
                <dd>
                    <label>City : </label>
                    {t.city}
                </dd>
                <dd>
                    <label>confrence : </label>
                    {t.conference}</dd>
                <dd>
                    <label>division : </label>
                    {t.division}
                </dd>
                <dd>
                <label>name : </label>
                    {t.name}
                </dd>
            </dl>
        
    })

    return <div id="teams">
            {team}
            </div>
}