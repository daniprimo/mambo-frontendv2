import { useEffect, useState } from "react";
import { buscarTodasLoja } from "../../../service";

export default function InputTabelaEntregas(props) {
    
  
    const [loja, setLoja] = useState([])
  
    const [entrega, setEntrega] = useState({
      lojas: "",
      palletFlv: 0,
      palletMercearia: 0,
      palletFriozem: 0,
    });
  
    async function submit() {
        props.addListaEntregas(entrega);      
    }
  
    useEffect(() => {
      buscarTodasLoja().then(resp => setLoja(resp.data))
      return () => {
        clearTimeout(2000)
      }
    }, [loja])
  
    
  
  
  
  
    const construirEntrega = (e) => {
      if (e.target.getAttribute("name") == "fLoja") {
        setEntrega({
          lojas: e.target.value,
          palletFlv: entrega.palletFlv == "" ? 0 : parseInt(entrega.palletFlv),
          palletMercearia: entrega.palletMercearia == "" ? 0 : parseInt(entrega.palletMercearia),
          palletFriozem: entrega.palletFriozem == "" ? 0 : parseInt(entrega.palletFriozem),
        });
      } else if (e.target.getAttribute("name") == "fFlv") {
        setEntrega({
          lojas: entrega.lojas,
          palletFlv: parseInt(e.target.value),
          palletMercearia: entrega.palletMercearia == "" ? 0 : parseInt(entrega.palletMercearia),
          palletFriozem: entrega.palletFriozem == "" ? 0 : parseInt(entrega.palletFriozem),
        });
      } else if (e.target.getAttribute("name") == "fMercearia") {
        setEntrega({
          lojas: entrega.lojas,
          palletFlv: entrega.palletFlv == "" ? 0 : parseInt(entrega.palletFlv),
          palletMercearia: parseInt(e.target.value),
          palletFriozem: entrega.palletFriozem = "" ? 0 : parseInt(entrega.palletFriozem),
        });
      } else if (e.target.getAttribute("name") == "fFriozem") {
        setEntrega({
          lojas: entrega.lojas,
          palletFlv: entrega.palletFlv == "" ? 0 : parseInt(entrega.palletFlv),
          palletMercearia: entrega.palletMercearia == "" ? 0 : parseInt(entrega.palletMercearia),
          palletFriozem: parseInt(e.target.value),
        });
      } 
    }
  
  
    return (
      <div>
        <div>
          <h2>Adicionar entrega:</h2>
          <div>
            <form>
              <select
                className="block w-full rounded-md
                        border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset
                         ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset
                          focus:ring-indigo-600 sm:text-sm sm:leading-6"
  
                name="fLoja"
                value={entrega.lojas}
                placeholder="Loja"
                onChange={(e) => construirEntrega(e)}
              >
                <option>{""}</option>
  
                {loja.map((loja, i) => {
                  return(
                    <option key={i}>{loja.nomeLoja}</option>
                  )
                })}
  
              </select>
              <label>FLV</label>
              <input
                className="block w-full rounded-md
                        border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset
                         ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset
                          focus:ring-indigo-600 sm:text-sm sm:leading-6"
  
                name="fFlv"
                value={entrega.palletFlv}
                placeholder="FLV"
                onChange={(e) => construirEntrega(e)}
              />
              <label>Mercearia</label>
              <input
                className="block w-full rounded-md
                border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset
                ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset
                focus:ring-indigo-600 sm:text-sm sm:leading-6"
                
                name="fMercearia"
                value={entrega.palletMercearia}
                placeholder="Mercearia"
                onChange={(e) => construirEntrega(e)}
                />
                <label>Friozem</label>
              <input
                className="block w-full rounded-md
                        border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset
                         ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset
                          focus:ring-indigo-600 sm:text-sm sm:leading-6"
  
                name="fFriozem"
                value={entrega.palletFriozem}
                placeholder="Friozem"
                onChange={(e) => construirEntrega(e)}
              />
              <label>Bag</label>
              <input
                className="block w-full rounded-md
                        border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset
                         ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset
                          focus:ring-indigo-600 sm:text-sm sm:leading-6"
  
                name="fBag"
                value={"5"}
                placeholder="Bag"
                onChange={(e) => construirEntrega(e)}
              />
              <button type="button" onClick={() => submit()}>
                Adicionar
              </button>
            </form>
            
          </div>
        </div>
        <div></div>
      </div>
    );
  }
  