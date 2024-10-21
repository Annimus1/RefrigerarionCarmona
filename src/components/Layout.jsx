import React from 'react';
import Header from './Header';
import Footer from './Footer';
import WhastappComponent from './WhastappComponent';

function Layout({ children }) {

  return (
    <div className='overflow-x-clip relative'>
      <Header />
      <WhastappComponent/>
      {children}
      <Footer />
    </div>
  )
}

export default Layout

