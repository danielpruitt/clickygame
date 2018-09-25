//imports
import React from "react";
import "./Title.css";
import Instructions from "../Instructions";
import Scoreboard from "../Scoreboard";


const Title = () =>
    <div className = "pokeblue">
        <div class = "container">
            <h1 className="display-4 pokeyellow text-monospaced"> Legendary Clicky Game</h1>
            <p className = "lead"><Instructions/></p>
            
        </div>
    </div>
export default Title;
