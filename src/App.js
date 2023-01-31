import "./App.css";
import Conversor from "./componentes/conversor/Conversor";
import Contenedor from "./componentes/contenedor/Contenedor";
import ConversorGoogle from "./componentes/conversor_google/ConversorGoogle";
import TituloIzq from "./componentes/titulo_izq/TituloIzq";
import Mapa from "./componentes/mapa/Mapa";
import ImagenChicoBandera from "../src/assets/chico-bandera-transparente-billetes-dollar 1.png";
import Rectalgle34 from "../src/assets/Rectangle 34.png";

function App() {
  return (
    <Contenedor>
      <div className="App">
        <section className="contenedor_conversor">
          {/* <div className="bloque_izq">
            <TituloIzq />
            <Conversor />
  </div>
          <div className="bloque_der">
            <img src={ImagenChicoBandera} alt="" />
          </div>*/}
        </section>
        {/* <div className="separador_section">
          <img src={Rectalgle34} alt="" />
        </div>*/}
        <ConversorGoogle />
        <Mapa />
      </div>
    </Contenedor>
  );
}

export default App;
