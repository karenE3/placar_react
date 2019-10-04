import React, { useState } from "react";
import './Placar.scss' ;
import { tsConstructorType } from "@babel/types";

const Placar = ({time}) => { 
    const [votos, setVotos] = useState(0);

    const incrementar = () => {
        setVotos(votos + 1);
    }

    const decrementar = () => {
        if(votos > 0){
            setVotos(votos - 1);
        }
    }

    return (
        <div className="Placar">
           <h1>{time}</h1> 
           <h3>{votos}</h3>
           <div>
               <button onClick={decrementar}>-</button>
               <button onClick={incrementar}>+</button>
           </div>
        </div>
    )
}

export default Placar;
