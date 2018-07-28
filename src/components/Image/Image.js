import React from "react";
import "./Image.css";

const Image = props => (

  <div className="card" onClick={() => props.checkMemory(props.id)}>
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
  </div>
);

export default Image;
