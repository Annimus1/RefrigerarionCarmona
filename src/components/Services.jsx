import React from 'react'
import Service from './Service';

function Services() {
  const services = [
    {
      id: 1,
      img: 'https://www.coversa.com/wp-content/uploads/2022/11/WhatsApp-Image-2022-11-24-at-12.03.56.jpeg',
      title: 'Instalación',
      coverage: ["Sistemas de protección electrica", "Aires Acondicionados", "Cava Cuarto", 'Maquina de helados'],
      url: "/services"
    },
    {
      id: 2,
      img: 'https://media.licdn.com/dms/image/v2/D4D12AQHn3ZlKxKzGbg/article-inline_image-shrink_1000_1488/article-inline_image-shrink_1000_1488/0/1697791815087?e=2147483647&v=beta&t=hbWWhWl5KnxbuHCBpe7axKNyYJLMka-po4Dub7JkCRE',
      title: 'Reparación',
      coverage: ["Neveras","Congeladores","Enfriadores","Aires Acondicionados", "Cava Cuarto", "Maquinas de hielo", "Maquinas de Helado"],
      url: "/services"
    },
    {
      id: 3,
      img: 'https://aircon.pe/wp-content/uploads/2021/06/mantenimiento-de-aire-acondicionado-en-lima-aircon-peru-ld-1600x800.jpg',
      title: 'Mantenimiento',
      coverage: ["Aires Acondicionados","Neveras","Congeladores","Enfriadores", "Cava Cuarto"],
      url: "/services"
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