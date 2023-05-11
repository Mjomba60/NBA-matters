import React from "react";

export default function Details({obj, origin}){
    let keys;

    //select array of keys depending on the origin of the request
    function selectKey(orgin){
        switch (orgin) {
            case "players":
                keys = [ "first_name", "last_name", "position", "team"]
                break;
            case "teams":
                keys = [ "abbreviation", "city", "conference", "division", "full_name", "name"]
                break;
            case "games":
                keys = ["date", "home_team", "home_team_score", "period", "season", "status", "time", "visitor_team", "visitor_team_score"]
                break;
                default :
                keys = []
                break;
        }
        return keys
    }
    //iterate through every element of the array displaying the data
    const displayInfo = selectKey(origin).map(key => {
        let value;
            if(key === "team"){
                value = obj.team.full_name
            } else if (key === "home_team"){
                value = obj.home_team.full_name === undefined ? "" : obj.home_team.full_name
            } else if (key ===  "visitor_team"){
                value = obj.visitor_team.full_name
            } else {
                value = obj[key]
            }
        return <div key={key} className ="detailed">
            <label>{key}</label>
            <p>{value}</p>
        </div>
    })

    return <div className="details">
        <h4>Details</h4>
        {displayInfo}
    </div>
}