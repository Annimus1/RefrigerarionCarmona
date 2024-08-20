import React from 'react'
import Feature from './Feature'

function Features() {
  const features = [
    {
      id: 1,
      img: 'https://placehold.co/200x200',
      title: 'Garantía',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit!'
    },
    {
      id: 2,
      img: 'https://placehold.co/200x200',
      title: 'Responsabilidad',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit!'
    },
    {
      id: 3,
      img: 'https://placehold.co/200x200',
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