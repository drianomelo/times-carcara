import Botao from "../Botao";
import Campo from "../Campo";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";
import { useState } from "react";

const Formulario = (props) => {
  const [nome, setNome] = useState("");
  const [posicao, setPosicao] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");
  const [nomeTime, setNomeTime] = useState("");
  const [corTime, setCorTime] = useState("");

  const aoSalvar = (evento) => {
    evento.preventDefault();
    props.aoMembroCadastrado({
      nome,
      posicao,
      imagem,
      time,
    });
    setNome("");
    setPosicao("");
    setImagem("");
  };

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do Atleta</h2>
        <Campo
          obrigatorio={true}
          type="text"
          label="Nome"
          placeholder="Digite seu nome"
          valor={nome}
          aoAlterado={(valor) => setNome(valor)}
        />
        <Campo
          obrigatorio={true}
          type="text"
          label="Posição"
          placeholder="Digite sua Posição"
          valor={posicao}
          aoAlterado={(valor) => setPosicao(valor)}
        />
        <Campo
          obrigatorio={true}
          type="text"
          label="Imagem"
          placeholder="Digite o endereço da imagem"
          valor={imagem}
          aoAlterado={(valor) => setImagem(valor)}
        />
        <ListaSuspensa
          obrigatorio={true}
          label="Time"
          itens={props.times}
          valor={time}
          aoAlterado={(valor) => setTime(valor)}
        />
        <Botao>Criar Card</Botao>
      </form>
      <form
        onSubmit={(evento) => {
          evento.preventDefault();
          props.cadastrarTime({ nome: nomeTime, cor: corTime });
        }}
      >
        <h2>Preencha os dados para criar um Time</h2>
        <Campo
          obrigatorio
          type="text"
          label="Nome"
          placeholder="Digite o nome do Time"
          valor={nomeTime}
          aoAlterado={(valor) => setNomeTime(valor)}
        />
        <Campo
          obrigatorio
          type="color"
          label="Cor"
          placeholder="Digite a cor do time"
          valor={corTime}
          aoAlterado={(valor) => setCorTime(valor)}
        />

        <Botao>Criar um novo time</Botao>
      </form>
    </section>
  );
};

export default Formulario;
