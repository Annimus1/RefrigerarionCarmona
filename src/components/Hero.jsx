import React from 'react'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    // https://plus.unsplash.com/premium_photo-1682145344450-34d8323dec84?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
    // https://cdn.pixabay.com/photo/2024/06/21/08/05/air-conditioner-8843842_960_720.png

    <section className="bg-background min-h-[95vh]">
      <div className="py-28 px-4 mx-auto max-w-screen-xl text-center lg:py-40 lg:px-12">
        
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl ">Refrigeración Carmona</h1>

        <p className="mb-40 lg:mb-80 sm:px-16 xl:px-48 text-4xl font-extrabold tracking-tight leading-none text-transparent md:text-5xl lg:text-6xl bg-gradient-to-tr from-light-blue via-blue-500 to-active bg-clip-text">El frío hecho perfección</p>

        <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4 ">
          <Link to={"/test"} className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary-700 border border-gray-200 lg:text-2xl">
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