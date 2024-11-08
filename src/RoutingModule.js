import React from 'react';

import {  createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Components/login/login";
import Signup from "./Components/signUp/signUp";



function RoutingModule() {
    const AppRoutes = createBrowserRouter([
        {
            path: "/login",
            element: <Login />,
        },
        {
            path: "/signup",
            element: <Signup />,
        },
        {
            path: "/",
            element: <Login />,
        },
    
        
    ]);

    return <RouterProvider router={AppRoutes} />;
}

export default RoutingModule;