import React from "react";
import {NavLink} from "react-router-dom";

export default function NavBar(){

    return <nav>
            <NavLink to = "/">Players</NavLink>
            <NavLink to = "/teams">Teams</NavLink>
            <NavLink to = "/games">Games</NavLink>
           </nav>
        
}