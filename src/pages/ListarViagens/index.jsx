import { useEffect, useState } from "react";
import { bucsarViagem } from "../../service";
import ListaViagemPassadas from "../../components/ListarViagens";

export default function ListarViagem() {
  const [motorista, setMotorista] = useState([]);

  useEffect(() => {
    bucsarViagem().then((response) => {
        setMotorista(response.data);
      })
      .catch((err) => console.log(err));
  }, []);


  return (
    <>
      <h2>Relatorios</h2>

      <ListaViagemPassadas listaDeViagens={motorista} />
    </>
  );
}
