import { NavLink } from "react-router";
import './style.css';

const NAV_LINKS = [
    { to: '/', label: 'Inicio', end: true},
    { to: '/consultas', label: 'Consultas'},
    { to: '/exames', label: 'Exames'},
    { to: '/agendamento', label: 'Agendamento'}
];

const navLinkClass = ({ isActive }) =>
  isActive ? 'nav-link nav-link--active' : 'nav-link';

function Navbar({ paciente, setPaciente }) {
    return (
        <header className="navbar">
            <div className="navbar-brand">
                <span className="navbar-brand-icon">🩺</span>
                <span className="navbar-brand-name">Portal do Paciente</span>
            </div>

            <nav className="navbar-nav">
                {NAV_LINKS.map(({ to, label, end }) => (
                <NavLink key={to} to={to} end={end} className={navLinkClass}>
                    {label}
                </NavLink>
                ))}
            </nav>

            <div className="navbar-actions">
                <button className="navbar-bell" title="Notificações">🔔</button>
                <span className="navbar-user">{paciente?.nome}</span>
                <button className="navbar-logout" onClick={() => setPaciente(null)}>
                Sair
                </button>
            </div>
        </header>
    );
}

export default Navbar;