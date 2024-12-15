import React from 'react'
import { Outlet } from 'react-router-dom';
import { Footer } from './Footer';
import { Header } from './Header';
export const DefaultLayout = () => {
  return (
    <div>
        {/* nav bar */}
<Header/>
        {/* actual page content */}
        <main className='main'><Outlet/></main>

        {/* footer */}
        <Footer/>
    </div>
  );
};
