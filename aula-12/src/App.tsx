import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router';
import DashboardPage from './pages/Dashboard/DashboardPage'
import LoginPage from './pages/Login/LoginPage'
import ExamesPage from './pages/Exames/ExamesPage';
import ConsultasPage from './pages/Consultas/ConsultasPage';
import AgendamentoPage from './pages/Agendamento/AgendamentoPage';
import MainLayout from './components/MainLayout';
import { PacienteProvider, usePaciente } from './contexts/PacienteContext';

function AppRoutes() {
  const { paciente } = usePaciente();


  return (
    <Routes>
      <Route
        path="/login"
        element={!paciente ? <LoginPage /> : <Navigate to="/" />}
      />

      <Route
        element={paciente ? <MainLayout /> : <Navigate to="/login" />}
      >
        <Route path="/" element={<DashboardPage />} />
        <Route path="/consultas" element={<ConsultasPage />} />
        <Route path="/exames" element={<ExamesPage />} />
        <Route path="/agendamento" element={<AgendamentoPage />} />
      </Route>
    </Routes>
  );
}

function App() {
  return (
    <PacienteProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </PacienteProvider>
  );
}

export default App;