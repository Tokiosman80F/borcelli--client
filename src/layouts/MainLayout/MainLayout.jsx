import { Outlet } from 'react-router-dom';
import NavigationBar from '../../pages/shared/NavigationBar';
import Carousel from '../../pages/Carousel';

const MainLayout = () => {
    return (
        <>
         <NavigationBar></NavigationBar>
         <Carousel></Carousel>
         <Outlet></Outlet>   
        </>
    );
};

export default MainLayout;