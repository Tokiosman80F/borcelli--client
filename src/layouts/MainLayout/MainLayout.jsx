import { Outlet } from 'react-router-dom';
import NavigationBar from '../../pages/shared/NavigationBar';
// import Carousel from '../../pages/Carousel/Carousel';
import RecipeCategory from '../../pages/RecipeCategory';
const MainLayout = () => {
    return (
        <>
         <NavigationBar></NavigationBar>
         {/* <Carousel></Carousel> */}
         <RecipeCategory></RecipeCategory>
         <Outlet></Outlet>   
        </>
    );
};

export default MainLayout;