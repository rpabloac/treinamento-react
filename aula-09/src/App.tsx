import { useState } from 'react'
import './App.css'
import DashboardPage from './pages/Dashboard/DashboardPage'
import LoginPage from './pages/Login/LoginPage'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router';
import ExamesPage from './pages/Exames/ExamesPage';
import ConsultasPage from './pages/Consultas/ConsultasPage';
import AgendamentoPage from './pages/Agendamento/AgendamentoPage';
import MainLayout from './components/MainLayout';
import PacienteContext from './contexts/PacienteContext';

function App() {
  const [paciente, setPaciente] = useState(null);

  return (
    <PacienteContext.Provider value={{paciente, setPaciente}}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={paciente ? <Navigate to="/"/> :  <LoginPage/>}/>
          <Route element={paciente ? <MainLayout  /> : <Navigate to="/login" />}>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/exames" element={<ExamesPage/>}/>
            <Route path="/consultas" element={<ConsultasPage/>}/>
            <Route path="/agendamento" element={<AgendamentoPage />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </PacienteContext.Provider>
  )
}

export default App;