import React from "react";
import Header from "./Header";

function Navbar() {
  return (
    <div>
      <Header>
        <a className="navbar-texto" href="#">
          INICIO
        </a>
        <a className="navbar-texto" href="#">
          NOSOTROS
        </a>
        <a className="navbar-texto" href="#">
          SOPORTE
        </a>
        <a className="navbar-texto" href="#">
          GENERA CON NOSOTROS
        </a>
      </Header>
    </div>
  );
}

export default Navbar;
