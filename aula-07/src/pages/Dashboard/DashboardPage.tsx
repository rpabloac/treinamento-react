import { useState, useEffect } from 'react';
import ConsultaItemPage from './ConsultaItem';
import { get, post } from '../../api.js'

function DashboardPage({ paciente }) {
    const API_URL = import.meta.env.VITE_API_URL;

    const [exames, setExames] = useState([]);
    const [consultas, setConsultas] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const responseExame = get(`${API_URL}/exames?pacienteId=${paciente.id}`);
                const responseConsultas = get(`${API_URL}/consultas?pacienteId=${paciente.id}`);

                setExames(responseExame.data);
                setConsultas(responseConsultas.data);
            }
            catch(error) {
                console.log('ERRO', error);
            }
        }

        fetchData();
    }, []);

    return (
        <>
        <div>
            <div>
                <h1>Bem-vindo, {paciente.nome}</h1>
                {consultas.length > 0 && <h2>Você tem {consultas.length} consultas</h2>}
                {exames.length > 0 && <h2>Você tem {exames.length} exames</h2>}
            </div>
        </div>

        <div>
            <div>
                <h1>Consultas Recentes</h1>
                <ul>
                    {consultas.map((consulta, index) => {
                        const  {id, medico, especialidade, status, data} = consulta;
                        return (
                            <ConsultaItemPage
                                idx={id}
                                especialidade={especialidade}
                                medico={medico}
                                data={data}
                                status={status}
                            />
                        )
                    })}
                </ul>
            </div>
        </div>
        </>
    );
}

export default DashboardPage;