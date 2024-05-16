import Membro from "../Membro";
import "./Time.css";

const Time = (props) => {
  return (
    props.membros.length > 0 && (
      <section
        className="time"
        style={{
          backgroundColor: props.corPrimaria,
          backgroundImage: "url(/images/fundo.png)",
        }}
      >
        <h3 style={{ borderColor: props.corSecundaria }}>{props.nome}</h3>
        <div className="membros">
          {props.membros.map((membro, indice) => {
            return (
              <Membro
                key={indice}
                nome={membro.nome}
                posicao={membro.posicao}
                imagem={membro.imagem}
                cor={props.corSecundaria}
              />
            );
          })}
        </div>
      </section>
    )
  );
};

export default Time;
