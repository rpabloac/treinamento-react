import ExamesTable from "./ExamesTable";
import { usePaciente } from "../../contexts/PacienteContext";
import { useState } from "react";

function ExamesPage() {

  const { dados, atualizarExames } = usePaciente();
  const { exames } = dados;
  const [carregando, setCarregando] = useState(false);

  const handleAtualizar = async () => {
    setCarregando(true);
    await atualizarExames();
    setCarregando(false);
  };

    return (
        <>
        <h1>Exames</h1>
        <button onClick={handleAtualizar} disabled={carregando}>
            {carregando ? 'Atualizando...' : 'Atualizar dados'}
        </button>
        {
            exames && exames.length > 0 ? (<ExamesTable exames={exames} /> ) : ( <p>Não há exames disponíveis.</p> )
        }
        </>
    );
}

export default ExamesPage;