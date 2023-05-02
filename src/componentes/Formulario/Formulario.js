import "./Formulario.css";
import CampoTexto from "../CampoTexto";
import ListaOpciones from "../ListaOpciones";
import BotonForm from "../BotonForm";

const Formulario = () => {

  const manejarEnvio = (e) => {
    e.preventDefault()
    console.log("Manejar el envío")
  }

  return (
    <section className="formulario">
      <form onSubmit={manejarEnvio}>
        <h2>Rellena el formulario para agregar el colaborador</h2>
        <CampoTexto titulo="Nombre" placeholder="Ingresar nombre" required={true}></CampoTexto>
        <CampoTexto titulo="Puesto" placeholder="Ingresar puesto" required></CampoTexto>
        <CampoTexto titulo="Foto" placeholder="Ingresar enlace de foto"></CampoTexto>
        <ListaOpciones></ListaOpciones>
        <BotonForm texto='Crear colaborador'>Crear</BotonForm>
      </form>
    </section>
  );
};
export default Formulario;
