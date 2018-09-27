//imports
import React from "react";
import "./Title.css";
import Instructions from "../Instructions";


const Title = () =>
    <div className = "pokeblue">
        <div class = "container">
            <h1 className="display-4 bungee text-monospaced"> Legendary Clicky Game</h1>
            <p className = "lead"><Instructions/></p>
        </div>
    </div>
export default Title;
