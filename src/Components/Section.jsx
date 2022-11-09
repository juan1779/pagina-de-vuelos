import React from "react";
import Card from "./Card";
import "../styles/Section.css";

function Section() {
  return (
    <div className="Container">
      <h1 className="Title">
        VIAJA CON NOSOTROS Y DISFRUTA DE LOS MEJORES PAISAJES <br /> ¡AL MEJOR
        PRECIO!
      </h1>
      <div className="Container-card">
        <Card
          className="Card"
          Img="https://astelus.com/wp-content/viajes/Lago-Moraine-Parque-Nacional-Banff-Alberta-Canada.jpg"
          Pais="CANADA"
          Description="Nuestro destino de viaje nunca es un lugar sino una nueva forma de ver las cosas."
        />
        <Card
          className="Card"
          Img="https://images.ecestaticos.com/IQN3naQyb5JGKHB6BaQ5Z69omUs=/284x0:1987x1276/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F3ed%2Ff85%2Fb73%2F3edf85b732c5185f12b4811f2ca4eb12.jpg"
          Pais="HOLANDA"
          Description="Nuestro destino de viaje nunca es un lugar sino una nueva forma de ver las cosas."
        />
        <Card
          className="Card"
          Img="https://img.freepik.com/foto-gratis/torre-eiffel-paris-hermosos-colores-otono_268835-828.jpg?w=2000"
          Pais="PARIS"
          Description="Nuestro destino de viaje nunca es un lugar sino una nueva forma de ver las cosas."
        />
        <Card
          className="Card"
          Img="https://ep01.epimg.net/elviajero/imagenes/2018/05/25/album/1527248206_947021_1527250543_noticia_normal.jpg"
          Pais="ESPAÑA"
          Description="Nuestro destino de viaje nunca es un lugar sino una nueva forma de ver las cosas."
        />
      </div>
    </div>
  );
}

export default Section;
