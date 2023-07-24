import React, { useEffect, useState } from "react";
import { bucsarViagemPorId } from "../../../service";

export function Programado(props) {
  const [horario, setHorario] = useState();

  useEffect(() => {
    bucsarViagemPorId(props.id)
      .then((resp) => {
        setHorario(resp.data.horarios);
        console.log(horario)
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
          value={""}
        />
      </div>
    </div>
  );
}

export function InicioCarregamento(props) {
  const [horario, setHorario] = useState();

  useEffect(() => {
    bucsarViagemPorId(props.id)
      .then((resp) => {
        setHorario(resp.data.horarios);
        console.log(horario)
      })
      .catch((err) => console.log(err));
  }, []);

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
          value={""}
        />
      </div>
    </div>
  );
}

export function FinalCarregamento(props) {
  const [fimCarregamento, setFimCarregamento] = useState();

  useEffect(() => {
    bucsarViagemPorId(props.id)
      .then((resp) => {
        setFimCarregamento(resp.data.horarios);
        console.log(fimCarregamento)
      })
      .catch((err) => console.log(err));
  }, []);

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
          value={""}
        />
      </div>
    </div>
  );
}

export function ChegadaLoja(props) {
  const [chegadaLoja, setChegadaLoja] = useState();

  useEffect(() => {
    bucsarViagemPorId(props.id)
      .then((resp) => {
        setChegadaLoja(resp.data.horarios);
        console.log(chegadaLoja)
      })
      .catch((err) => console.log(err));
  }, []);

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
          value={""}
        />
      </div>
    </div>
  );
}

export function SaidaLoja(props) {
  const [saidaLoja, setSaidaLoja] = useState();

  useEffect(() => {
    bucsarViagemPorId(props.id)
      .then((resp) => {
        setSaidaLoja(resp.data.horarios);
      })
      .catch((err) => console.log(err));
  }, []);

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
          value={""}
        />
      </div>
    </div>
  );
}

export function ChegadaCD(props) {
  const [chegadaCD, setChegadaCD] = useState();

  useEffect(() => {
    bucsarViagemPorId(props.id)
      .then((resp) => {
        setChegadaCD(resp.data.horarios);
      })
      .catch((err) => console.log(err));
  }, []);

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
          value={""}
        />
      </div>
    </div>
  );
}
