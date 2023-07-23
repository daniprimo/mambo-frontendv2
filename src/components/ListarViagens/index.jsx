import { useNavigate } from "react-router-dom";

export default function ListaViagemPassadas(props) {

    const navegar = useNavigate();

    const clicou = (e) => { 
        console.log(e)
        navegar("/consultaViagem")
     }
  
    return (
      <div>
        <ul class="divide-y divide-gray-100">
          {props.listaDeViagens.map((viagem) => {
            return (
              <>
                <li
                  class="flex justify-between gap-x-6
           py-5 ease-linear transform hover:scale-105
            transition duration-500 bg-red-900 px-6 py-2 m-5 inline rounded-t-2xl"
                  onClick={() => clicou(viagem.id)}
                >
                  <div class="flex gap-x-4">
                    <div class="min-w-0 flex-auto">
                      <p class="text-sm font-semibold leading-6 text-white">
                        {viagem.veiculo.placa}
                      </p>
                      <p class="mt-1 truncate text-xs leading-5 text-white">
                        Motorista {viagem.motorista.nome}
                      </p>
                      <div class="mt-1 flex items-center gap-x-1.5">
                        <div class="flex-none rounded-full bg-blue-500/20 p-1">
                          <div class="h-1.5 w-1.5 rounded-full bg-blue-500"></div>
                        </div>
                        <p class="text-xs leading-5 text-white">{viagem.status}</p>
                      </div>
                    </div>
                  </div>
  
                  <div class="hidden sm:flex sm:flex-col">
                    <p class="text-sm font-semibold leading-6 text-white">
                    Origem
                    </p>
                    
                    <p class="text-sm leading-6 text-white">{viagem.origem.nome}</p>
                  </div>
  
  
                  <div class="sm:flex sm:flex-col">
                    <p class="text-sm font-semibold leading-6 text-white">
                    Destino
                    </p>
                    {viagem.lojas.map(loja => {
                      return (
                        <>
                        <p class="text-sm leading-6 text-white">{loja.loja.descricaoLoja}</p>
                        
                        </>
                      )
                    })}
                  </div>
                </li>
              </>
            );
          })}
        </ul>
      </div>
    );
  }
  