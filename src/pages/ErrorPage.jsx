import React from 'react';
import { FaHouseChimney } from 'react-icons/fa6';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    let error=useRouteError()
    return (
        <div className='uppercase min-h-screen flex flex-col items-center gap-5 justify-center '>
            <h1 className='text-7xl text-red-500'>ErRor Page</h1>
            <div >{error.message}</div>
            <div className='text-2xl'>Error Status code: {error.status}</div>
           <Link> <button className='btn bg-orange-400 text-white hover:bg-orange-500'><FaHouseChimney></FaHouseChimney> Go to Home page</button></Link>
        </div>
    );
};

export default ErrorPage;