import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/Estilo.css";
function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header className="head">
      <h3>EARTH FLY</h3>
      <nav ref={navRef}>
        <a href="/#">Inicio</a>
        <a href="/#">Nosotros</a>
        <a href="/#">Paquetes</a>
        <a href="/#">Contactanos</a>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
