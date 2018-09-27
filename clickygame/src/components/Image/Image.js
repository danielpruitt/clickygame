import React from "react";
import "./Image.css";
//brings in the images from the images folder
const Image = (props) => {
    var img = require(`../../images/${props.id}.png`);

    return (
        <div className={"col-3"}>
            <img key="" className={"img-thumbnail rounded img-fluid shadow-lg p3 mb5 sizing"} src={img} onClick={() => props.handleImageClick(props.id, props.selected)}></img>
        </div>
    );

};

export default Image;
