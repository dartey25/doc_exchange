import React from 'react';
import {Outlet} from "react-router-dom";
import Navbar from "../components/ui/Navbar/Navbar";

const BaseLayout = () => {
    return (
        <>
            <Navbar/>
            <Outlet/>
        </>
    );
};

export default BaseLayout;