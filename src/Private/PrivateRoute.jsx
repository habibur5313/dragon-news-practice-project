import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {

const {user,loading} = useContext(AuthContext)
const {pathname} = useLocation()
// console.log({pathname});
if(loading){
                    return <h1>loading......</h1>
}

if(user){
                    return children
}
                    return (
                                       <Navigate state={pathname} to={'/auth/login'}></Navigate>
                    );
};

export default PrivateRoute;