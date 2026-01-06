import { Outlet } from "react-router";

export function Layout(){
    <Header/>
    <MainContent>
        <Outlet/>
    </MainContent>
    <Footer/>
}