import React, { useEffect, useState } from "react";
import { bucsarViagemPorId, iniciarCarregamento, fimCarregamento, chegadaLoja, saidaLoja, chegadaCD } from "../../../service";
import { useNavigate } from "react-router-dom";

export function Programado(props) {
  const [data, setData] = useState({});

  useEffect(() => {
    bucsarViagemPorId(props.id)
      .then((resp) => {
        setData(resp.data.horaDoRegistro);
      })
      .catch((err) => console.log(err));
    }, []);
    

  return (
    <div>
      <label
        for="first-name"
        class="block text-sm font-medium leading-6 text-gray-900"
      >
        {"Programado"}
      </label>
      <div class="grid mt-2">
        <input
          class="block
         w-20 rounded-md border-0 
        py-1.5 text-gray-900 shadow-sm
         ring-1 ring-inset ring-gray-300 placeholder:text-gray-400
         focus:ring-2 focus:ring-inset focus:ring-indigo-600
          sm:text-sm sm:leading-6 text-center"
          value={data}
        />
      </div>
    </div>
  );
}

export function InicioCarregamento(props) {
  const navigate = useNavigate();

  const [horario, setHorario] = useState();

  useEffect(() => {
    bucsarViagemPorId(props.id)
      .then((resp) => {
        setHorario(resp.data.horarios.inicioDescarregamento);
      })
      .catch((err) => console.log(err));
  }, []);

  const acao = (id) => {
    iniciarCarregamento(id)
    navigate(0)
  }

  return (
    <div>
      <label
        for="first-name"
        class="block text-sm font-medium leading-6 text-gray-900"
      >
        {"Carregamento iniciado"}
      </label>
      <div class="grid mt-2">
        <input
          class="block
         w-20 rounded-md border-0 
        py-1.5 text-gray-900 shadow-sm
         ring-1 ring-inset ring-gray-300 placeholder:text-gray-400
         focus:ring-2 focus:ring-inset focus:ring-indigo-600
          sm:text-sm sm:leading-6 text-center"
          value={horario}
        />

      </div>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 
           text-sm font-semibold text-white 
           shadow-sm hover:bg-indigo-500
            focus-visible:outline focus-visible:outline-2
             focus-visible:outline-offset-2
              focus-visible:outline-indigo-600"
          onClick={() => acao(props.id)}
        >consolidar</button>
    </div>
  );
}

export function FinalCarregamento(props) {
  const [finalizarCarregamento, setfinalizarCarregamento] = useState();
  const navigate = useNavigate();


  useEffect(() => {
    bucsarViagemPorId(props.id)
      .then((resp) => {
        setfinalizarCarregamento(resp.data.horarios.fimDoCarregamento);
      })
      .catch((err) => console.log(err));
  }, []);

  const acao = (id) => {
    fimCarregamento(id)
    navigate(0)
  }

  return (
    <div>
      <label
        for="first-name"
        class="block text-sm font-medium leading-6 text-gray-900"
      >
        {"Carregamento Finalizado"}
      </label>
      <div class="grid mt-2">
        <input
          class="block
         w-20 rounded-md border-0 
        py-1.5 text-gray-900 shadow-sm
         ring-1 ring-inset ring-gray-300 placeholder:text-gray-400
         focus:ring-2 focus:ring-inset focus:ring-indigo-600
          sm:text-sm sm:leading-6 text-center"
          value={finalizarCarregamento}
        />
      </div>
      <button
          type="button"
          className="rounded-md bg-indigo-600 
           text-sm font-semibold text-white 
           shadow-sm hover:bg-indigo-500
            focus-visible:outline focus-visible:outline-2
             focus-visible:outline-offset-2
              focus-visible:outline-indigo-600"
          onClick={() => acao(props.id)}
        >consolidar</button>

    </div>
  );
}

