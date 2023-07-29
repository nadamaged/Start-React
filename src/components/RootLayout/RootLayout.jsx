// ES7+React/redux/react-Native snippets    rcc extension
import React from "react";
import { Outlet } from 'react-router-dom';
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

export default function RootLayout(){
    return <>
    <Navbar/>
    <Outlet></Outlet>
    <Footer/>
    </>
    
}