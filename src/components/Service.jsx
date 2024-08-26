import React from 'react'
import { Link } from 'react-router-dom';

function Service(props) {
  return (
    <article className={`w-full max-w-sm p-4 bg-blue-950 border border-gray-200 rounded-lg shadow sm:p-8 ${props.style ? props.style : ''}`}>

      <div className='flex justify-center mb-5'>
        <img src={props.img} className="rounded-lg" alt="" />
      </div>

      <div className="flex items-baseline text-white">
        <span className="text-3xl font-extrabold tracking-tight">{props.title}</span>
      </div>

      <ul role="list" className="space-y-5 my-7">
        {
          props.coverage.map((s, index) => {
            return <li className="flex items-center" key={index+props.title}>
              <svg className="flex-shrink-0 w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span className="text-base font-normal leading-tight text-gray-400 ms-3">{s}</span>
            </li>
          })
        }
      </ul>

      <Link to={props.url} className="text-white bg-blue-500 hover:bg-blue-800 duration-150 focus:outline-none font-medium rounded-lg text-md px-5 py-2.5 inline-flex justify-center w-full text-center">Ver más</Link>

    </article>
  )
}

export default Service