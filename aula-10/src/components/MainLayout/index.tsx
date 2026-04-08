import { Outlet } from "react-router";
import Navbar from "../NavBar"

function MainLayout() {
    return (
        <>
        <Navbar />
        <main>
            <Outlet />
        </main>
        </>
    );
}

export default MainLayout;