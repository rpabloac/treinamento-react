import { useState } from "react";
import { usePaciente } from "../../contexts/PacienteContext";
import ConsultasTable from "./ConsultasTable";

function ConsultasPage() {
    const { dados, atualizarConsultas } = usePaciente();
    const { consultas } = dados;
    const [carregando, setCarregando] = useState(false);

    const handleAtualizar = async () => {
        setCarregando(true);
        await atualizarConsultas();
        setCarregando(false);
    };

    return (
        <div>
            <h1>Consultas</h1>
            <button onClick={handleAtualizar} disabled={carregando}>
                {carregando ? 'Atualizando...' : 'Atualizar dados'}
            </button>
            {
                consultas && consultas.length > 0 ? (
                <ConsultasTable consultas={consultas} />
                ) : (
                <p>Não há consultas disponíveis.</p>
                )
            }
        </div>
    );
}

export default ConsultasPage;