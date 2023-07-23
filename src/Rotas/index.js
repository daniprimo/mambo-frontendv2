import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import Home from "../components/Home";
import Programacao from "../pages/ProgramarNovaViagem";
import ListarViagem from "../pages/ListarViagens";
import ConsultaViagem from "../pages/ConsultarViagem";

export default function Rota() {
  return (
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/programacao" element={<Programacao />} />
        <Route path="/relatorio" element={<ListarViagem />} />
        <Route path="/consultaViagem" element={<ConsultaViagem />} />
      </Routes>
  );
}
