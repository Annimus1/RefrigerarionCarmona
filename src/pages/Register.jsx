import React from 'react'

function Register() {
  return (
    <section className='h-[95vh] flex justify-center items-center mb-20'>
      <form id="contactForm" className=" w-3/4 lg:w-1/2 mx-auto lg:border lg:border-gray-100 lg:p-3 lg:rounded-lg lg:shadow-lg" onSubmit={(event) => handleSubmit(event)}>

        <div className='w-full px-14 flex justify-center mb-10 mt-5'>
          <h2 className='font-bold text-blue-900 text-2xl text-nowrap select-none lg:text-4xl'>Crea Una Cuenta</h2>
        </div>

        <h3 className='text-center text-xl text-gray-400 select-none lg:text-2xl'>podras obtener informacion sobre servicios y garantias</h3>

        <div className="grid md:grid-cols-2 md:gap-6 my-4">
          {/* Name */}
          <div className="relative z-0 w-full mb-5 group">
            <input type="text" name="floating_first_name" id="first_name" className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-950 peer" placeholder=" " required />
            <label htmlFor="first_name" className="peer-focus:font-medium absolute text-md text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nombre</label>
          </div>

          {/* LastName */}
          <div className="relative z-0 w-full mb-5 group">
            <input type="text" name="floating_last_name" id="last_name" className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-950 peer" placeholder=" " required />
            <label htmlFor="last_name" className="peer-focus:font-medium absolute text-md text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Apellido</label>
          </div>

          {/* Phone */}
          <div className="relative z-0 w-full mb-5 group">
            <input type="tel" pattern="[0-9]{11}" name="phone" id="phone" className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-950 peer" placeholder=" " required />
            <label htmlFor="phone" className="peer-focus:font-medium absolute text-md text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Numero Telefónico</label>
          </div>

          {/* Password */}
          <div className="relative z-0 w-full mb-5 group">
            <input type="password" name="password" id="password" className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-950 peer" placeholder=" " required />
            <label htmlFor="password" className="peer-focus:font-medium absolute text-md text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Contraseña</label>
          </div>

          {/* verify Password */}
          <div className="relative z-0 w-full mb-5 group md:col-span-2">
            <input type="password" name="password2" id="password2" className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-950 peer" placeholder=" " required />
            <label htmlFor="password2" className="peer-focus:font-medium absolute text-md text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Verificar Contraseña</label>
          </div>

        </div>

        {/* Send Btn */}
        <div className='md:flex md:justify-center'>
          <button type="submit" className="text-white bg-blue-500 hover:bg-blue-950 focus:ring-4 focus:outline-none focus:ring-blue-500 font-medium rounded-lg text-md w-full sm:w-auto px-5 py-2.5 md:text-xl md:px-7 md:py-4 text-center">Crear Cuenta</button>
        </div>

      </form>
    </section>
  )
}

export default Register