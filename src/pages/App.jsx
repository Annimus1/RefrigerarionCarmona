import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import CompanyProfile from '../components/CompanyProfile';
import Galery from '../components/Galery';
import Services from '../components/Services';
import { Link } from 'react-router-dom';

function App() {
  const [count, setCount] = React.useState(0)

  // Set view to the top
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])


  return (
    <>
      {/* hero */}
      <Hero />

      {/* Main features */}

      <p className='px-14 text-2xl mt-40 mb-20 text-background font-bold md:text-center md:text-4xl'>¿Por qué elegirnos? </p>
      <Features />


      {/* Company profile */}
      <CompanyProfile />

      {/* Services */}
      <p className='px-14 text-2xl mt-40 mb-20 text-background font-bold md:text-center md:text-4xl'>Algunos de nuestros Servicios </p>
      <Services />


      {/* Galery */}
      <p className='px-14 text-2xl mt-40 mb-20 text-background font-bold md:text-center md:text-4xl'>Algunos de nuestros trabajos</p>
      <Galery />

      {/* Action call */}
      <div className='w-full flex items-center justify-center mb-20 lg:mb-32'>
        <Link to={'/contact#init'} className='border border-blue-500 rounded-lg p-2 text-nowrap text-blue-500 lg:p-5 font-bold lg:hover:border-gray-200 lg:hover:text-gray-200 lg:hover:bg-blue-900 duration-500'> Contacta a uno de nuestros especialistas</Link>
      </div>

    </>
  )
}

export default App
