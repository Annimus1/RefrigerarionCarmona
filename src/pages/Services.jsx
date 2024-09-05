import React from 'react';
import ServicesPageComponent from '../components/ServicesPageComponent';

function Services() {

  return (
    <>

      {/* posible hero */}
      <section className='h-[95vh] bg-blue-950 text-white flex justify-center items-center flex-col mb-10'>
        <img className={'w-10 h-10 rounded-full'} src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Flag_of_Venezuela.svg/1280px-Flag_of_Venezuela.svg.png" alt="Bandera de venezuela" />
        <p>Desde Venezuela utilizamos nuestra vasta experiencia en refrigeracion para solventar cualquer necesidad que tenga nuestros clientes</p>
      </section>


      {/* Instalacion */}
      <ServicesPageComponent title={instalacion.title} reverse={instalacion.reverse} id={instalacion.id} img={instalacion.img} services={instalacion.services}/>
      <hr className="mx-4 h-px my-8 bg-blue-900 border-0 "></hr>


      {/* Mantenimiento */}
      <ServicesPageComponent title={mantenimiento.title} reverse={mantenimiento.reverse} id={mantenimiento.id} img={mantenimiento.img} services={mantenimiento.services}/>
      <hr className="mx-4 h-px my-8 bg-blue-900 border-0 "></hr>

      {/* Reparacion */}
      <ServicesPageComponent title={reparacion.title} reverse={reparacion.reverse} id={reparacion.id} img={reparacion.img} services={reparacion.services}/>

    </>
  )
}

export default Services

const instalacion = {
  id:"instalacion", 
  reverse: false, 
  title: "Instalación", 
  img: "https://www.coversa.com/wp-content/uploads/2022/11/WhatsApp-Image-2022-11-24-at-12.03.56.jpeg",
  services: [
    
    {
      title: "Sistemas de protección electrica",
      src: "https://blog.suileraltamirano.com/wp-content/uploads/2023/04/juhujh-1024x811.png"
    },
    {
      title: "Aires Acondicionados",
      src: "https://static.wixstatic.com/media/df39dd_d75341248c6c4e1d9f9137ecfd745caa~mv2.jpg/v1/fill/w_552,h_366,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/facbeook.jpg"
    },
    {
      title: "Cava Cuarto",
      src: "https://i.pinimg.com/474x/d7/31/50/d731501d1989f058590ce0726ffb8b45.jpg"
    },
    {
      title: "Maquinas de Helado",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMKXSOWmDgfVi-jQrABmZ23pVU9QAkYpjvX-TH-GZ36S6PPMOvnTCpNbLGbe1XdEof-Ps&usqp=CAU"
    },
    {
      title: "Maquinas de hielo",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRIKsNpGstA7vLEJ_xjoujMmMCv8aL97rm_Q&s"
    },
  ]
}

const mantenimiento = {
  id:"mantenimiento", 
  reverse: true, 
  title: "Mantenimiento", 
  img:"https://aircon.pe/wp-content/uploads/2021/06/mantenimiento-de-aire-acondicionado-en-lima-aircon-peru-ld-1600x800.jpg",
  services: [
    {
      title: "Neveras",
      src: "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/71892612_5/w=800,h=800,fit=pad"
    },
    {
      title: "Congeladores",
      src: "https://www.maxiequipos.com/150-large_default/congelador-horizontal-20-pies-marca-tecoven-pint.jpg"
    },
    {
      title: "Cava Cuarto",
      src: "https://i.pinimg.com/474x/d7/31/50/d731501d1989f058590ce0726ffb8b45.jpg"
    },
    {
      title: "Enfriadores",
      src: "https://www.maxiequipos.com/128-home_default/enfriador-2-tapas-marca-tecoven-acealum.jpg"
    },
    {
      title: "Aires Acondicionados",
      src: "https://static.wixstatic.com/media/df39dd_d75341248c6c4e1d9f9137ecfd745caa~mv2.jpg/v1/fill/w_552,h_366,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/facbeook.jpg"
    },
    {
      title: "Maquinas de hielo",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRIKsNpGstA7vLEJ_xjoujMmMCv8aL97rm_Q&s"
    },
    {
      title: "Maquinas de Helado",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMKXSOWmDgfVi-jQrABmZ23pVU9QAkYpjvX-TH-GZ36S6PPMOvnTCpNbLGbe1XdEof-Ps&usqp=CAU"
    },
  ]
}

const reparacion = {
  id:"reparacion", 
  reverse: false, 
  title: "Reparación",  
  img:"https://media.licdn.com/dms/image/v2/D4D12AQHn3ZlKxKzGbg/article-inline_image-shrink_1000_1488/article-inline_image-shrink_1000_1488/0/1697791815087?e=2147483647&v=beta&t=hbWWhWl5KnxbuHCBpe7axKNyYJLMka-po4Dub7JkCRE",
  services: [
    {
      title: "Neveras",
      src: "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/71892612_5/w=800,h=800,fit=pad"
    },
    {
      title: "Congeladores",
      src: "https://www.maxiequipos.com/150-large_default/congelador-horizontal-20-pies-marca-tecoven-pint.jpg"
    },

    {
      title: "Enfriadores",
      src: "https://www.maxiequipos.com/128-home_default/enfriador-2-tapas-marca-tecoven-acealum.jpg"
    },
    {
      title: "Aires Acondicionados",
      src: "https://static.wixstatic.com/media/df39dd_d75341248c6c4e1d9f9137ecfd745caa~mv2.jpg/v1/fill/w_552,h_366,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/facbeook.jpg"
    },
    {
      title: "Maquinas de hielo",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRIKsNpGstA7vLEJ_xjoujMmMCv8aL97rm_Q&s"
    },
    {
      title: "Cava Cuarto",
      src: "https://i.pinimg.com/474x/d7/31/50/d731501d1989f058590ce0726ffb8b45.jpg"
    },
    {
      title: "Maquinas de Helado",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMKXSOWmDgfVi-jQrABmZ23pVU9QAkYpjvX-TH-GZ36S6PPMOvnTCpNbLGbe1XdEof-Ps&usqp=CAU"
    },
    {
      title: "Enfriador Exhibidor",
      src: "https://fogel.com.ni/wp-content/uploads/2020/08/VE-13.jpg"
    },
    {
      title: "Dispensador de Agua",
      src: "https://ofik.com/wp-content/uploads/2022/08/858.jpeg"
    },
    {
      title: "Enfriador Charcutero",
      src: "https://http2.mlstatic.com/D_Q_NP_2X_682049-MLV50400565887_062022-E.webp"
    },
    
  ]
}