export function ChegadaLoja(props) {
  const [chegadaNaLoja, setchegadaNaLoja] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    bucsarViagemPorId(props.id)
      .then((resp) => {
        setchegadaNaLoja(resp.data.horarios.chegadaLoja);
      })
      .catch((err) => console.log(err));
  }, []);

  const acao = (id) => {
    chegadaLoja(id)
    navigate(0)
  }

  return (
    <div>
      <label
        for="first-name"
        class="block text-sm font-medium leading-6 text-gray-900"
      >
        {"Chegada Loja"}
      </label>
      <div class="grid mt-2">
        <input
          class="block
         w-20 rounded-md border-0 
        py-1.5 text-gray-900 shadow-sm
         ring-1 ring-inset ring-gray-300 placeholder:text-gray-400
         focus:ring-2 focus:ring-inset focus:ring-indigo-600
          sm:text-sm sm:leading-6 text-center"
          value={chegadaNaLoja}
        />
      </div>
      <button
          type="button"
          className="rounded-md bg-indigo-600 
           text-sm font-semibold text-white 
           shadow-sm hover:bg-indigo-500
            focus-visible:outline focus-visible:outline-2
             focus-visible:outline-offset-2
              focus-visible:outline-indigo-600"
          onClick={() => acao(props.id)}
        >consolidar</button>

    </div>
  );
}

export function SaidaLoja(props) {
  const [saidaDaLoja, setsaidaDaLoja] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    bucsarViagemPorId(props.id)
      .then((resp) => {
        setsaidaDaLoja(resp.data.horarios.saidaLoja);
      })
      .catch((err) => console.log(err));
  }, []);

  const acao = (id) => {
    saidaLoja(id)
    navigate(0)
  }

  return (
    <div>
      <label
        for="first-name"
        class="block text-sm font-medium leading-6 text-gray-900"
      >
        {"Saida Loja"}
      </label>
      <div class="grid mt-2">
        <input
          class="block
         w-20 rounded-md border-0 
        py-1.5 text-gray-900 shadow-sm
         ring-1 ring-inset ring-gray-300 placeholder:text-gray-400
         focus:ring-2 focus:ring-inset focus:ring-indigo-600
          sm:text-sm sm:leading-6 text-center"
          value={saidaDaLoja}
        />
      </div>
      <button
          type="button"
          className="rounded-md bg-indigo-600 
           text-sm font-semibold text-white 
           shadow-sm hover:bg-indigo-500
            focus-visible:outline focus-visible:outline-2
             focus-visible:outline-offset-2
              focus-visible:outline-indigo-600"
          onClick={() => acao(props.id)}
        >consolidar</button>

    </div>
  );
}

export function ChegadaCD(props) {
  const [chegadaNoCD, setchegadaNoCD] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    bucsarViagemPorId(props.id)
      .then((resp) => {
        setchegadaNoCD(resp.data.horarios.chegadaCD);
      })
      .catch((err) => console.log(err));
  }, []);

  const acao = (id) => {
    chegadaCD(id)
    navigate(0)
  }

  return (
    <div>
      <label
        for="first-name"
        class="block text-sm font-medium leading-6 text-gray-900"
      >
        {"Chegada CD"}
      </label>
      <div class="grid mt-2">
        <input
          class="block
         w-20 rounded-md border-0 
        py-1.5 text-gray-900 shadow-sm
         ring-1 ring-inset ring-gray-300 placeholder:text-gray-400
         focus:ring-2 focus:ring-inset focus:ring-indigo-600
          sm:text-sm sm:leading-6 text-center"
          value={chegadaNoCD}
        />
      </div>
      <button
          type="button"
          className="rounded-md bg-indigo-600 
           text-sm font-semibold text-white 
           shadow-sm hover:bg-indigo-500
            focus-visible:outline focus-visible:outline-2
             focus-visible:outline-offset-2
              focus-visible:outline-indigo-600"
          onClick={() => acao(props.id)}
        >consolidar</button>

    </div>
  );
}

export function inputConsulta(props){

}
