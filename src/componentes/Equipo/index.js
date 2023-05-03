import "./Equipo.css";
import Colaborador from "../Colaborador";
const Equipo = (props) => {
  const { colorPrimario, colorSecundario, titulo } = props.datos;

  const {colaboradores} = props

  const estiloTitulo = { borderColor: colorPrimario };

  return (
    <section className="equipo" style={{ backgroundColor: colorSecundario }}>
      <h3 style={estiloTitulo}>{titulo}</h3>
      <div className="colaboradores">
        {
          colaboradores.map((colaborador, index) => <Colaborador datos={colaborador} key={index}></Colaborador>)
        }
      </div>
    </section>
  );
};

export default Equipo;
