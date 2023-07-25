import React, { useEffect, useState } from "react";
import { bucsarViagemPorId } from "../../../service";

export default function TabelaDoConsulta(props) {
  const [lojas, setLojas] = useState([]);
  const [totalPallet, setTotalPallet] = useState();

  useEffect(() => {
    bucsarViagemPorId(props.id).then((resp) => {
      setLojas(resp.data.lojas);
      console.log(lojas);
    });
  }, []);


  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 ">
          <div className="overflow-hidden">
            <table className="min-w-full text-left text-sm font-light">
              <thead className="border-b font-medium dark:border-neutral-500">
                <tr>
                  <th scope="col" className="px-6 py-4 text-center">
                    LOJA
                  </th>
                  <th scope="col" className="px-6 py-4 text-center">
                    FLV
                  </th>
                  <th scope="col" className="px-6 py-4 text-center">
                    MERCEARIA
                  </th>
                  <th scope="col" className="px-6 py-4 text-center">
                    FRIOZEM
                  </th>
                  <th scope="col" className="px-6 py-4 text-center">
                    BAG
                  </th>
                  <th scope="col" className="px-6 py-4 text-center">
                    TOTAL
                  </th>
                </tr>
              </thead>
              <tbody>
                {lojas.map((resp) => {
                  const totalPallets = parseInt(resp.quantidadeDePalletFlv)+parseInt(resp.quantidadeDePalletMercearia)+parseInt(resp.quantidadeDePalletFriozem)
                  props.pegarTotalPallet(parseInt(resp.quantidadeDePalletFlv)+parseInt(resp.quantidadeDePalletMercearia)+parseInt(resp.quantidadeDePalletFriozem))
                  return (
                    <>
                      <tr className="border-b dark:border-neutral-500 text-center">
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          {resp.loja.nomeLoja}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          {resp.quantidadeDePalletFlv}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          {resp.quantidadeDePalletMercearia}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          {resp.quantidadeDePalletFriozem}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          0
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          {totalPallets}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          <button>Botoes de excluir / alterar</button>
                        </td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
