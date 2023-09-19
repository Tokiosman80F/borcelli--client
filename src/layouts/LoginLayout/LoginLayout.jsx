import { Outlet } from "react-router-dom";
import NavigationBar from "../../pages/shared/NavigationBar";
import Footer from "../../pages/shared/Footer";

const LoginLayout = () => {
    return (
        <>
        <NavigationBar></NavigationBar>
        <Outlet></Outlet>
        <Footer></Footer>            
        </>
    );
};

export default LoginLayout;