import React from "react";

export default function TabelaDoConsulta(props) {
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 ">
          <div className="overflow-hidden">
            <table className="min-w-full text-left text-sm font-light">
              <thead className="border-b font-medium dark:border-neutral-500">
                <tr>
                  <th scope="col" className="px-6 py-4">
                    LOJA
                  </th>
                  <th scope="col" className="px-6 py-4">
                    FLV
                  </th>
                  <th scope="col" className="px-6 py-4">
                    MERCEARIA
                  </th>
                  <th scope="col" className="px-6 py-4">
                    FRIOZEM
                  </th>
                  <th scope="col" className="px-6 py-4">
                    BAG
                  </th>
                  <th scope="col" className="px-6 py-4">
                    TOTAL
                  </th>
                </tr>
              </thead>
              <tbody>
                      <tr className="border-b dark:border-neutral-500">
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          M5
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          1
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          0
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          5
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          0
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                            0
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                            <button>Botoes de excluir / alterar</button>
                        </td>
                      </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
