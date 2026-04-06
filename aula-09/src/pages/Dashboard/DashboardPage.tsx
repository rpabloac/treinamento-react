import { useState, useEffect, useContext } from 'react';
import ConsultaItemPage from './ConsultaItem';
import PacienteContext from '../../contexts/PacienteContext';
import { get, post } from '../../services/api.js';

function DashboardPage() {
    const { paciente } = useContext(PacienteContext);
    const [exames, setExames] = useState([]);
    const [consultas, setConsultas] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const responseExame = await get(`/exames?pacienteId=${paciente.id}`);
                const responseConsultas = await get(`consultas?pacienteId=${paciente.id}`);
                                
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
        {consultas && exames &&
        <div>
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
                                    idx={index}
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
        </div>
        }
        </>
    );
}

export default DashboardPage;