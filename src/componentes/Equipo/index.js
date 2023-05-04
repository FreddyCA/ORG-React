import "./Equipo.css";
import Colaborador from "../Colaborador";
import hexToRgba from 'hex-to-rgba';
const Equipo = (props) => {
  const { colorPrimario, titulo, id } = props.datos;

  const { colaboradores, eliminarColaborador, actualizarColor, like} = props;

  const estiloTitulo = { borderColor: colorPrimario };

  return (
    <>
      {colaboradores.length > 0 && (
        <section
          className="equipo"
          style={{ backgroundColor: hexToRgba(colorPrimario, 0.35) }}
        >
          <input
            className="inputColor"
            type="color"
            value={colorPrimario}
            onChange={(e)=> {
              actualizarColor(e.target.value, id)
            }}
          ></input>

          <h3 style={estiloTitulo}>{titulo}</h3>
          <div className="colaboradores">
            {colaboradores.map((colaborador, index) => (
              <Colaborador
                datos={colaborador}
                key={index}
                colorPrimario={colorPrimario}
                eliminarColaborador={eliminarColaborador}
                like={like}
              ></Colaborador>
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default Equipo;
