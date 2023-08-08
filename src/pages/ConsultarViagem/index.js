import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { InputConsulta } from "../../components/Inputs/CampoHorario";
import { CampoInputValueTexto } from "../../components/Inputs/CampoParaMostrarDados";
import Status from "../../components/SinalizadorDeStatus";
import TabelaDoConsulta from "../../components/TabelaAdicionarLojaEntrega/TabelaMostrado";
import { bucsarViagemPorId } from "../../service";

export default function ConsultaViagem() {


  const [initCarregamento, setInitCarregamento] = useState()
  const [finCarregamento, setFinCarregamento] = useState()
  const [saidaCD, setSaidaCD] = useState()
  const [chegadaNaLoja, setChegadaNaLoja] = useState()
  const [saidadaNaLoja, setSaidadaNaLoja] = useState()
  const [chegadaNoCd, setChegadaNoCd] = useState()
  const [programado, setProgramado] = useState() 
  
  const [motorista, setMotorista] = useState()
  const [veiculo, setVeiculo] = useState()
  const [tipo, setTipoVeiculo] = useState()
  const [origem, setOrigem] = useState()
  
  const {id} = useParams();
  
  useEffect(() => {
    bucsarViagemPorId(id)
    .then((resp) => {
      setOrigem(resp.data.origem.nome)
      setTipoVeiculo(resp.data.veiculo.tipoDoVeiculo)
      setVeiculo(resp.data.veiculo.placa)
      setMotorista(resp.data.motorista.nome)

      setProgramado(resp.data.horaDoRegistro)
      setInitCarregamento(resp.data.horarios.inicioDescarregamento);
      setFinCarregamento(resp.data.horarios.fimDoCarregamento);
      setSaidaCD(resp.data.horarios.saidaCD)
      setChegadaNaLoja(resp.data.horarios.chegadaLoja);
      setSaidadaNaLoja(resp.data.horarios.saidaLoja);
      setChegadaNoCd(resp.data.horarios.chegadaCD);

    }).catch(err => console.log(err))
  })
  
  
  
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
          <CampoInputValueTexto label={"Motorista"} conteudo={motorista}/>
          <CampoInputValueTexto label={"Placa"} conteudo={veiculo}/>
          <CampoInputValueTexto label={"Veiculo"} conteudo={tipo}/>
          <CampoInputValueTexto label={"Origem"} conteudo={origem}/>
        </div>
      </div>
      <div className="inline-block group p-6 border-2 cursor-pointer hover:bg-gray-50 hover:border-blue-100 w-full">
        <label>Entrega:</label>
        <TabelaDoConsulta id={id} pegarTotalPallet={totalPallets}/>
      </div>

            <InputConsulta 
              programado={programado}
              iniciarCarregamento={initCarregamento}
              finalizarCarregamento={finCarregamento}
              saidaCD={saidaCD}
              chegadaLoja={chegadaNaLoja}
              saidaLoja={saidadaNaLoja}
              ChegadaCD={chegadaNoCd}
              id={id}
            />

    </>
  );
}
