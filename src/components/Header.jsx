import React from 'react'
import { Link } from 'react-router-dom';
import MenuContent from './MenuContent';

function Header() {
  const [isShowed, setIsShowed] = React.useState(false);

  const handleShow = () => {
    setIsShowed(!isShowed);
  };

  function hideModal(params) {
    setIsShowed(false);
  };

  return (
    <header className="h-14 w-full px-5 py-2  bg-blue-950 opacity-100 backdrop-blur-sm relative">
      <nav className="min-w-screen flex justify-between items-center">
        {/* Logo */}
        <Link id="logo" to={'/'}>
          <div className='flex justify-center items-center gap-3'>
            <img className="w-[40px] h-[40px]"
              src="https://placehold.co/40x40"
              alt="Refrigeracion Carmona" title="Refrigeracion Carmona"
              width="50" height="50" />
            <p className='hidden md:block text-white text-lg font-bold'>Refrigeración Carmona</p>
          </div>
        </Link>

        {/* Menu */}
        <div className='hidden md:flex md:justify-end md:items-center md:gap-6 md:flex-grow'>
          <MenuContent hideModal={null} isShowed={null}/>
        </div>

        {/* Menu button */}
        <div className='md:hidden'>
          <svg className="hover:cursor-pointer fill-white" onClick={handleShow} xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" /></svg>
        </div>
      </nav>

      {/* Sidebar Menu */}
      <div className={`${isShowed ? 'translate-x-0' : '-translate-x-[-500px]'} 
        max-w-[420px] w-full h-screen flex flex-col absolute right-0 top-0 transition-transform ease-outs duration-700 bg-blue-950 p-6 text-white
        z-50`}>
        {/* Header */}
        <header className="flex justify-between items-end mb-6">
          {/* logo */}
          <img src="https://placehold.co/180x40" alt="Refrigeracion Carmona" width="180" />
          
          {/* svg X */}
          <svg className="hover:cursor-pointer fill-white" onClick={handleShow}
            xmlns="http://www.w3.org/2000/svg" width="35" height="35"
            viewBox="0 0 24 24">
            <path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z" />
          </svg>
        </header>

        {/* Side bar Content */}
        <div className="flex flex-col gap-3 h-[400px] max-h-[400px] overflow-y-scroll mb-5">
          <MenuContent isShowed={isShowed} hideModal={hideModal}/>
        </div>
      </div>
    </header>
  )
}

export default Header