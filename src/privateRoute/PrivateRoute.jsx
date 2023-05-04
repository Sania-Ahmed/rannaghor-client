/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({children}) => {
    const location = useLocation()
    const {user, isLoading} = useContext(AuthContext);
    console.log(isLoading)
    if(isLoading){
        return <Spinner animation="border"></Spinner>
    }
    if(user){
        return children
    }
    else{
        return <Navigate to='/login' state={{from:location}} replace></Navigate>
    }
};

export default PrivateRoute;