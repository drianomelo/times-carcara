import { FaRegTrashAlt } from "react-icons/fa";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import "./Membro.css";

const Membro = ({
  nome,
  imagem,
  posicao,
  cor,
  aoDeletar,
  id,
  favorito,
  aoFavoritar,
}) => {
  return (
    <div className="membro">
      <FaRegTrashAlt
        size={20}
        className="deletar"
        onClick={() => aoDeletar(id)}
      ></FaRegTrashAlt>
      <div className="cabecalho" style={{ backgroundColor: cor }}>
        <img src={imagem} alt={nome} />
      </div>
      <div className="rodape-m">
        <h4>{nome}</h4>
        <h5>{posicao}</h5>
        <div className="favoritar">
          {favorito ? (
            <AiFillHeart onClick={() => aoFavoritar(id)} color="#FF0000" />
          ) : (
            <AiOutlineHeart onClick={() => aoFavoritar(id)} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Membro;
