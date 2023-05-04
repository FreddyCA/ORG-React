import { useState } from "react";
import "./Formulario.css";
import Campo from "../Campo";
import ListaOpciones from "../ListaOpciones";
import BotonForm from "../BotonForm";

const Formulario = (props) => {
  const [nombre, actualizarNombre] = useState("");
  const [puesto, actualizarPuesto] = useState("");
  const [foto, actualizarFoto] = useState("");
  const [equipo, actualizarEquipo] = useState("");

  const [titulo, actualizarTitulo] = useState("");
  const [color, actualizarColor] = useState("");

  const { registrarColaborador, crearEquipo } = props;

  const manejarEnvio = (e) => {
    e.preventDefault();
    let datosAEnviar = {
      nombre,
      puesto,
      foto,
      equipo,
    };
    registrarColaborador(datosAEnviar);
  };

  const manejarNuevoEquipo = (e) => {
    e.preventDefault()
    crearEquipo({titulo, colorPrimario: color})
  }

  return (
    <section className="formulario">
      <form onSubmit={manejarEnvio}>
        <h2>Rellena el formulario para agregar el colaborador</h2>
        <Campo
          titulo="Nombre"
          placeholder="Ingresar nombre"
          required={true}
          valor={nombre}
          actualizarValor={actualizarNombre}
        ></Campo>

        <Campo
          titulo="Puesto"
          placeholder="Ingresar puesto"
          required
          valor={puesto}
          actualizarValor={actualizarPuesto}
        ></Campo>

        <Campo
          titulo="Foto"
          placeholder="Ingresar enlace de foto"
          required
          valor={foto}
          actualizarValor={actualizarFoto}
        ></Campo>

        <ListaOpciones
          valor={equipo}
          actualizarEquipo={actualizarEquipo}
          equipos={props.equipos}
        ></ListaOpciones>
        <BotonForm texto="Crear colaborador">Crear</BotonForm>
      </form>

      <form onSubmit={manejarNuevoEquipo}>
        <h2>Rellena el formulario para agregar el Equipo</h2>
        <Campo
          titulo="Título"
          placeholder="Ingresar título"
          required={true}
          valor={titulo}
          actualizarValor={actualizarTitulo}
        ></Campo>

        <Campo
          titulo="Color"
          placeholder="Ingresar el color en Hex."
          required
          valor={color}
          actualizarValor={actualizarColor}
          type="color"
        ></Campo>

        <BotonForm>Registrar Equipo</BotonForm>
      </form>
    </section>
  );
};
export default Formulario;
