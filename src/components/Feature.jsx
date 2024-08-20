import React from 'react'
import { Link } from 'react-router-dom'

function Feature({img, title, description, url}) {
    return (
        <article className='flex flex-col justify-center items-center'>
            {/* image */}
            <img alt={''} src={img} />
            {/* title */}
            <h3 className='my-3 text-background font-bold text-lg'>{title}</h3>
            {/* description */}
            <p className='text-pretty text-center text-md'>{description}</p>
            {
                url ? <Link to={url} className='mt-5 text-md text-blue-500 p-2 border border-blue-500 rounded-md '>Saber más</Link> : null
            }
        </article>
    )
}

export default Feature