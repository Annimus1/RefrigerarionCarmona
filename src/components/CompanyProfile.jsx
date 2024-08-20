import React from 'react'

function CompanyProfile() {
    return (
        <section className='px-14 flex flex-col justify-center items-center mb-40
        md:flex-row md:gap-x-20 h-auto'>
            <img alt={''} src={'https://placehold.co/350x500'} />
            <div className='md:flex md:flex-col md:justify-start h-[500px]'>
                <h2 className='text-center text-background text-3xl font-bold my-3'>Refrigeracion Carmona</h2>
                <p className='text-pretty text-xl md:max-w-[40rem] md:text-wrap'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos molestiae minus, dolor esse quas quaerat, quia perferendis, doloribus nulla facere voluptate! Unde cum fuga molestiae nulla ad eligendi eum optio.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, possimus, culpa quos odit vel, similique suscipit rerum tempore temporibus beatae ab voluptate id deleniti. Dolore, quis repellendus? Adipisci, id necessitatibus.
                </p>
            </div>
        </section>
    )
}

export default CompanyProfile