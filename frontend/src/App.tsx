import { Header } from "./home/Header";
import { Hero } from "./home/Hero";
import { Servicios } from "./home/Servicios";
import { SobreNosotros } from "./home/SobreNosotros";
import { PorQueElegirnos } from "./home/PorQueElegirnos";
import { Equipo } from "./home/Equipo";
import { Galeria } from "./home/Galeria";
import { Pacientes } from "./home/Pacientes";
import { Testimonios } from "./home/Testimonios";
import { ComoAgendar } from "./home/ComoAgendar";
import { Footer } from "./home/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Servicios />
      <SobreNosotros />
      <PorQueElegirnos />
      <Equipo />
      <Galeria />
      <Pacientes />
      <Testimonios />
      <ComoAgendar />
      <Footer />
    </>
  );
};

export default App;
