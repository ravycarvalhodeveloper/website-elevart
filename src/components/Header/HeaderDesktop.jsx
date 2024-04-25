import React from "react";
import './HeaderDesktop.css'
import '../../App.css'
import { BrowserRouter, Link } from "react-router-dom";

export default function HeaderDesktop() {
    return (
        <div className="HeaderDesktop CloseLinksDesktop">
            <Link className="LinksDestkop CloseLinksDesktop" to="/">Início</Link>
            <Link className="LinksDestkop CloseLinksDesktop" to="/portfolio">Portfólio</Link>
            <Link className="LinksDestkop CloseLinksDesktop" to="/sobre">Sobre</Link>
            <Link className="LinksDestkop CloseLinksDesktop" to="/contatos">Contatos</Link>
        </div>
    )
}