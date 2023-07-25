import React, { useEffect, useState } from "react";
import Status from "../../components/SinalizadorDeStatus";
import { CampoMostrarMotorista, CampoMostrarOrigem, CampoMostrarTipo, CampoMostrarVeiculo } from "../../components/Inputs/CampoParaMostrarDados";
import TabelaDoConsulta from "../../components/TabelaAdicionarLojaEntrega/TabelaMostrado";
import { useParams } from "react-router-dom";
import { ChegadaCD, ChegadaLoja, FinalCarregamento, InicioCarregamento, Programado, SaidaLoja } from "../../components/Inputs/CampoHorario";

export default function ConsultaViagem() {

  const {id} = useParams();
  const [total, setTotal] = useState()

  function totalPallets(e) {
    setTotal(e)
    console.log(total)
  }
  
  
  return (
    <>
      <Status id={id} />
      <div className="inline-block group p-6 border-2 cursor-pointer hover:bg-gray-50 hover:border-blue-100">
        <label>Viagem Nº: {id}</label>
        <div className="grid grid-cols-4 ">
          <CampoMostrarMotorista id={id} label={"Motorista"}/>
          <CampoMostrarVeiculo id={id} label={"Placa"}/>
          <CampoMostrarOrigem id={id} label={"Tipo"}/>
          <CampoMostrarTipo id={id} label={"Origem"}/>
        </div>
      </div>
      <div className="inline-block group p-6 border-2 cursor-pointer hover:bg-gray-50 hover:border-blue-100 w-full">
        <label>Entrega:</label>
        <TabelaDoConsulta id={id} pegarTotalPallet={totalPallets}/>
      </div>

      <div className="group p-6 border-2 cursor-pointer hover:bg-gray-50 hover:border-blue-100">
      <label>Infortmações:</label>
        <div className="grid grid-cols-2 inline-block">
          <div className="grid grid-cols-3 mt-3">
            <Programado id={id}/>
            <InicioCarregamento id={id}/>
            <FinalCarregamento id={id}/>
            <ChegadaLoja id={id}/>
            <SaidaLoja id={id}/>
            <ChegadaCD id={id}/>

          </div>
          <div className="flex-row mt-3 w-100 ">
            <h1 className="">Ocupação do baú</h1>
          </div>
        </div>
      </div>
    </>
  );
}
