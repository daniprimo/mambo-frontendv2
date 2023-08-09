import React from "react";
import { useNavigate } from "react-router-dom";
import { chegadaCD, 
  chegadaLoja,
   fimCarregamento,
    iniciarCarregamento,
    saidaCD,
    saidaLoja } from "../../../service";


export function InputConsulta(props) {

  const mudarTelaPara = useNavigate();

  const acaoInicioCarregamento = () => {
    iniciarCarregamento(props.id)
    mudarTelaPara(0)
  }
  const acaoFimCarregamento = () => {
    fimCarregamento(props.id)
    mudarTelaPara(0)
  }
  const acaoSaidaCD = () => {
    saidaCD(props.id)
    mudarTelaPara(0)
  }
  
  const acaoCahegadaLoja = () => {
    chegadaLoja(props.id)
    mudarTelaPara(0)
  }
  
  const acaoSaidaLoja = () => {
    saidaLoja(props.id)
    mudarTelaPara(0)
  }
    
  const acaoChegadaCD = () => {
    chegadaCD(props.id)
    mudarTelaPara(0)
  }

  return (
    <div className="grid grid-cols-2 inline-block">
      <div className="grid grid-cols-3 mt-3">

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
              value={props.programado}
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

          >consolidar</button>

        </div>


        <div>
          <label
            for="first-name"
            class="block text-sm font-medium leading-6 text-gray-900"
          >
            {"Carregamento Iniciado"}
          </label>
          <div class="grid mt-2">
            <input
              class="block
         w-20 rounded-md border-0 
        py-1.5 text-gray-900 shadow-sm
         ring-1 ring-inset ring-gray-300 placeholder:text-gray-400
         focus:ring-2 focus:ring-inset focus:ring-indigo-600
          sm:text-sm sm:leading-6 text-center"
              value={props.iniciarCarregamento}
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
            onClick={() => acaoInicioCarregamento()}
          >consolidar</button>

        </div>

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
              value={props.finalizarCarregamento}
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
            onClick={() => acaoFimCarregamento()}
          >consolidar</button>

        </div>


        <div>
          <label
            for="first-name"
            class="block text-sm font-medium leading-6 text-gray-900"
          >
            {"Saida de loja"}
          </label>
          <div class="grid mt-2">
            <input
              class="block
         w-20 rounded-md border-0 
        py-1.5 text-gray-900 shadow-sm
         ring-1 ring-inset ring-gray-300 placeholder:text-gray-400
         focus:ring-2 focus:ring-inset focus:ring-indigo-600
          sm:text-sm sm:leading-6 text-center"
              value={props.saidaDoCD}
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
            onClick={() => acaoSaidaCD()}
          >consolidar</button>

        </div>


        <div>
          <label
            for="first-name"
            class="block text-sm font-medium leading-6 text-gray-900"
          >
            {"Chegada na loja"}
          </label>
          <div class="grid mt-2">
            <input
              class="block
         w-20 rounded-md border-0 
        py-1.5 text-gray-900 shadow-sm
         ring-1 ring-inset ring-gray-300 placeholder:text-gray-400
         focus:ring-2 focus:ring-inset focus:ring-indigo-600
          sm:text-sm sm:leading-6 text-center"
              value={props.chegadaLoja}
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
            onClick={() => acaoCahegadaLoja()}
          >consolidar</button>

        </div>

        <div>
          <label
            for="first-name"
            class="block text-sm font-medium leading-6 text-gray-900"
          >
            {"Saida loja"}
          </label>
          <div class="grid mt-2">
            <input
              class="block
         w-20 rounded-md border-0 
        py-1.5 text-gray-900 shadow-sm
         ring-1 ring-inset ring-gray-300 placeholder:text-gray-400
         focus:ring-2 focus:ring-inset focus:ring-indigo-600
          sm:text-sm sm:leading-6 text-center"
              value={props.saidaLoja}
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
            onClick={() => acaoSaidaLoja()}
          >consolidar</button>

        </div>

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
              value={props.ChegadaCD}
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
            onClick={() => acaoChegadaCD()}
          >consolidar</button>

        </div>



      </div>
    </div>
  )

}
