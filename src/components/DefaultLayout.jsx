import { Outlet } from "react-router-dom"
import FooterComponent from "./FooterComponent";
import SidebarComponent from "./SidebarComponent";
import HeaderComponent from "./HeaderComponent";
export default function DefaultLayout() {
    return (
        <>
            <HeaderComponent />
            <div className="d-flex">
                <SidebarComponent />
                <main>
                    <Outlet />
                </main>
            </div>
            <FooterComponent />
        </>
    )
}

