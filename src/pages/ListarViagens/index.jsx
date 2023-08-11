import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ListaViagemPassadas from "../../components/ListarViagens";
import Loading from "../../components/Loading";
import { bucsarViagemPorData } from "../../service";

export default function ListarViagem() {
  const [motorista, setMotorista] = useState([]);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();
  const [dataFormatada, setDataFormatada] = useState();

  useEffect(() => {
    bucsarViagemPorData(dateFormat(data))
      .then((response) => {
        setMotorista(response.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [data]);

  const dateFormatAux = (data) => {
  
    if (data != null){
    var date = new Date(data),
      ano = date.getFullYear(),
      mes = "" + (date.getMonth() + 1),
      dia = "" + date.getDate();

    if (mes.length < 2) {
      mes = "0" + mes;
    }
    if (dia.length < 2) {
      dia = "0" + dia;
    }

    return [ano, mes, dia].join("-");
  } else {
    const atual = dateDefault();
    return atual;
  }

  };

  const dateFormat = (data) => {
    let formataAnoMesDia = dateFormatAux(data);
    return formataAnoMesDia;
  };

  const dateDefault = () => {
    var date = new Date(),
      ano = date.getFullYear(),
      mes = "" + (date.getMonth() + 1),
      dia = "" + date.getDate();

    if (mes.length < 2) {
      mes = "0" + mes;
    }
    if (dia.length < 2) {
      dia = "0" + dia;
    }

    return [ano, mes, dia].join("-");
  };


  return (
    <>
      <h2>Relatorios</h2>

      <div className="overflow-hidden inline-block min-w-full py-2 sm:px-6 ">
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
          dateFormat="dd-MM-yyyy"
        />
      </div>

      <ListaViagemPassadas listaDeViagens={motorista} />
      {loading && <Loading />}
    </>
  );
}
