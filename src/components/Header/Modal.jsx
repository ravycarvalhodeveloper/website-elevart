import React, { Children } from "react";
import {Link } from "react-router-dom";
import './Header.css'


import Logo from '../../assets/logo-orange.png.png'
import CloseMenu from '../../assets/icons/closeMenu.svg.svg'
import IconsSocials from "./IconsSocials";

export default function Modal({isOpen , Children , setModalOpen}) {
    if(isOpen) {
        return (
                 <div id="IdModal" className="Modal ">
                    {Children}
                    <img className="CloseMenu" onClick={setModalOpen} src={CloseMenu} alt="" />
                    <div className="FlexLogoLinks">
                        <div className="LogoTitulo">
                            <img className="LogoOrange" src={Logo} alt="" />
                            <h1 className="Titulo">Agência Elevart</h1>
                        </div>

                        <ul id="CloseLinks" className="DisplayLinks">
                            <Link onClick={()=> setModalOpen(!isOpen)} className="Links" to="/">Início</Link>
                            <Link  onClick={()=> setModalOpen(!isOpen)}  className="Links" to="portfolio">Portfólio</Link>
                            <Link   onClick={()=> setModalOpen(!isOpen)} className="Links" to="sobre">Sobre</Link>
                            <Link  onClick={()=> setModalOpen(!isOpen)}  className="Links" to="contatos">Contatos</Link> 
                        </ul>
                        <IconsSocials/>
                        <p className="tituloDev">Developer: Agência Elevart</p>
                    </div>
                </div>
           
        )
    }

    
}