import React from 'react'
import WhatsappIcon from './WhatsappIcon.jsx'

function WhastappComponent() {
  return (
    <div className='cursor-pointer group fixed bottom-4 right-2 md:right-4 flex flex-col items-center bg-transparent'>
      <div className='relative bg-white rounded-md md:p-2 md:opacity-0 group-hover:md:opacity-100'>
        <p className='hidden md:block'>Habla con nosotros 👋</p>
      </div>
      <a href={`https://wa.me/${import.meta.env.VITE_PHONE}`}><WhatsappIcon /></a>
    </div>
  )
}

export default WhastappComponent