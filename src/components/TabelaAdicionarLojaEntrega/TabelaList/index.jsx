export default function ListaTabelaEntregas(props) {


    return (
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
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
                  {props.listaDasLojas.map((l) => {
                    const capacidadeTotal = parseFloat(l.palletFlv)+parseFloat(l.palletMercearia)+parseFloat(l.palletFriozem)
                    return (
                      <>
                        <tr className="border-b dark:border-neutral-500">
                          <td className="whitespace-nowrap px-6 py-4 font-medium">
                            {l.lojas}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4 font-medium">
                            {l.palletFlv}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4 font-medium">
                            {l.palletMercearia}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4 font-medium">
                            {l.palletFriozem}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4 font-medium">
                            5
                          </td>
                          <td className="whitespace-nowrap px-6 py-4 font-medium">
                            {capacidadeTotal}
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
  