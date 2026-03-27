import { useState } from 'react'
import './App.css'
import DashboardPage from './pages/Dashboard/DashboardPage'
import LoginPage from './pages/Login/LoginPage'

function App() {
  const [paciente, setPaciente] = useState(null);

  if (!paciente) {
    return <LoginPage setPaciente={setPaciente}/>
  }

  return <DashboardPage paciente={paciente}/>
}

export default App;