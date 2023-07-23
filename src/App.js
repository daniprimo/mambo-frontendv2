import { Route, Routes } from "react-router-dom";
import Rota from "./Rotas";
import Home from "./components/Home";
import Layout from "./components/LayoutPrincipal";
import './styles/main.css';

function App() {
  return (
    <div>
      <Layout>
        <Rota />  
      </Layout>
    </div>
  );
}

export default App;
