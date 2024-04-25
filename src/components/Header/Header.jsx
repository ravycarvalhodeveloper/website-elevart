import React, {useState} from "react";
import './Header.css'
import Logo from './logo.png'
import OpenMenu from '../../assets/icons/openMenu.svg'
import { BrowserRouter, Link } from "react-router-dom";

//Components
import Modal from "./Modal";
import HeaderDesktop from "./HeaderDesktop";
export default function Header(props) {

    const [openModal, setOpenModal] = useState(false)


    return (
        <div className="HeaderContainer">
            
            <nav className="NavContainer">
                <Link to="/"><img className="Logo" src={Logo} alt="" /> </Link>
                 <HeaderDesktop />
                <img onClick={()=> setOpenModal(true)} className="OpenMenu CloseHambuguerNone" src={OpenMenu} alt="" />
            </nav>

            <Modal isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)} ></Modal>

        </div>
    )
    
}