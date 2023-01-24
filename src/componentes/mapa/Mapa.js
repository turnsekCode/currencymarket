import React, { useState } from "react";
import "./mapa.css";
import {
  useFetchDelicias,
  useFetchTirso,
  useFetchTetuan,
  useFetchBernardo,
  useFetchCaminos,
  useFetchAlcala,
} from "../../Data";
import Map, {
  FullscreenControl,
  GeolocateControl,
  Marker,
  NavigationControl,
  Popup,
} from "react-map-gl";
//import Accordion from "../accordion/Accordion";
import Accordion2 from "../accordion/Accordion2";

const Mapa = () => {
  const { delicias } = useFetchDelicias();
  const { tirso } = useFetchTirso();
  const { tetuan } = useFetchTetuan();
  const { bernardo } = useFetchBernardo();
  const { caminos } = useFetchCaminos();
  const { alcala } = useFetchAlcala();

  const [showPopup, setShowPopup] = useState("");

  const toggleTab = (index) => {
    setShowPopup(index);
  };

  return (
    <section>
      <h2 className="titulo_mapa">
        <span>Solo en</span> Madrid
      </h2>
      <div className="contenedor_mapa">
        <Map
          initialViewState={{
            longitude: -3.6883264,
            latitude: 40.4495878,
            zoom: 11,
            cooperativeGestures: true,
          }}
          className="mapa"
          mapStyle="mapbox://styles/mapbox/streets-v9"
          mapboxAccessToken="pk.eyJ1IjoicXVpY2tnb2wiLCJhIjoiY2xhbGNvcHAyMDRyNjNwbWthcm1zMm9nbyJ9.tmZYhqn4Z6U3fcCZH647Zw"
        >
          <FullscreenControl /> <GeolocateControl /> <NavigationControl />
          <Marker
            longitude={-3.6951906}
            latitude={40.4011045}
            onClick={() => {
              toggleTab(1);
            }}
          ></Marker>
          {showPopup === 1 && (
            <Popup
              style={{ top: -25 }}
              longitude={-3.6951906}
              className="popup"
              latitude={40.4011045}
              closeOnClick={false}
              anchor={null}
              onClose={() => setShowPopup(false)}
            >
              <div className="contenedor_popuop">
                <p className="nombre_ciudad_popup">Delicias</p>
                <p className="nombre_ciudad_popup">Contacto:</p>
                <a
                  href="http://bit.ly/3X3XYRj"
                  rel="noreferrer"
                  target="_blank"
                  className="direccion_popup"
                >
                  {delicias.result?.formatted_address}
                </a>
                <br></br>
                <a
                  href={`tel:${delicias.result?.international_phone_number}`}
                  className="telefono_popup"
                >
                  {delicias.result?.international_phone_number}
                </a>
              </div>
            </Popup>
          )}
          <Marker
            longitude={-3.7073656999999685}
            latitude={40.4232377}
            onClick={() => {
              toggleTab(2);
            }}
          ></Marker>
          {showPopup === 2 && (
            <Popup
              style={{ top: -35 }}
              longitude={-3.7073656999999685}
              latitude={40.4232377}
              closeOnClick={false}
              anchor={null}
              onClose={() => setShowPopup(false)}
            >
              <div className="contenedor_popuop">
                <p className="nombre_ciudad_popup">San Bernardo</p>
                <p className="nombre_ciudad_popup">Contacto:</p>
                <a
                  href="http://bit.ly/3V13uCi"
                  rel="noreferrer"
                  target="_blank"
                  className="direccion_popup"
                >
                  {bernardo.result?.formatted_address}
                </a>
                <br></br>
                <a
                  href={`tel:${bernardo.result?.international_phone_number}`}
                  className="telefono_popup"
                >
                  {bernardo.result?.international_phone_number}
                </a>
              </div>
            </Popup>
          )}
          <Marker
            longitude={-3.7039902999999867}
            latitude={40.4488839}
            onClick={() => {
              toggleTab(3);
            }}
          ></Marker>
          {showPopup === 3 && (
            <Popup
              style={{ top: -35 }}
              longitude={-3.7039902999999867}
              latitude={40.4488839}
              closeOnClick={false}
              anchor={null}
              onClose={() => setShowPopup(false)}
            >
              <div className="contenedor_popuop">
                <p className="nombre_ciudad_popup">Cuatro Caminos</p>
                <p className="nombre_ciudad_popup">Contacto:</p>
                <a
                  href="http://bit.ly/3EFq1iI"
                  rel="noreferrer"
                  target="_blank"
                  className="direccion_popup"
                >
                  {caminos.result?.formatted_address}
                </a>
                <br></br>
                <a
                  href={`tel:${caminos.result?.international_phone_number}`}
                  className="telefono_popup"
                >
                  {caminos.result?.international_phone_number}
                </a>
              </div>
            </Popup>
          )}
          <Marker
            longitude={-3.705431599999997}
            latitude={40.4121929}
            onClick={() => {
              toggleTab(4);
            }}
          ></Marker>
          {showPopup === 4 && (
            <Popup
              style={{ top: -35 }}
              longitude={-3.705431599999997}
              latitude={40.4121929}
              closeOnClick={false}
              anchor={null}
              onClose={() => setShowPopup(false)}
            >
              <div className="contenedor_popuop">
                <p className="nombre_ciudad_popup">Tirso de molina</p>
                <p className="nombre_ciudad_popup">Contacto:</p>
                <a
                  href="http://bit.ly/3tFiXwm"
                  rel="noreferrer"
                  target="_blank"
                  className="direccion_popup"
                >
                  {tirso.result?.formatted_address}
                </a>
                <br></br>
                <a
                  href={`tel:${tirso.result?.international_phone_number}`}
                  className="telefono_popup"
                >
                  {tirso.result?.international_phone_number}
                </a>
              </div>
            </Popup>
          )}
          <Marker
            longitude={-3.698444600000016}
            latitude={40.4603827}
            onClick={() => {
              toggleTab(5);
            }}
          ></Marker>
          {showPopup === 5 && (
            <Popup
              style={{ top: -35 }}
              longitude={-3.698444600000016}
              latitude={40.4603827}
              closeOnClick={false}
              anchor={null}
              onClose={() => setShowPopup(false)}
            >
              <div className="contenedor_popuop">
                <p className="nombre_ciudad_popup">Tetuán</p>
                <p className="nombre_ciudad_popup">Contacto:</p>
                <a
                  href="http://bit.ly/3EgcXPx"
                  rel="noreferrer"
                  target="_blank"
                  className="direccion_popup"
                >
                  {tetuan.result?.formatted_address}
                </a>
                <br></br>
                <a
                  href={`tel:${tetuan.result?.international_phone_number}`}
                  className="telefono_popup"
                >
                  {tetuan.result?.international_phone_number}
                </a>
              </div>
            </Popup>
          )}
          <Marker
            longitude={-3.665292000000022}
            latitude={40.429553}
            onClick={() => {
              toggleTab(6);
            }}
          ></Marker>
          {showPopup === 6 && (
            <Popup
              style={{ top: -35 }}
              longitude={-3.665292000000022}
              latitude={40.429553}
              closeOnClick={false}
              anchor={null}
              onClose={() => setShowPopup(false)}
            >
              <div className="contenedor_popuop">
                <p className="nombre_ciudad_popup">Alcala-Ventas</p>
                <p className="nombre_ciudad_popup">Contacto:</p>
                <a
                  href="http://bit.ly/3THXcpZ"
                  rel="noreferrer"
                  target="_blank"
                  className="direccion_popup"
                >
                  {alcala.result?.formatted_address}
                </a>
                <br></br>
                <a
                  href={`tel:${alcala.result?.international_phone_number}`}
                  className="telefono_popup"
                >
                  {alcala.result?.international_phone_number}
                </a>
              </div>
            </Popup>
          )}
        </Map>
      </div>

      <div className="contenedor_info_mapa">
        <h2>
          Encuentra <span>tu tienda más cercana</span>
        </h2>
      </div>
      <Accordion2 showPopup={showPopup} setShowPopup={setShowPopup} />
    </section>
  );
};

export default Mapa;
