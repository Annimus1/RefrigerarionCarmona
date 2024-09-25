import React from 'react';
import Header from './Header';
import Footer from './Footer';

function Layout({ children }) {

  return (
    <div className='overflow-x-clip relative'>
      <Header />

      {children}
      <Footer />
    </div>
  )
}

export default Layout

