import React from 'react'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <section className=" min-h-[95vh] ">
      <div className='area'>

      <ul className="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      </div>

      <div className="flex flex-col">

        <h1 className="mt-52 mb-4 text-4xl text-center font-extrabold tracking-tight leading-none text-blue-100 md:text-5xl lg:text-6xl ">Refrigeración Carmona</h1>

        <p className="mb-40 lg:mb-80 sm:px-16 xl:px-48 text-4xl font-extrabold tracking-tight leading-none text-center text-transparent md:text-5xl lg:text-6xl bg-gradient-to-tr from-white via-blue-600 to-blue-950  bg-clip-text">El frío hecho perfección</p>

        <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4 z-20">
          <Link to={"/contact"} className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-blue-500 rounded-lg bg-primary-700 border border-blue-500 lg:text-2xl lg:hover:border-gray-200 lg:hover:text-gray-200 lg:hover:bg-blue-900 duration-500">
            Contactanos
            <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
          </Link>
        </div>
      </div>


    </section>
  )
}

// la esencia del frío controlado!
// Frescura en cada rincón!

export default Hero