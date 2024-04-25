import React from "react";

import './IconsSocials.css'

import Behance from '../../assets/icons/behance.svg'
import Facebook from '../../assets/icons/facebook.svg'
import Whatsapp from '../../assets/icons/whatsapp.svg'
import Instagram from '../../assets/icons/instagram.svg'


export default function IconsSocials(pros){
    return (
        <div className="ContainerIconsSocials">
            <a href=""><img className="IconsSocials" src={Behance} alt="Ir para o Behance" /></a>
            <a href=""><img className="IconsSocials" src={Facebook} alt="Ir para o Facebook" /></a>
            <a href=""><img className="IconsSocials" src={Whatsapp} alt="Ir para o WhatsApp" /></a>
            <a href=""><img className="IconsSocials" src={Instagram} alt="Ir para o Instagram" /></a>
        </div>
    )
}