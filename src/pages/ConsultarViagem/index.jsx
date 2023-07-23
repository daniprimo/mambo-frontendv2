import React from "react";
import Status from "../../components/SinalizadorDeStatus";
import CampoMostrar from "../../components/Inputs/CampoParaMostrarDados";
import TabelaDoConsulta from "../../components/TabelaAdicionarLojaEntrega/TabelaMostrado";
import CampoMostrarHora from "../../components/Inputs/CampoParaMostrarDados/campoHora";
import { Circle } from "react-circle";

export default function ConsultaViagem(props) {
  return (
    <>
     <Status status={"Em Carregamento"}/>
     <div className="grid grid-cols-4 inline-block group p-6 border-2 cursor-pointer hover:bg-gray-50 hover:border-blue-100">
         <CampoMostrar label={"Motorista"}  conteudo={"Daniel"}/>  
         <CampoMostrar label={"Placa"}  conteudo={"FDC1A50"}/>  
         <CampoMostrar label={"Tipo"}  conteudo={"Truck"}/>  
         <CampoMostrar label={"Origem"}  conteudo={"CD MAMBO"}/>  
     </div>
     <div className="inline-block group p-6 border-2 cursor-pointer hover:bg-gray-50 hover:border-blue-100 w-full">
        <TabelaDoConsulta />
     </div>

     <div className="grid grid-cols-2 inline-block group p-6 border-2 cursor-pointer hover:bg-gray-50 hover:border-blue-100">
        <div className="grid grid-cols-3 mt-3">
          <CampoMostrarHora label={"Em Carregametno"} conteudo={"13:28"}/>
          <CampoMostrarHora label={"Carregamnto Finalizado"} conteudo={"13:50"}/>
          <CampoMostrarHora label={"Em Transito - Loja"} conteudo={"14:10"}/>
          <CampoMostrarHora label={"Chegada Loja"} conteudo={"15:20"}/>
          <CampoMostrarHora label={"Em Transito - CD"} conteudo={"16:02"}/>
          <CampoMostrarHora label={"Chegada CD"} conteudo={"16:45"}/>
        </div>
        <div className="flex-row mt-3 w-100 ">
          <h1 className="">Ocupação do baú</h1>
          <Circle animate='true'  progress={92} size="280"/>
        </div>
     </div>
    </>
  );
}
