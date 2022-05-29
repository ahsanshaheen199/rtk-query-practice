import React from 'react';
import {useAppSelector} from "../app/hooks";
import {selectAuth} from "../features/authSlice";
import {Navigate} from "react-router-dom";

function PrivateRoute({children} : { children: any } ) {
    const { token } =  useAppSelector(selectAuth);
    console.log(token)
    return token ? children : <Navigate to={'/login'} />
}

export default PrivateRoute;