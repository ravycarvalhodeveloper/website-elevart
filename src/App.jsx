import React from "react";
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Components
import Header from './components/Header/Header'
import Modal from "./components/Header/Modal";
import Portifolio from "./components/pages/Portifolio/Portfolio";
import Home from "./components/pages/Home/Home";
import Sobre from './components/pages/Sobre/Sobre'
import Contatos from "./components/pages/Contatos/Contatos";
export default function App() {
    return (
        <BrowserRouter>
            <div>
                <div className="GeneralContainer">
                    <Header />
                    <Modal/>
                    <Routes>
                        <Route path="/" element={<Home/>} />
                        <Route path="/portfolio" element={<Portifolio/>} />
                        <Route path="/sobre" element={<Sobre/>} />
                        <Route path="/contatos" element={<Contatos/>} />
                    </Routes>
                </div>
                
            </div>
    

        </BrowserRouter>
       )
}