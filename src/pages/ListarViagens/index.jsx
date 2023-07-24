import { useEffect, useState } from "react";
import { bucsarViagem } from "../../service";
import ListaViagemPassadas from "../../components/ListarViagens";
import Loading from "../../components/Loading";

export default function ListarViagem() {
  const [motorista, setMotorista] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    bucsarViagem().then((response) => {
        setMotorista(response.data);
        setLoading(false)
      })
      .catch((err) => console.log(err));
  }, []);


  return (
    <>
      <h2>Relatorios</h2>

      <ListaViagemPassadas listaDeViagens={motorista} />
      {loading && <Loading />}
    </>
  );
}
