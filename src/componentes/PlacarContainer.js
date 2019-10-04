import React from "react";
import Placar from "./Placar";
import './PlacarContainer.scss' ;

const PlacarContainer = () => {
    return (
        <div className = "PlacarContainer">
           <Placar time="Front"/>
           <Placar time="Back"/>
           <Placar time ="Booststrap"/>
         </div>
    )
}

export default PlacarContainer;
