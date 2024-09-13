import React from 'react'

function CompanyProfile() {
    
    const spanStyle = "font-bold text-blue-900 text-balance"

    return (
        <section className='px-14 flex flex-col justify-center items-center mb-40
        md:flex-row md:gap-x-20 h-auto'>
            <img alt={''} src={'https://placehold.co/350x500'} />
            <div className='md:flex md:flex-col md:justify-start min-h-[500px] '>
                <h2 className='text-center text-background text-3xl font-bold my-10'>Refrigeracion Carmona</h2>
                <p className='text-pretty text-xl md:max-w-[40rem] md:text-wrap'>
                    Somos una empresa familiar con <span className={`${spanStyle}`}>más de 20 años de trayectoria</span> trabajando en el área de Refrigeración Industrial y Doméstica.
                </p>
                <p className='text-pretty text-xl md:max-w-[40rem] md:text-wrap'>Con especial experiencia en la instalación de cavas de cuarto y túneles de congelación.</p>
                <p className='text-pretty text-xl md:max-w-[40rem] md:text-wrap'>Nuestro equipo está compuesto principalmente por nuestro líder y director general <span className={`${spanStyle}`}>Ladislao Carmona</span> y nuestros líderes técnicos <span className={`${spanStyle}`}>Anghelo Carmona</span> y <span className={`${spanStyle}`}>Danghelo Carmona</span>.</p>
                <p className='text-pretty text-xl md:max-w-[40rem] md:text-wrap'>Contamos con diversos socios en el área, de los cuales se destacan Redovica.ca y Danfoss (Brasil).</p>
            </div>
        </section>
    )
}

export default CompanyProfile