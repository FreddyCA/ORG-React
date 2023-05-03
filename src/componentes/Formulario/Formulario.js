import { useState } from "react";
import "./Formulario.css";
import CampoTexto from "../CampoTexto";
import ListaOpciones from "../ListaOpciones";
import BotonForm from "../BotonForm";

const Formulario = (props) => {
  const [nombre, actualizarNombre] = useState("");
  const [puesto, actualizarPuesto] = useState("");
  const [foto, actualizarFoto] = useState("");
  const [equipo, actualizarEquipo] = useState("");

  const {registrarColaborador} = props

  const manejarEnvio = (e) => {
    e.preventDefault();
    console.log("Manejar el envío");
    let datosAEnviar = {
      nombre,
      puesto,
      foto,
      equipo
    };
    registrarColaborador(datosAEnviar)
  };

  return (
    <section className="formulario">
      <form onSubmit={manejarEnvio}>
        <h2>Rellena el formulario para agregar el colaborador</h2>
        <CampoTexto
          titulo="Nombre"
          placeholder="Ingresar nombre"
          required={true}
          valor={nombre}
          actualizarValor={actualizarNombre}
        ></CampoTexto>

        <CampoTexto
          titulo="Puesto"
          placeholder="Ingresar puesto"
          required
          valor={puesto}
          actualizarValor={actualizarPuesto}
        ></CampoTexto>

        <CampoTexto
          titulo="Foto"
          placeholder="Ingresar enlace de foto"
          required
          valor={foto}
          actualizarValor={actualizarFoto}
        ></CampoTexto>

        <ListaOpciones
          valor={equipo}
          actualizarEquipo={actualizarEquipo}
          equipos={props.equipos}
        ></ListaOpciones>
        <BotonForm texto="Crear colaborador">Crear</BotonForm>
      </form>
    </section>
  );
};
export default Formulario;
