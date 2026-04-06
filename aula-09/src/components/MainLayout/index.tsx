import { Outlet } from "react-router";
import Navbar from "../NavBar"
import PacienteContext from '../../contexts/PacienteContext';
import { useContext } from "react";

function MainLayout() {
    const { paciente, setPaciente } = useContext(PacienteContext);

    return (
        <>
        <Navbar paciente={paciente} setPaciente={setPaciente} />
        <main>
            <Outlet />
        </main>
        </>
    );
}

export default MainLayout;