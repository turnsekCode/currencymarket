import "./App.css";
import Conversor from "./componentes/conversor/Conversor";
import Contenedor from "./componentes/contenedor/Contenedor";
import ConversorGoogle from "./componentes/conversor_google/ConversorGoogle";
import TituloIzq from "./componentes/titulo_izq/TituloIzq";
import Mapa from "./componentes/mapa/Mapa";

function App() {
  return (
    <Contenedor>
      <div className="App">
        <section className="contenedor_conversor">
          <div className="bloque_izq">
            <TituloIzq />
            <Conversor />
          </div>
          <div className="bloque_der">
            <img
              src="../chico-bandera-transparente-billetes-dollar 1.png"
              alt=""
            />
          </div>
        </section>
        <div className="separador_section">
          <img src="../Rectangle 34.png" alt="" />
        </div>
        <ConversorGoogle />
        <Mapa />
      </div>
    </Contenedor>
  );
}

export default App;
