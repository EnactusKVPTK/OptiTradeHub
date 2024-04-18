import React, {useContext, useEffect, useState} from 'react';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/Head";
import {observer} from "mobx-react-lite";
import {Context} from "./index";
import {check} from "./http/userAPI";
import {Spinner} from "react-bootstrap";
import Footer from './components/Footer';
import Head from './components/Head';

const App = observer(() => {
    const {user} = useContext(Context)
    // const [loading, setLoading] = useState(true)

    // useEffect(() => {
    //     try {
    //         check().then(data => {
    //             console.log(data)
    //             user.setUser(true)
    //             user.setIsAuth(true)
    //         }).finally(() => setLoading(false))
    //     } catch (e) {
    //         console.log(e)
    //     }
    // }, [])

    // if (loading) {
    //     return <Spinner animation={"grow"}/>
    // }

    return (
        <BrowserRouter>
            <Head />
            <AppRouter />
            <Footer/>
        </BrowserRouter>
    );
});

export default App;
