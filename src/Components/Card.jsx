import React from "react";
import "../styles/Card.css";
function Card({ Pais, Description, Img }) {
  return (
    <div className="Card-container">
      <a className="Card-link" href="#">
        <img className="Card-img" src={Img}></img>
        <h3 className="Pais">{Pais}</h3>
      </a>
      <p className="Description">{Description}</p>
    </div>
  );
}

export default Card;
