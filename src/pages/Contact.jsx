import React, { useState } from 'react'
import { redirect } from 'react-router-dom';

function Contact() {
  
  const [name, setName] = React.useState('');
  const [last, setLast] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [category, setCategory] = React.useState('');
  const [aditional, setAditional] = React.useState('');
  
  // References 
  // https://plainenglish.io/blog/send-whatsapp-web-messages-in-react-easily-3bf2a82a2eb2
  // 

  function handleSubmit(e){
    e.preventDefault();
    // console.log(e.target[0].value); // 
    // console.log(e.target[1].value); //
    // console.log(e.target[2].value); //
    // console.log(e.target[3].value); //
    // console.log(e.target[4].value); //

    let url = `https://web.whatsapp.com/send?phone="+584120606765"&`;

    let text = `Hola soy ${e.target[0].value} ${e.target[1].value}. Escribo ya que necesito un@ ${e.target[2].value}. ${e.target[4].value}`

    globalThis.location.href= url+"text="+`"${text}"`;
  }

  return (


    <section className='h-[95vh] flex justify-center items-center'>
      <form className=" w-3/4 lg:w-1/2 mx-auto" onSubmit={(event)=> handleSubmit(event)}>

        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-5 group">
            <input type="text" name="floating_first_name" id="first_name" className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-950 peer" placeholder=" " required />
            <label for="first_name" className="peer-focus:font-medium absolute text-md text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nombre</label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input type="text" name="floating_last_name" id="last_name" className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-950 peer" placeholder=" " required />
            <label for="last_name" className="peer-focus:font-medium absolute text-md text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Apellido</label>
          </div>
        </div>

        <div className="relative z-0 w-full mb-5 group">
          <select id="categorias" className="block py-2.5 px-0 w-full text-md text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-950 peer">
            <option>Reparacion</option>
            <option>Instalacion</option>
            <option>Mantenimiento</option>
          </select>
        </div>

        <div className="relative z-0 w-full mb-5 group">
          <input type="tel" pattern="[0-9]{11}" name="phone" id="phone" className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-950 peer" placeholder=" " required />
          <label for="phone" className="peer-focus:font-medium absolute text-md text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Numero Telefonico</label>
        </div>

        <div className="relative z-0 w-full mb-5 group">
          <label for="message" className="text-md text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10  peer-focus:text-blue-600 ">Informacion adicional</label>
          <textarea id="message" rows="4" className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-950 peer"></textarea>
        </div>

        <button type="submit" className="text-white bg-blue-500 hover:bg-blue-950 focus:ring-4 focus:outline-none focus:ring-blue-500 font-medium rounded-lg text-md w-full sm:w-auto px-5 py-2.5 text-center ">Contactar</button>

      </form>
    </section>
  )
}

export default Contact