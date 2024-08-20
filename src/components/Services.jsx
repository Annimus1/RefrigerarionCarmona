import React from 'react'
import Feature from './Feature'

function Services() {
    const services = [
        {
          id: 1,
          img: 'https://placehold.co/200x200',
          title: 'Reparación',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit!',
          url: "/test"
        },
        {
          id: 2,
          img: 'https://placehold.co/200x200',
          title: 'Mantenimiento',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit!',
          url: "/test"
        },
        {
          id: 3,
          img: 'https://placehold.co/200x200',
          title: 'Instalación',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit!',
          url: "/test"
        },
      ]
      return (
        <section className='flex flex-col gap-y-16 px-14 mb-40 md:flex-row md:w-full md:items-center md:justify-center md:gap-x-16 md:gap-y-0'>
          {
            services.map( (s) => <Feature key={s.id} img={s.img} description={s.description} title={s.title} url={s.url}/> )
          }
        </section>
      )
}

export default Services