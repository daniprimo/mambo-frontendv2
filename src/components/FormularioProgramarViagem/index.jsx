import React, { useState } from "react";
import { adicionarViagem } from "../../service";
import InputMotorista from "../Inputs/InputMotorista";
import InputVeiculo from "../Inputs/InputVeiculo";
import InputOrigem from "../Inputs/InputOrigem";
import InputTabelaEntregas from "../TabelaAdicionarLojaEntrega/TabelaInput";
import ListaTabelaEntregas from "../TabelaAdicionarLojaEntrega/TabelaList";
import { useNavigate } from "react-router-dom";

export default function FormularioProgramarViagem() {

  const navegar = useNavigate();

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [loja, setLoja] = useState([]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [motorista, setMotorista] = useState();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [veiculo, setVeiculo] = useState();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [origem, setOrigem] = useState();

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [dataSalva, setDataSalva] = useState();

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const data = {
    motorista: motorista,
    placa: veiculo,
    origem: origem,
    lojas: loja,
  };
  const setarLoja = (r) => {
    setLoja([...loja, r]);
  };

  const setarMotorista = (r) => {
    setMotorista(r);
  };
  const setarVeiculo = (r) => {
    setVeiculo(r);
  };
  const setarOrigem = (r) => {
    setOrigem(r);
  };

  async function mostra() {
    await adicionarViagem(data)
      .then((data) => console.log(data))
      .catch((e) => console.log(e));
    console.log(data);
    console.log(dataSalva);
    navegar(0)
  }

  return (
    <div className="space-y-12">
      <div className="border-b border-gray-900/10 pb-12">
        <h2 className="text-base font-semibold leading-7 text-gray-900">
          Programação de Viagens
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <InputMotorista
            puxarMotorista={setarMotorista}
            nomeDoCampo={"Motorista"}
          />

          <InputVeiculo puxarVeiculo={setarVeiculo} nomeDoCampo={"Veiculo"} />

          <InputOrigem puxarOrigem={setarOrigem} nomeDoCampo={"Origem"} />


          <InputTabelaEntregas addListaEntregas={setarLoja}></InputTabelaEntregas>
        </div>

        <ListaTabelaEntregas
          listaDasLojas={loja}
        ></ListaTabelaEntregas>
      </div>
      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="button"
          className="text-sm font-semibold leading-6 text-gray-900"
        >
          Cancelar
        </button>
        <button
          type="button"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          onClick={() => mostra()}
        ></button>
      </div>
    </div>
  );
}
