import React from 'react'
import Logo from '../../assets/img/Logo.png'
import './menu.css'
import Button from './components/Button'

function Menu() {
    return (
        <nav className="Menu" >
            <a href="/" >
                <img className="Logo" src={Logo} alt="Finalflix logo" />
            </a>

            <Button as="a"className=" " href="/">
                Novo Vídeo
            </Button>
        </nav>
    )
} 

export default Menu 