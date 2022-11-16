import React from "react";
import Card from "./Card";
import "../styles/Section.css";
import { Data } from "../assets/DataCard";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";

function Section() {
  return (
    <div className="Container">
      <h2 className="Title">
        VIAJA CON NOSOTROS Y DISFRUTA DE LOS MEJORES PAISAJES <br /> ¡AL MEJOR
        PRECIO!
      </h2>
      <div className="Container-btn">
        <button className="Btn">
          <FaChevronCircleLeft />
        </button>
        <div className="Container-card">
          <Card
            className="Card"
            Img={Data[0].Img}
            Pais={Data[0].Pais}
            Description={Data[0].Description}
          />
          <Card
            className="Card"
            Img={Data[1].Img}
            Pais={Data[1].Pais}
            Description={Data[1].Description}
          />
          <Card
            className="Card"
            Img={Data[2].Img}
            Pais={Data[2].Pais}
            Description={Data[2].Description}
          />
          <Card
            className="Card"
            Img={Data[3].Img}
            Pais={Data[3].Pais}
            Description={Data[3].Description}
          />
        </div>
        <button className="Btn">
          <FaChevronCircleRight />
        </button>
      </div>
    </div>
  );
}

export default Section;
