import { useEffect, useState } from "react";
import { bucsarViagem } from "../../service";
import ListaViagemPassadas from "../../components/ListarViagens";
import Loading from "../../components/Loading";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function ListarViagem() {
  const [motorista, setMotorista] = useState([]);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();

  useEffect(() => {
    bucsarViagem()
      .then((response) => {
        setMotorista(response.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <h2>Relatorios</h2>

      <div>
        <DatePicker
          selected={data}
          onChange={(date) => setData(date)}
          className="block
         w-20 rounded-md border-0 
        py-1.5 text-gray-900 shadow-sm
         ring-1 ring-inset ring-gray-300 placeholder:text-gray-400
         focus:ring-2 focus:ring-inset focus:ring-indigo-600
          sm:text-sm sm:leading-6 text-center"
          placeholderText="Data"
        />
      </div>

      <ListaViagemPassadas listaDeViagens={motorista} />
      {loading && <Loading />}
    </>
  );
}
