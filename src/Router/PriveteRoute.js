import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const PriveteRoute = ({children}) => {
    const {user ,loading}=useContext(AuthContext);
    const location=useLocation();
    if(loading){
        <span>Loading...</span>
    }
    if(!user){
        return <Navigate to='/login' state={{from:location}} replace></Navigate>
    }
    return children;
};

export default PriveteRoute;