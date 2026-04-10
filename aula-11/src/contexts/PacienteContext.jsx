import { createContext, useContext, useState, useCallback } from 'react';

import { post } from '../services/api';

const PacienteContext = createContext(null);

const dadosIniciais = {
  paciente: null,
  exames: [],
  consultas: [],
};

export const PacienteProvider = ({ children }) => {
  const [dados, setDados] = useState(dadosIniciais);
  const [error, setError] = useState(null);

  const login = useCallback(async (carteirinha, senha) => {
    setError(null);
    try {
      const data = await post('/login', { carteirinha, senha });
      setPaciente(data);
    } catch (err) {
      setError('Falha no login. Verifique suas credenciais e tente novamente.');
    }
  }, []); // sem dependências externas: nunca recriada

  const logout = useCallback(() => {
    setPaciente(null);
  }, []);

  const atualizarExames = async () => {
    const exames = await get(`/exames?pacienteId=${dados.paciente.id}`);
      setDados((prev) => ({ ...prev, exames }));
    };

    const atualizarConsultas = async () => {
      const consultas = await get(`/consultas?pacienteId=${dados.paciente.id}`);
      setDados((prev) => ({ ...prev, consultas }));
    };

    return (
      <PacienteContext.Provider value={{ dados, login, logout, error }}>
        {children}
      </PacienteContext.Provider>
    );
  };

export const usePaciente = () => {
  const context = useContext(PacienteContext);
  if (!context) {
    throw new Error('usePaciente deve ser usado dentro de um PacienteProvider');
  }
  return context;
};