import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Banner from "./components/Banner";
import Formulario from "./components/Formulario";
import Time from "./components/Time";
import Rodape from "./components/Rodape";

function App() {
  const [times, setTimes] = useState([
    { id: uuidv4(), nome: "Vôlei", cor: "#ffba05" },
    { id: uuidv4(), nome: "Basquete", cor: "#ff8a29" },
    {
      id: uuidv4(),
      nome: "League of Legends",
      cor: "#e06b69",
    },
  ]);

  const inicial = [
    {
      id: uuidv4(),
      nome: "Adriano Melo",
      posicao: "Ponteiro",
      imagem: "https://github.com/drianomelo.png",
      time: "Vôlei",
      favorito: false,
    },
  ];

  const [membros, setMembros] = useState(inicial);

  const aoNovoMembroAdicionado = (membro) => {
    setMembros([...membros, { ...membro, id: uuidv4() }]);
  };

  function deletarMembro(id) {
    setMembros(membros.filter((membro) => membro.id !== id));
  }

  function mudarCorDoTime(cor, id) {
    setTimes(
      times.map((time) => {
        if (time.id === id) {
          time.cor = cor;
        }
        return time;
      })
    );
  }

  function cadastrarTime(novoTime) {
    setTimes([...times, { ...novoTime, id: uuidv4() }]);
  }

  function resolverFavorito(id) {
    setMembros(
      membros.map((membro) => {
        if (membro.id === id) {
          membro.favorito = !membro.favorito;
        }
        return membro;
      })
    );
  }

  return (
    <div className="App">
      <Banner />
      <Formulario
        cadastrarTime={cadastrarTime}
        times={times.map((time) => time.nome)}
        aoMembroCadastrado={(membro) => aoNovoMembroAdicionado(membro)}
      />
      {times.map((time) => (
        <Time
          key={time.nome}
          id={time.id}
          nome={time.nome}
          cor={time.cor}
          membros={membros.filter((membro) => membro.time === time.nome)}
          aoDeletar={deletarMembro}
          mudarCor={mudarCorDoTime}
          aoFavoritar={resolverFavorito}
        />
      ))}

      <Rodape />
    </div>
  );
}

export default App;
