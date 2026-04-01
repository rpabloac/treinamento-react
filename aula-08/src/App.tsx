import { useState } from 'react'
import './App.css'
import DashboardPage from './pages/Dashboard/DashboardPage'
import LoginPage from './pages/Login/LoginPage'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router';
import ExamesPage from './pages/Exames/ExamesPage';
import ConsultasPage from './pages/Consultas/ConsultasPage';
import AgendamentoPage from './pages/Agendamento/AgendamentoPage';
import MainLayout from './components/MainLayout';

function App() {
  const [paciente, setPaciente] = useState(null);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={paciente ? <Navigate to="/"/> :  <LoginPage setPaciente={setPaciente}/>}/>
        <Route element={paciente ? <MainLayout paciente={paciente}  setPaciente={setPaciente} /> : <Navigate to="/login" />}>
          <Route path="/" element={<DashboardPage paciente={paciente} />} />
          <Route path="/exames" element={<ExamesPage/>}/>
          <Route path="/consultas" element={<ConsultasPage/>}/>
          <Route path="/agendamento" element={<AgendamentoPage />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;