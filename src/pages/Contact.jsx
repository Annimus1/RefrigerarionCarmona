import React, { useState } from 'react'
import { redirect } from 'react-router-dom';

function Contact() {
  const [category, setCategory] = React.useState("Reparación");
  
  // Set view to the top
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const messages = {
    "Reparación": "¿Qué tipo de equipo es y cuáles son sus principales fallos?",
    "Mantenimiento": "¿Qué tipo de equipo es el que necesita el Mantenimenito?",
    "Instalación": "¿Qué tipo de equipo necesita instalar?"
  }

  function handleSubmit(e) {
    e.preventDefault();

    let url = `https://web.whatsapp.com/send?phone=""&`;

    let text = `Hola soy ${e.target[0].value} ${e.target[1].value}. Escribo ya que necesito un@ ${e.target[2].value}. ${e.target[4].value}`

    globalThis.location.href = url + "text=" + `"${text}"`;
  }

  return (
    <section className='h-[95vh] flex justify-center items-center mb-20'>
      <form id="contactForm" className=" w-3/4 lg:w-1/2 mx-auto lg:border lg:border-gray-100 lg:p-3 lg:rounded-lg lg:shadow-lg" onSubmit={(event) => handleSubmit(event)}>

        <div className='w-full px-14 flex justify-center my-10'>
          <h2 className='font-bold text-blue-900 text-2xl text-nowrap select-none lg:text-4xl'>Pongámonos en contacto</h2>
        </div>

        {/* Info about the client */}
        <div className='my-10'>
          <h3 className='text-center text-xl text-gray-400 select-none lg:text-2xl'>Déjanos saber quién eres</h3>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-5 group">
              <input type="text" name="floating_first_name" id="first_name" className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-950 peer" placeholder=" " required />
              <label htmlFor="first_name" className="peer-focus:font-medium absolute text-md text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nombre</label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input type="text" name="floating_last_name" id="last_name" className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-950 peer" placeholder=" " required />
              <label htmlFor="last_name" className="peer-focus:font-medium absolute text-md text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Apellido</label>
            </div>
          </div>

          <div className="relative z-0 w-full mb-5 group">
            <input type="tel" pattern="[0-9]{11}" name="phone" id="phone" className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-950 peer" placeholder=" " required />
            <label htmlFor="phone" className="peer-focus:font-medium absolute text-md text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Numero Telefónico</label>
          </div>

        </div>

        {/* Info about the service */}
        <div className='my-10'>
          <h3 className='text-center text-xl text-gray-400 select-none text-nowrap lg:text-2xl'>Que tipo de servicio necesitas?</h3>
          <div className="relative z-0 w-full mb-5 group">
            <select value={category} onChange={(e) => { setCategory(e.currentTarget.value) }} id="categorias" className="block py-2.5 px-0 w-full text-md text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-950 peer">
              <option>Reparación</option>
              <option>Instalación</option>
              <option>Mantenimiento</option>
            </select>
          </div>

          <div className="relative z-0 w-full mb-5 group">
            <label htmlFor="message" className="text-md text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10  peer-focus:text-blue-600 ">{messages[category]}</label>
            <textarea id="message" rows="4" className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-950 peer"></textarea>
          </div>
        </div>

        {/* Send Btn */}
        <button type="submit" className="text-white bg-blue-500 hover:bg-blue-950 focus:ring-4 focus:outline-none focus:ring-blue-500 font-medium rounded-lg text-md w-full sm:w-auto px-5 py-2.5 text-center">Contactar</button>

      </form>
    </section>
  )
}

export default Contact