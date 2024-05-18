import Membro from "../Membro";
import "./Time.css";
import hexToRgba from "hex-to-rgba";

const Time = (props) => {
  return (
    props.membros.length > 0 && (
      <section
        className="time"
        style={{
          backgroundColor: hexToRgba(props.cor, 0.3),
          backgroundImage: "url(/images/fundo.png)",
        }}
      >
        <input
          value={props.cor}
          onChange={(evento) => props.mudarCor(evento.target.value, props.id)}
          type="color"
          className="input-cor"
        />
        <h3 style={{ borderColor: props.cor }}>{props.nome}</h3>
        <div className="membros">
          {props.membros.map((membro, indice) => {
            return (
              <Membro
                key={indice}
                id={membro.id}
                favorito={membro.favorito}
                nome={membro.nome}
                posicao={membro.posicao}
                imagem={membro.imagem}
                cor={props.cor}
                aoDeletar={props.aoDeletar}
                aoFavoritar={props.aoFavoritar}
              />
            );
          })}
        </div>
      </section>
    )
  );
};

export default Time;
