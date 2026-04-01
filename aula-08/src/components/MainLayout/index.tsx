import { Outlet } from "react-router";
import Navbar from "../NavBar"

function MainLayout({ paciente, setPaciente }) {
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