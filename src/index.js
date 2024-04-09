import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import './index.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./pages/home/Hero";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path="/" element={<App/>}>
                    <Route index element={ <Hero/>} />
                </Route>
            </Routes>
        </Router>       
    </React.StrictMode>
)