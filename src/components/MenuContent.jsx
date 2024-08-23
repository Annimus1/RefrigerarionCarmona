import React from 'react';
import { Link } from 'react-router-dom';

function SideMenuContent({ isShowed, hideModal }) {
    function handleClick() {
        if (isShowed !== null) {
            hideModal()
        }
    }
    return (
        <>
            <Link className='text-lg font-bold text-background md:hover:text-white duration-300' to={'/'} onClick={() => handleClick()}>Inicio</Link>
            <Link className='text-lg font-bold text-background md:hover:text-white duration-300' to={'/services'} onClick={() => handleClick()}>Sercivios</Link>
            <Link className='text-lg font-bold text-background md:hover:text-white duration-300' to={'/test'} onClick={() => handleClick()}>Contacto</Link>
            <Link className='text-lg font-bold text-background md:hover:text-white duration-300' to={'/test'} onClick={() => handleClick()}>Sobre Nosotros</Link>
            <Link className='text-lg font-bold text-background' to={'/test'}>Login</Link>
        </>
    )
}

export default SideMenuContent