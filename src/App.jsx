import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from './layouts/Navbar';


const App = () => {
    return (
        <section>
            <Navbar/>
            <Outlet/>
        </section>
    )
}

export default App