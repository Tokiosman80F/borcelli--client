import  { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,loader}=useContext(AuthContext)
    const location=useLocation();
    if(loader){
        return <div className='mx-auto'><span className="loading loading-dots loading-lg ">Loading</span></div>
    }
    if(user)
    {     return children
    }
    return (
        <Navigate to="/login" state={{from:location}} replace>
            
        </Navigate>
    );
};

export default PrivateRoute;