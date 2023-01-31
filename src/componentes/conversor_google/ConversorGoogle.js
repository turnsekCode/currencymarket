import React from "react";
import "./conversor_google.css";
import LogoGoogle from "../../assets/logo-Google 1.png";
import MapaUsa from "../../assets/mapa_usa.png";

const ConversorGoogle = () => {
  return (
    <section>
      <h2 className="titulo_precio">
        Te damos los <span>dólares </span>al precio que marque Google
      </h2>
      <div className="contenedor_precio_google">
        <div className="contenedor_google">
          <iframe
            src="https://www.google.com/search?q=euro+cotizacion&igu=1&ei=igfJY8XFFJaW9u8Pweik4AM&ved=0ahUKEwjFsrq6o9P8AhUWi_0HHUE0CTwQ4dUDCA8&uact=5&oq=euro+cotizacion&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIPCAAQsQMQgwEQQxBGEIICMgcIABCABBANMgcIABCABBANMgQIABBDMgYIABAHEB4yBwgAEIAEEA0yBggAEAcQHjIHCAAQgAQQDTIHCAAQgAQQDTIHCAAQgAQQDUoECEEYAEoECEYYAFAAWJAGYPcRaABwAXgAgAFsiAGoA5IBAzAuNJgBAKABAcABAQ&sclient=gws-wiz-serp"
            name="myIFrame"
            frameBorder="0"
            scrolling="no"
            title="mapa google"
            className="iframe_mapa"
          ></iframe>
        </div>
        <div className="contenedor_mapa_usa">
          <img src={MapaUsa} alt="mapa usa" />
        </div>
      </div>
      <div className="contenedor_texto_inferior">
        <span>Conversor de</span>
        <img className="logo_google" src={LogoGoogle} alt="logo google" />
      </div>
    </section>
  );
};

export default ConversorGoogle;
