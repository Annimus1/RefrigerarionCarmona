import React from 'react'
import WhatsappIcon from './WhatsappIcon.jsx'

function WhastappComponent() {
  return (
    <div className='cursor-pointer group fixed bottom-4 right-4 flex flex-col items-center bg-transparent'>
      <div className='relative bg-white rounded-md p-2 opacity-0 group-hover:opacity-100'>
        <p>Habla con nosotros 👋</p>
      </div>
      <a href={`#`}><WhatsappIcon /></a>
    </div>
  )
}

export default WhastappComponent