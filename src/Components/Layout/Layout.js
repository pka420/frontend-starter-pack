import React from "react";
import Navbar from '../Navbar/Navbar.js';
import Footer from "../Footer/Footer.js";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div className="container">
            { /* <StatusBar /> */ }
            <Navbar />
            <div className="main_content" >
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default Layout;
