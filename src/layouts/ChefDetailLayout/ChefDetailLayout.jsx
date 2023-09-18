import { Outlet } from 'react-router-dom';
import NavigationBar from '../../pages/shared/NavigationBar';

const ChefDetailLayout = () => {
    return (
        <>
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
        </>
    );
};

export default ChefDetailLayout;