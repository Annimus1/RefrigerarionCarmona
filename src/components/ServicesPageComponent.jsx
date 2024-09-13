import React from 'react'
import { Link } from 'react-router-dom';

function ServicesPageComponent({ title, reverse, img, id, services }) {
  const maxsize = 200;

  return (
    <section id={id} className={`h-auto lg:h-[100vh] px-8 flex flex-col ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"} lg:gap-4 justify-center items-center mb-10`}>

      {/* <div className='lg:w-1/4 flex justify-center pr-10'>
        <img className='max-w-[450] max-h-[350] rounded-md' src={img} alt="" />
      </div> */}

      <div className='mt-10  lg:w-3/4 '>

        <h2 className='text-2xl font-bold lg:text-3xl lg:text-center mb-5 text-blue-900'>{title}</h2>

        <ul className='h-auto space-y-4 text-left text-gray-400 lg:grid lg:grid-cols-3'>
          {
            services.map((s, index) => {
              return <li key={index + s.title} className="flex items-center space-x-3 rtl:space-x-reverse">
                <img className='h-[150px] w-[150px] rounded-md lg:h-[175px] lg:w-[175px]' src={s.src} width={maxsize} height={maxsize} alt={s.title} />
                <span className='text-gray-700 font-bold lg:text-xl'>{s.title}</span>
              </li>
            })
          }
        </ul>

        <div className='flex justify-center mt-10'>
          <Link to={'/contact'} className='border border-blue-900 rounded-lg p-2 text-nowrap text-blue-900 lg:p-5 font-bold lg:hover:border-gray-200 lg:hover:text-gray-200 lg:hover:bg-blue-900 duration-500'> Contacta a uno de nuestros especialistas</Link>
        </div>

      </div>

    </section>
  )
}

export default ServicesPageComponent