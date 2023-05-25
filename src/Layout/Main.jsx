import React from 'react';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import { Outlet } from "react-router-dom";
import Navbar from '../Components/Navbar/Navbar';
import ChefsBio from '../Pages/ChefsBio/ChefsBio';
import Recipie from '../Pages/Recipie/Recipie';

const Main = () => {
    return (
        <div>
                <Header></Header>
                <Navbar></Navbar>
                <Outlet></Outlet>
                <Footer></Footer>
        </div>
    );
};

export default Main;