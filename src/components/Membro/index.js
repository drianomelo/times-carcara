import "./Membro.css";

const Membro = ({ nome, imagem, posicao, cor }) => {
  return (
    <div className="membro">
      <div className="cabecalho" style={{ backgroundColor: cor }}>
        <img src={imagem} alt={nome} />
      </div>
      <div className="rodape-m">
        <h4>{nome}</h4>
        <h5>{posicao}</h5>
      </div>
    </div>
  );
};

export default Membro;
