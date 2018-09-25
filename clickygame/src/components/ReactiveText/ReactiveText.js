import React from "react";

const ReactiveText = (props) => (
    <div> 
        <h4 handleImageClick={props.handleImageClick}>{props.message}</h4>

    </div>
);

export default ReactiveText;