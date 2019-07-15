import React from "react";
import "./imagesContainer.css"


const ImagesContainer = props => (
  <div className="card" onClick={props.imageClick}>
    <div className="img-container">
      <img alt={props.image.replace(".jpg", "")} src={require("../images/" + props.image)} />
    </div>
  </div>
);

export default ImagesContainer;