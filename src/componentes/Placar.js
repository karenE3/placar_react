import React, { useState } from "react";
import './Placar.scss' ;
import { tsConstructorType } from "@babel/types";

const Placar = ({time}) => { 
    const [votos, setVotos] = useState(0);
    return (
        <div className="Placar">
           <h1>{time}</h1> 
           <h3>{votos}</h3>
        </div>
    )
}

export default Placar;