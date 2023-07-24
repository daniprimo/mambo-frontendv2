import React, { useEffect, useState } from 'react'
import { bucsarViagemPorId, buscarMotorista } from '../../../service'

export function CampoMostrarMotorista(props) {

  const [motorista, setMotorista] = useState()

  useEffect(() => {
    bucsarViagemPorId(props.id)
    .then((resp) => {
      setMotorista(resp.data.motorista.nome)
    }).catch(err => console.log(err))
  })


  return (
    <div class="mt-5 grid grid-cols-6">
    <div>
      <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">{props.label}</label>
      <div class="grid mt-2">
        <input class="block
         w-40 rounded-md border-0 
        py-1.5 text-gray-900 shadow-sm
         ring-1 ring-inset ring-gray-300 placeholder:text-gray-400
         focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 text-center" value={motorista}/>
      </div>
    </div>
    </div>
  )
}

export function CampoMostrarVeiculo(props) {

  
  const [veiculo, setVeiculo] = useState()

  useEffect(() => {
    bucsarViagemPorId(props.id)
    .then((resp) => {
      setVeiculo(resp.data.veiculo.placa)
    }).catch(err => console.log(err))
  })


  return (
    <div class="mt-5 grid grid-cols-6">
    <div>
      <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">{props.label}</label>
      <div class="grid mt-2">
        <input class="block
         w-40 rounded-md border-0 
        py-1.5 text-gray-900 shadow-sm
         ring-1 ring-inset ring-gray-300 placeholder:text-gray-400
         focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 text-center" value={veiculo}/>
      </div>
    </div>
    </div>
  )
}

export function CampoMostrarOrigem(props) {


  const [tipo, setTipoVeiculo] = useState()

  useEffect(() => {
    bucsarViagemPorId(props.id)
    .then((resp) => {
      setTipoVeiculo(resp.data.veiculo.tipoDoVeiculo)
    }).catch(err => console.log(err))
  })


  return (
    <div class="mt-5 grid grid-cols-6">
    <div>
      <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">{props.label}</label>
      <div class="grid mt-2">
        <input class="block
         w-40 rounded-md border-0 
        py-1.5 text-gray-900 shadow-sm
         ring-1 ring-inset ring-gray-300 placeholder:text-gray-400
         focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 text-center" value={tipo}/>
      </div>
    </div>
    </div>
  )
}

export function CampoMostrarTipo(props) {
  const [nome, setOrigem] = useState()

  useEffect(() => {
    bucsarViagemPorId(props.id)
    .then((resp) => {
      setOrigem(resp.data.origem.nome)
    }).catch(err => console.log(err))
  })


  return (
    <div class="mt-5 grid grid-cols-6">
    <div>
      <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">{props.label}</label>
      <div class="grid mt-2">
        <input class="block
         w-40 rounded-md border-0 
        py-1.5 text-gray-900 shadow-sm
         ring-1 ring-inset ring-gray-300 placeholder:text-gray-400
         focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 text-center" value={nome}/>
      </div>
    </div>
    </div>
  )
}
