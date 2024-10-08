import React from 'react';
import { Link } from 'react-router-dom';

function SideMenuContent({hideModal, icons}) {
    
    const iconSize = 24;
    
    function handleClick() {   
        // check if is needed close the modal in case of mobile
        if (hideModal) {
            hideModal()
        }
    }

    return (
        <>
            <Link className='text-lg font-bold text-white md:hover:text-blue-500 duration-300' to={'/'} onClick={() => handleClick()}>
            {
                icons ? <svg className="w-6 h-6 inline mr-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={iconSize} height={iconSize} fill="currentColor" viewBox="0 0 24 24">

                <path fillRule="evenodd" d="M11.293 3.293a1 1 0 0 1 1.414 0l6 6 2 2a1 1 0 0 1-1.414 1.414L19 12.414V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-6.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2 6-6Z" clipRule="evenodd"/>
              </svg>: null  
            }
            Inicio
            </Link>
            <Link className='text-lg font-bold text-white md:hover:text-blue-500 duration-300' to={'/services'} onClick={() => handleClick()}>
            {
                icons ? <svg className="w-6 h-6 inline mr-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={iconSize} height={iconSize} fill="currentColor" viewBox="0 0 24 24">

                <path fillRule="evenodd" d="M10 2a3 3 0 0 0-3 3v1H5a3 3 0 0 0-3 3v2.382l1.447.723.005.003.027.013.12.056c.108.05.272.123.486.212.429.177 1.056.416 1.834.655C7.481 13.524 9.63 14 12 14c2.372 0 4.52-.475 6.08-.956.78-.24 1.406-.478 1.835-.655a14.028 14.028 0 0 0 .606-.268l.027-.013.005-.002L22 11.381V9a3 3 0 0 0-3-3h-2V5a3 3 0 0 0-3-3h-4Zm5 4V5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v1h6Zm6.447 7.894.553-.276V19a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-5.382l.553.276.002.002.004.002.013.006.041.02.151.07c.13.06.318.144.557.242.478.198 1.163.46 2.01.72C7.019 15.476 9.37 16 12 16c2.628 0 4.98-.525 6.67-1.044a22.95 22.95 0 0 0 2.01-.72 15.994 15.994 0 0 0 .707-.312l.041-.02.013-.006.004-.002.001-.001-.431-.866.432.865ZM12 10a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H12Z" clipRule="evenodd"/>
              </svg>: null
            }
            Sercivios
            </Link>
            <Link className='text-lg font-bold text-white md:hover:text-blue-500 duration-300' to={'/contact'} onClick={() => handleClick()}>
            {
                icons ? <svg className="w-6 h-6 inline mr-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={iconSize} height={iconSize} fill="currentColor" viewBox="0 0 24 24">

                <path fillRule="evenodd" d="M12 6a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm-1.5 8a4 4 0 0 0-4 4 2 2 0 0 0 2 2h7a2 2 0 0 0 2-2 4 4 0 0 0-4-4h-3Zm6.82-3.096a5.51 5.51 0 0 0-2.797-6.293 3.5 3.5 0 1 1 2.796 6.292ZM19.5 18h.5a2 2 0 0 0 2-2 4 4 0 0 0-4-4h-1.1a5.503 5.503 0 0 1-.471.762A5.998 5.998 0 0 1 19.5 18ZM4 7.5a3.5 3.5 0 0 1 5.477-2.889 5.5 5.5 0 0 0-2.796 6.293A3.501 3.501 0 0 1 4 7.5ZM7.1 12H6a4 4 0 0 0-4 4 2 2 0 0 0 2 2h.5a5.998 5.998 0 0 1 3.071-5.238A5.505 5.505 0 0 1 7.1 12Z" clipRule="evenodd"/>
              </svg> : null
            }
            Contacto
            </Link>

            <Link className='w-48 text-center text-nowrap text-lg font-bold px-10 text-white border border-white md:rounded-md md:hover:bg-white md:hover:text-blue-900 duration-300 ease-linear' onClick={() => handleClick()} to={'/login'}>Iniciar Sesión</Link>
        </>
    )
}

export default SideMenuContent