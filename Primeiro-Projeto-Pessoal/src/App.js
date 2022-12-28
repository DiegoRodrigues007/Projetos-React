import "./App.css";
import "./components/Background/Background.css";
import Background from "./components/Background";
import CampoTexto from "./components/CampoTexto";
import Menu from "./components/Menu";
import Card from "./components/Card";
import Footer from "./components/Footer";



function App() {
  return (
    <div>
      <Background />
      <Card />
      <Menu />
      <CampoTexto />
      <Footer/>
    </div>
  );
}

export default App;
