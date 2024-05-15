import { useState } from "react";
import Banner from "./components/Banner";
import Formulario from "./components/Formulario";
import Time from "./components/Time";
import Rodape from "./components/Rodape";

function App() {
  const times = [
    { nome: "Vôlei", corPrimaria: "#fff5d9", corSecundaria: "#ffba05" },
    { nome: "Basquete", corPrimaria: "#ffeedf", corSecundaria: "#ff8a29" },
    {
      nome: "League of Legends",
      corPrimaria: "#fde7e8",
      corSecundaria: "#e06b69",
    },
  ];

  const [membros, setMembros] = useState([]);

  const aoNovoMembroAdicionado = (membro) => {
    setMembros([...membros, membro]);
  };

  return (
    <div className="App">
      <Banner />
      <Formulario
        times={times.map((time) => time.nome)}
        aoMembroCadastrado={(membro) => aoNovoMembroAdicionado(membro)}
      />

      {times.map((time) => (
        <Time
          key={time.nome}
          nome={time.nome}
          corPrimaria={time.corPrimaria}
          corSecundaria={time.corSecundaria}
          membros={membros.filter((membro) => membro.time === time.nome)}
        />
      ))}

      <Rodape />
    </div>
  );
}

export default App;
