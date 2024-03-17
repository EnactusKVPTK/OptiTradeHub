import React, { useContext } from "react";
import {Routes, Route, Redirect, RouterProvider} from 'react-router-dom'
import { authRoutes, publicRoutes } from "../routes";
import { Context } from "../index";
import Admin from "../pages/Admin";

const AppRouter = () => {
    const {user} = useContext(Context)
    return (
        <Routes>
            {user.isAuth && authRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>} exact/>
            )}
            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component />} exact/>
                )}
        </Routes>
    )
}

export default AppRouter