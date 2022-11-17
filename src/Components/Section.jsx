import React, { useState } from "react";
import Card from "./Card";
import "../styles/Section.css";
import { Data } from "../assets/DataCard";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";

function Section() {
  const cantidad = Data.length;

  const [card, setCard] = useState(0);

  const nextCard = () => {
    setCard(card === cantidad - 1 ? 0 : card + 1);
  };
  const previusCard = () => {
    setCard(card === 0 ? cantidad - 1 : card - 1);
  };

  return (
    <div className="Container">
      <h2 className="Title">
        VIAJA CON NOSOTROS Y DISFRUTA DE LOS MEJORES PAISAJES <br /> ¡AL MEJOR
        PRECIO!
      </h2>

      <div className="Container-card ">
        <button onClick={previusCard} className="Btn">
          <FaChevronCircleLeft />
        </button>
        {screen.width <= 750 ? (
          <div className="Container-card">
            {Data.map((Data, index) => {
              return (
                <div
                  key={index}
                  className={card === index ? "slider active" : "slider"}
                >
                  {card === index && (
                    <Card
                      className="Card"
                      key={index}
                      Img={Data.Img}
                      Pais={Data.Pais}
                      Description={Data.Description}
                    />
                  )}
                </div>
              );
            })}
          </div>
        ) : (
          <div className="Container-card">
            {Data.map((Data) => {
              return (
                <div>
                  <Card
                    className="Card"
                    Img={Data.Img}
                    Pais={Data.Pais}
                    Description={Data.Description}
                  />
                </div>
              );
            })}
          </div>
        )}

        <button onClick={nextCard} className="Btn">
          <FaChevronCircleRight />
        </button>
      </div>
    </div>
  );
}

export default Section;
