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
          <Marker longitude={-3.6461429} latitude={40.4341911}>
            <p>Quintana</p>
            <img className="market_img" src="../market.png" alt="market" />
          </Marker>
          <Marker longitude={-3.6951906} latitude={40.4011045}>
            <p>Delicias</p>
            <img className="market_img" src="../market.png" alt="market" />
          </Marker>
          <Marker longitude={-3.712925499999999} latitude={40.3962949}>
            <p>Usera</p>
            <img className="market_img" src="../market.png" alt="market" />
          </Marker>
          <Marker longitude={-3.7039902999999867} latitude={40.4488839}>
            <p>Cuatro Caminos</p>
            <img className="market_img" src="../market.png" alt="market" />
          </Marker>
          <Marker longitude={-3.7073656999999685} latitude={40.4232377}>
            <p>San Bernardo</p>
            <img className="market_img" src="../market.png" alt="market" />
          </Marker>
          <Marker longitude={-3.705431599999997} latitude={40.4121929}>
            <p>Tirso de Molina</p>
            <img className="market_img" src="../market.png" alt="market" />
          </Marker>
          <Marker longitude={-3.713297099999977} latitude={40.4351005}>
            <p>Guzman el Bueno</p>
            <img className="market_img" src="../market.png" alt="market" />
          </Marker>
          <Marker longitude={-3.698444600000016} latitude={40.4603827}>
            <p>Tetuan</p>
            <img className="market_img" src="../market.png" alt="market" />
          </Marker>
          <Marker longitude={-3.665292000000022} latitude={40.429553}>
            <p>Alcala</p>
            <img className="market_img" src="../market.png" alt="market" />
          </Marker>
        </Map>
      </div>
    </section>
  );
};

export default Mapa;
