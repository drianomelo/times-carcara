import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";

const Formulario = () => {
  const times = ["Vôlei", "Basquete", "League of Legends"];

  const aoSalvar = (evento) => {
    evento.preventDefault();
    console.log("foi");
  };

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do Atleta</h2>
        <CampoTexto
          obrigatorio={true}
          label="Nome"
          placeholder="Digite seu nome"
        />
        <CampoTexto
          obrigatorio={true}
          label="Posição"
          placeholder="Digite sua Posição"
        />
        <CampoTexto
          obrigatorio={true}
          label="Imagem"
          placeholder="Digite o endereço da imagem"
        />
        <ListaSuspensa obrigatorio={true} label="Time" itens={times} />
        <Botao>Criar Card</Botao>
      </form>
    </section>
  );
};

export default Formulario;
