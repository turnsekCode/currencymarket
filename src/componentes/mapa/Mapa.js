import React from "react";
import "./mapa.css";
import Map, {
  FullscreenControl,
  GeolocateControl,
  Marker,
  NavigationControl,
} from "react-map-gl";

const Mapa = () => {
  return (
    <section>
      <h2 className="titulo_mapa">
        <span>Solo en</span> Madrid
      </h2>
      <div className="contenedor_mapa">
        <Map
          initialViewState={{
            longitude: -3.6833264,
            latitude: 40.4365878,
            zoom: 11,
          }}
          className="mapa"
          mapStyle="mapbox://styles/mapbox/streets-v9"
          mapboxAccessToken="pk.eyJ1IjoicXVpY2tnb2wiLCJhIjoiY2xhbGNvcHAyMDRyNjNwbWthcm1zMm9nbyJ9.tmZYhqn4Z6U3fcCZH647Zw"
        >
          <FullscreenControl /> <GeolocateControl /> <NavigationControl />
          <Marker longitude={-3.6590415} latitude={40.3931151}>
            <p>Albufera</p>
            <img className="market_img" src="../market.png" alt="market" />
          </Marker>
        </Map>
      </div>
    </section>
  );
};

export default Mapa;
