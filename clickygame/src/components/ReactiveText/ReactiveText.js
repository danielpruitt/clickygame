import React from "react";

const ReactiveText = (props) => (
    <div className="pokeyellow text-center"> 
        <h4 handleImageClick={props.handleImageClick}>{props.message}</h4>
    </div>
);

export default ReactiveText;