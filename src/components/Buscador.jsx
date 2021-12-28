import { useEffect, useState } from "react";
import { data } from "../data/data";
import Detalle from "./Detalle";
import './Buscador.css';

const Buscador = () => {
    
    const [empleados, setEmpleados] = useState([]);
  const [tablaEmpleados, setTablaEmpleados] = useState([]);
  const [busqueda, setBusqueda] = useState("");

  const peticionGet = () => {
    setEmpleados(data);
    setTablaEmpleados(data);
  };

  const handleChange = (e) => {
    setBusqueda(e.target.value);
    filtrar(e.target.value);
  };

  const filtrar = (patente) => {
    // eslint-disable-next-line array-callback-return
    let resultadosBusqueda = tablaEmpleados.filter((elemento) => {
      if (
        elemento.Patente
          .toString()
          .toLowerCase()
          .includes(patente.toLowerCase()) 
      ) {
        return elemento;
      }
    });
    setEmpleados(resultadosBusqueda);
  };

  useEffect(() => {
    peticionGet();
  }, []);
    
    console.log(empleados.length);
    return (
      <div className="container">
        <div className="buscador__logo">
          <img
            src="https://static.wixstatic.com/media/4320bf_4c5a5937aa2d4f37bafbde2dfac3565b~mv2.png/v1/crop/x_0,y_214,w_800,h_369/fill/w_420,h_198,al_c,q_85,usm_0.66_1.00_0.01/fpblanco.webp"
            alt="img"
          />
        </div>

        <h2>Buscador de patentes</h2>
        
        <form>
          <div className="buscador__input">
            <input type="text" value={busqueda} onChange={handleChange} />
            <i className="fas fa-search"></i>
          </div>
        </form>

        <table>
          <thead>
            <tr>
              <th>Patente</th>

              <th>Modelo</th>
            </tr>
          </thead>
          <tbody>
            {empleados.map((item) => (
              <tr key={item.Patente}>
                <td>{item.Patente}</td>

                <td>{item.Modelo}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {empleados.length === 1 ? <Detalle empleado={empleados[0]} /> : null}
        {empleados.length === 0 ? <h2>No se ha encontrado vehiculo</h2> : null}
      </div>
    );
}

export default Buscador
