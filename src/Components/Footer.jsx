import React from "react";
import "../styles/Footer.css";
import {
  FaFacebook,
  FaTwitter,
  FaRegCopyright,
  FaInstagramSquare,
  FaEnvelope,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="Container-footer">
      <div className="Redes-sociales">
        <a className="Redes-btn" href="#">
          <FaFacebook />
        </a>
        <a className="Redes-btn" href="#">
          <FaTwitter />
        </a>
        <a className="Redes-btn" href="#">
          <FaInstagramSquare />
        </a>
        <a className="Redes-btn" href="#">
          <FaEnvelope />
        </a>
      </div>
      <p className="Copyright">
        <FaRegCopyright /> TODOS LOS DERECHOS RESERVADOS
      </p>
      <h3 className="Title-footer">EARTH FLY</h3>
    </div>
  );
}

export default Footer;
