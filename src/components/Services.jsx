import React from 'react'
import Service from './Service';

function Services() {
  const services = [
    {
      id: 1,
      img: 'https://placehold.co/200x200',
      title: 'Instalación',
      coverage: ["Aires Acondicionados", "Cuartos Frios", 'Maquina de helados'],
      url: "/test"
    },
    {
      id: 2,
      img: 'https://placehold.co/200x200',
      title: 'Reparación',
      coverage: ["Neveras","Congeladores","Enfriadores","Aires Acondicionados", "Cuartos Frios", "Maquinas de hielo", "Maquinas de Helado"],
      url: "/test"
    },
    {
      id: 3,
      img: 'https://placehold.co/200x200',
      title: 'Mantenimiento',
      coverage: ["Aires Acondicionados","Neveras","Congeladores","Enfriadores", "Cuartos Frios"],
      url: "/test"
    },
  ]
  return (
    <section className='flex flex-col justify-center items-center gap-y-16 px-14 mb-40 lg:flex-row lg:w-full lg:items-center lg:justify-center lg:gap-x-16 lg:gap-y-0'>
      {
        services.map(s => <Service key={s.id} title={s.title} coverage={s.coverage} img={s.img} url={s.url} style={ s.id == 2 ? "lg:scale-110":null}/>)
      }
    </section>
  )
}

export default Services