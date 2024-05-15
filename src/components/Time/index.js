import Membro from "../Membro";
import "./Time.css";

const Time = (props) => {
  const css = { backgroundColor: props.corPrimaria };
  return (
    props.membros.length > 0 && (
      <section className="time" style={css}>
        <h3 style={{ borderColor: props.corSecundaria }}>{props.nome}</h3>
        <div className="membros">
          {props.membros.map((membro) => (
            <Membro
              key={membro.nome}
              nome={membro.nome}
              posicao={membro.posicao}
              imagem={membro.imagem}
              cor={props.corSecundaria}
            />
          ))}
        </div>
      </section>
    )
  );
};

export default Time;
