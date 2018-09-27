import React from "react";
import ReactiveText from "../ReactiveText";

const Scoreboard = (props) =>

    <div>

        <div className="row" handleImageClick={props.handleImageClick}>
    
            <div className="col-4 pokeyellow text-center">
                <h4>Score: {props.score}</h4>
            </div>
            <div className="col-4 pokeyellow text-center">
                <h4>Top Score: {props.topScore}</h4>
            </div>
            <div className="col-4 text-center">
                <ReactiveText />
            </div>

        </div>
        
    </div>
        
    



export default Scoreboard;