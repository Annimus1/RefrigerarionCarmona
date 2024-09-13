import React from 'react'
import Feature from './Feature'

function Features() {
  const features = [
    {
      id: 1,
      img: `/calidad.png`,
      title: 'Garantía',
      description: 'Todos nuestros Tecnicos estan excelentemente capacitados para realizar cualquier tipo de trabajo.'
    },
    {
      id: 2,
      img: `/confianza.png`,
      title: 'Responsabilidad',
      description: 'Nos enorgullecemos de atender al llamado de cada uno de nustros clientes, priorizando asi la atencion a cada uno de ellos.'
    },
    {
      id: 3,
      img: '/eficiencia.png',
      title: 'Eficiencia',
      description: 'Contamos con diversos suministros, por lo que podemos reemplazar cualquier pieza averiada a la brevedad.'
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