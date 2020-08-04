import React from 'react'
import Logo from '../../assets/img/Logo.png'
import './menu.css'
import ButtonLink from './components/ButtonLink/index'

function Menu() {
    return (
        <nav className="Menu" >
            <a href="/" >
                <img className="Logo" src={Logo} alt="Finalflix logo" />
            </a>

            <ButtonLink className="ButtonLink" href="/">
                Novo Vídeo
            </ButtonLink>
        </nav>
    )
} 

export default Menu 