import { useEffect, useState } from "react";
import { buscarMotorista } from "../../../service";

export default function InputMotorista(props){

  
    const [motorista, setMotorista] = useState([]);
  
    useEffect(() => {
     buscarMotorista()
     .then(response => setMotorista(response.data))
     .catch(err => console.log(err))
    },[]) 
  
    const enviarParaOPai = r => {
      props.puxarMotorista(r)
    }
  
  
    return (
          <div className="sm:col-span-3">
            <label className="block text-sm font-medium leading-6 
            text-gray-900">{props.nomeDoCampo}</label>
            <div className="mt-2">
              <select type="text" className="block w-full rounded-md
               border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset
                ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset
                 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                 onChange={e => enviarParaOPai(e.target.value)}>
                <option value=""></option>
                {motorista.map((mot, i) => {
                  return (
                    <option key={i} value={mot.nome}>{mot.nome}</option>
                  )
                })}
              </select>
            </div>
          </div>
    )
  }