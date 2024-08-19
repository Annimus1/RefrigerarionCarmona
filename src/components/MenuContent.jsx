import React from 'react';
import { Link } from 'react-router-dom';

function SideMenuContent() {
    return (
        <>
            <Link className='text-lg font-bold text-background md:hover:text-white duration-300' to={'/'}>Inicio</Link>
            <Link className='text-lg font-bold text-background md:hover:text-white duration-300' to={'/test'}>Sercivios</Link>
            <Link className='text-lg font-bold text-background md:hover:text-white duration-300' to={'/test'}>Contacto</Link>
            <Link className='text-lg font-bold text-background md:hover:text-white duration-300' to={'/test'}>Sobre Nosotros</Link>
            <Link className='text-lg font-bold text-background' to={'/test'}>Login</Link>
        </>
    )
}

export default SideMenuContent