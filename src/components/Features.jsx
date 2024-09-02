import React from 'react'
import Feature from './Feature'
import calidad from '../../public/calidad.png'

function Features() {
  const features = [
    {
      id: 1,
      img: `../../public/calidad.png`,
      title: 'Garantía',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit!'
    },
    {
      id: 2,
      img: `../../public/confianza.png`,
      title: 'Responsabilidad',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit!'
    },
    {
      id: 3,
      img: '../../public/eficiencia.png',
      title: 'Eficiencia',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit!'
    },
  ]
  return (
    <section className='flex flex-col gap-y-16 px-14 mb-40 md:flex-row md:w-full md:items-center md:justify-center md:gap-x-16 md:gap-y-0'>
      {
        features.map( (f) => <Feature key={f.id} img={f.img} description={f.description} title={f.title}/> )
      }
    </section>
  )
}

export default Features