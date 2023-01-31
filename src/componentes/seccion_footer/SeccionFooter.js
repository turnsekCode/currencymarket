import React from "react";
import "./seccion_footer.css";
import Rectangle46 from "../../assets/Rectangle 46.png";
import { Link } from "react-router-dom";

const SeccionFooter = () => {
  return (
    <div className="contenedor_seccion_footer">
      <h1 className="logo_footer">
        <span>CURRENCY</span>MARKET®
      </h1>
      <div className="contenedor_links_footer">
        <Link to={"/dolares-cotizacion/privacidad"} className="links_footer">
          POLÍTICA DE PRIVACIDAD
        </Link>
        <a
          className="links_footer"
          href="https://quickgold.es/"
          target="_BLANK"
          rel="noreferrer"
        >
          CONÓCENOS
        </a>
      </div>
      <img className="barra_inferior" src={Rectangle46} alt="barra" />
      <p className="parrafo_footer">
        © 2023 Currencymarket | CURRENCY MARKET S.A. - A98914633 - RONDA AUGUSTE
        Y LOUIS LUMIERE, 23, NAVE 9 46980 PATERNA, VALENCIA -
        administracion@currencymarket.es - 900 373 649 Registro Mercantil de
        Valencia , Tomo 9220, Libro 6503, Folio 215, Hoja V-140170, Inscripción
        2ª.
      </p>
    </div>
  );
};

export default SeccionFooter;
