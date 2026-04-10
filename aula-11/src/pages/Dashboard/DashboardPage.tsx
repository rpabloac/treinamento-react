import { useState, useEffect, useMemo  } from 'react';
import ConsultaItemPage from './ConsultaItem';
import { usePaciente } from "../../contexts/PacienteContext";
import { get } from '../../services/api.js';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';

function DashboardPage() {
    const { paciente } = usePaciente();
    const [exames, setExames] = useState([]);
    const [consultas, setConsultas] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
        try {
            const examesData = await get(`/exames?pacienteId=${paciente.id}`);
            setExames(examesData);
            const consultasData = await get(`/consultas?pacienteId=${paciente.id}`);
            setConsultas(consultasData);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
        };
        fetchData();
    }, []);

    const consultasRecentes = useMemo(() => {
        return consultas
        .filter((c) => c.status !== "cancelada")   // ignora canceladas
        .sort((a, b) => new Date(b.data) - new Date(a.data)) // mais recentes primeiro
        .slice(0, 3);
    }, [consultas]);

    const estatisticas = useMemo(() => ({
        totalExames: exames.length,
        examesPendentes: exames.filter((e) => e.status === "pendente").length,
        totalConsultas: consultas.length,
    }), [exames, consultas]);

    if (!exames.length || !consultas.length) {
        return <LoadingSpinner />;
    }

    return (
        <>
            <h1>Dashboard</h1>
            <p>Bem-vindo, {paciente.nome}!</p>
            
            <section>
                <h2>Resumo</h2>
                <p>Total de consultas: {estatisticas.totalConsultas}</p>
                <p>Total de exames: {estatisticas.totalExames}</p>
                <p>Exames pendentes: {estatisticas.examesPendentes}</p>
            </section>

            <session>
                <h1>Consultas Recentes</h1>
                <ul>
                    {consultasRecentes.map((consulta, index) => {
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
            </session>
        </>
    );
}

export default DashboardPage;