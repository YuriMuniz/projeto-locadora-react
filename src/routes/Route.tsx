import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {  Navigate } from "react-router-dom"
import { store } from "../store";

interface PropType {
    component: React.FC;
}

export const PrivateRoute: React.FC<PropType> = ({ component: Component }) => {
    const token = useSelector((state: any) => state.auth.token);
    const state: any = store.getState();
    const signed: any = state.auth.signed;
     
    if (signed) return <Component />;
    return <Navigate to='/login' />;
};


export const LoginRoute: React.FC<PropType> = ({ component: Component }) => {
    const state: any = store.getState();
    const signed: any = state.auth.signed;

    if (!signed) return <Component />;
    return <Navigate to='/' />;
};





