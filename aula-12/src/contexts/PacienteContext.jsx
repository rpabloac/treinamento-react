import { createContext, useContext, useState, useCallback } from 'react';

import { post, get } from '../services/api';

const PacienteContext = createContext(null);

const dadosVazios = {
  exames: [],
  consultas: [],
};

export const PacienteProvider = ({ children }) => {
  const [dados, setDados] = useState(dadosVazios);
  const [paciente, setPaciente] = useState(null);
  const [error, setError] = useState(null);

  const login = useCallback(async (carteirinha, senha) => {
    setError(null);
    try {
      const response = await post('/login', { carteirinha, senha });
      setPaciente(response.data);
    } catch (err) {
      setError('Falha no login. Verifique suas credenciais e tente novamente.');
    }
  }, []);

  const logout = useCallback(() => {
    setPaciente(null);
    setDados(dadosVazios);
  }, []);

  const atualizarExames = useCallback(async () => {
    if (!paciente?.id) return;
    const response = await get(`/exames?pacienteId=${paciente.id}`);
    setDados((prev) => ({ ...prev, exames: response.data }));
  }, [paciente]);

  const atualizarConsultas = useCallback(async () => {
    if (!paciente?.id) return;
    const response = await get(`/consultas?pacienteId=${paciente.id}`);
    setDados((prev) => ({ ...prev, consultas: response.data }));
  }, [paciente]);

  return (
    <PacienteContext.Provider
      value={{
        paciente,
        login,
        logout,
        error,
        dados,
        atualizarExames,
        atualizarConsultas,
      }}
    >
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
