import React, { useEffect, useState } from 'react'
import { bucsarViagemPorId, buscarMotorista } from '../../../service'


export function CampoInputValueTexto(props){


  return (
    <div class="mt-5 grid grid-cols-6">
    <div>
      <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">{props.label}</label>
      <div class="grid mt-2">
        <input class="block
         w-40 rounded-md border-0 
        py-1.5 text-gray-900 shadow-sm
         ring-1 ring-inset ring-gray-300 placeholder:text-gray-400
         focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 text-center" value={props.conteudo}/>
      </div>
    </div>
    </div>
  )
}
