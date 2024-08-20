import { useState } from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Features from '../components/Features';
import CompanyProfile from '../components/CompanyProfile';
import Galery from '../components/Galery';
import Services from '../components/Services';

function App() {
  const [count, setCount] = useState(0)

  // References 
  // https://plainenglish.io/blog/send-whatsapp-web-messages-in-react-easily-3bf2a82a2eb2
  // https://web.whatsapp.com/send?phone="+584245250232"&text="hola, esto es una prueba de url"
  // https://placehold.co/180x40
  // https://suproenergy.com/?gad_source=1&gclid=Cj0KCQjwt4a2BhD6ARIsALgH7Dob6LDMNQtPB8OPPFMO7-FGp4FH3qDZ8kLq9AaeGZtH8lrawUIjUcoaAguHEALw_wcB
  // https://solarserviceprofessionals.com/

  return (
    <>
      <Layout >
        {/* hero */}
        <Hero />

        {/* Main features */}

        <p className='px-14 text-2xl mt-40 mb-20 text-background font-bold md:text-center md:text-4xl'>¿Por qué elegirnos? </p>
        <Features />


        {/* Company profile */}
        <CompanyProfile />

        {/* Services */}
        <p className='px-14 text-2xl mt-40 mb-20 text-background font-bold md:text-center md:text-4xl'>Algunos de nuestros Servicios </p>
        <Services/>


        {/* Galery */}
        <p className='px-14 text-2xl mt-40 mb-20 text-background font-bold md:text-center md:text-4xl'>Algunos de nuestros trabajos</p>
        <Galery />

      </Layout>
    </>
  )
}

export default App
