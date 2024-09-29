import React from 'react'

function Galery() {
  const data = ["/photos/1.webp","/photos/2.webp","/photos/3.webp","/photos/4.webp","/photos/5.webp","/photos/6.webp","/photos/7.webp","/photos/8.webp",]
  const [show, setShow] = React.useState(false);
  const [selectedImage, setSelectedImage] = React.useState('');

  function handleClick(e){
    setShow(true);
    setSelectedImage(e.target.src);
  }

  return (
    <section className=' mb-40 flex justify-center'>

      {/* Modal */}
      <div className={` ${ show ? "":"hidden"} fixed top-0 right-0 left-0 bottom-0 z-50 flex justify-center items-center bg-blue-950/60`}>
        <div className="relative p-4 ">
          <div className="relative rounded-lg shadow bg-blue-950 w-[90vw] h-[80vh] md:w-[70vw] mad:h-[90vh]">
            {/* Close btn */}
            <button type="button" className="absolute top-3 end-2.5 text-gray-400 bg-transparent rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center hover:bg-gray-600 hover:text-white" onClick={()=> {setShow(false); setSelectedImage('')}}>
              <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
            {/* image */}
            <div className="p-4 flex justify-center items-center w-full h-full">
              <img className='max-h-full' src={selectedImage} alt="" />
            </div>
          </div>

        </div>
      </div>

      {/* Galery grid */}
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 items-center'>
        {/* max w350x h240 */}
        {
          data.map( (src) => <img className='max-w-[350px] max-h-[240px]' key={src} alt='Galery Image' src={src} onClick={(event) => handleClick(event)}/> ) 
        }
        
      </div>
    </section>
  )
}

export default Galery